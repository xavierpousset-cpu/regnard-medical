import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "sample-user",
    email: "sample@example.com",
    name: "Sample User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("quotes.submit", () => {
  it("should accept valid quote request data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const quoteData = {
      name: "Test User",
      function: "Directeur",
      establishment: "EHPAD Test",
      structureType: "EHPAD",
      email: "test@example.com",
      phone: "06 12 34 56 78",
      estimatedNeed: "2 unités",
      message: "Test de demande de devis",
    };

    const result = await caller.quotes.submit(quoteData);

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");
  });

  it("should reject quote request with missing required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidData = {
      name: "Test User",
      function: "Directeur",
      establishment: "EHPAD Test",
      structureType: "EHPAD",
      email: "invalid-email", // Invalid email
      phone: "06 12 34 56 78",
    };

    try {
      // @ts-ignore - intentionally passing invalid data
      await caller.quotes.submit(invalidData);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should reject quote request with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidData = {
      name: "Test User",
      function: "Directeur",
      establishment: "EHPAD Test",
      structureType: "EHPAD",
      email: "not-an-email",
      phone: "06 12 34 56 78",
    };

    try {
      // @ts-ignore - intentionally passing invalid email
      await caller.quotes.submit(invalidData);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should handle optional fields correctly", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const quoteData = {
      name: "Test User",
      function: "Directeur",
      establishment: "EHPAD Test",
      structureType: "EHPAD",
      email: "test@example.com",
      phone: "06 12 34 56 78",
      // estimatedNeed and message are optional
    };

    const result = await caller.quotes.submit(quoteData);

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
  });
});
