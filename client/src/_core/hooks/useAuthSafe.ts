import { useCallback, useEffect, useMemo, useState } from "react";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { TRPCClientError } from "@trpc/client";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

type AuthState = {
  user: any;
  loading: boolean;
  error: any;
  isAuthenticated: boolean;
  refresh: () => Promise<any>;
  logout: () => Promise<void>;
};

const DEFAULT_AUTH_STATE: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  refresh: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

/**
 * useAuthSafe - Hook d'authentification qui gère gracieusement l'absence de contexte tRPC
 * Retourne les données d'authentification du localStorage si le contexte n'est pas disponible
 */
export function useAuthSafe(options?: UseAuthOptions): AuthState {
  const { redirectOnUnauthenticated = false, redirectPath = getLoginUrl() } =
    options ?? {};

  // État pour tracker si le contexte tRPC est disponible
  const [contextAvailable, setContextAvailable] = useState(false);
  const [cachedUser, setCachedUser] = useState<any>(null);

  // Essayer d'accéder au contexte tRPC
  useEffect(() => {
    try {
      // Vérifier si le contexte tRPC est disponible en essayant d'accéder à trpc
      if (trpc && typeof trpc.useUtils === 'function') {
        setContextAvailable(true);
      }
    } catch (error) {
      setContextAvailable(false);
    }

    // Charger les données utilisateur du localStorage
    try {
      const cached = localStorage.getItem("manus-runtime-user-info");
      if (cached) {
        setCachedUser(JSON.parse(cached));
      }
    } catch (error) {
      console.warn("Failed to load cached user info", error);
    }
  }, []);

  // Si le contexte n'est pas disponible, retourner les données du cache
  if (!contextAvailable) {
    return {
      user: cachedUser,
      loading: false,
      error: null,
      isAuthenticated: Boolean(cachedUser),
      refresh: () => Promise.resolve(),
      logout: () => Promise.resolve(),
    };
  }

  // Si le contexte est disponible, utiliser les hooks tRPC normalement
  const utils = trpc.useUtils();

  const meQuery = trpc.auth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      utils.auth.me.setData(undefined, null);
    },
  });

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error: unknown) {
      if (
        error instanceof TRPCClientError &&
        error.data?.code === "UNAUTHORIZED"
      ) {
        return;
      }
      throw error;
    } finally {
      utils.auth.me.setData(undefined, null);
      await utils.auth.me.invalidate();
    }
  }, [logoutMutation, utils]);

  const state = useMemo(() => {
    localStorage.setItem(
      "manus-runtime-user-info",
      JSON.stringify(meQuery.data)
    );
    return {
      user: meQuery.data ?? null,
      loading: meQuery.isLoading || logoutMutation.isPending,
      error: meQuery.error ?? logoutMutation.error ?? null,
      isAuthenticated: Boolean(meQuery.data),
    };
  }, [
    meQuery.data,
    meQuery.error,
    meQuery.isLoading,
    logoutMutation.error,
    logoutMutation.isPending,
  ]);

  useEffect(() => {
    if (!redirectOnUnauthenticated) return;
    if (meQuery.isLoading || logoutMutation.isPending) return;
    if (state.user) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname === redirectPath) return;

    window.location.href = redirectPath;
  }, [
    redirectOnUnauthenticated,
    redirectPath,
    logoutMutation.isPending,
    meQuery.isLoading,
    state.user,
  ]);

  return {
    ...state,
    refresh: () => meQuery.refetch(),
    logout,
  };
}
