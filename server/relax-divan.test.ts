import { describe, expect, it } from "vitest";
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

describe("RELAX DIVAN - Quote Submission", () => {
  it("should accept valid quote request for RELAX DIVAN fixed version", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const quoteData = {
      name: "Dr. Martin Dupont",
      function: "Directeur Médical",
      establishment: "EHPAD Les Chênes",
      structureType: "EHPAD",
      email: "martin.dupont@ehpad-chenes.fr",
      phone: "04 12 34 56 78",
      estimatedNeed: "1 unité fixe",
      message: "Intéressé par la version fixe du RELAX DIVAN pour notre salle de bain accessible",
    };

    const result = await caller.quotes.submit(quoteData);

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");
  });

  it("should accept valid quote request for RELAX DIVAN mobile version", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const quoteData = {
      name: "Infirmière Sophie Bernard",
      function: "Cadre de Santé",
      establishment: "Clinique Gérontologique Saint-Louis",
      structureType: "Clinique",
      email: "sophie.bernard@clinique-sl.fr",
      phone: "06 87 65 43 21",
      estimatedNeed: "2 unités mobiles",
      message: "Nous recherchons la version mobile avec ajustement de hauteur pour nos salles de bain",
    };

    const result = await caller.quotes.submit(quoteData);

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");
  });

  it("should handle quote request with both versions", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const quoteData = {
      name: "Directeur Général",
      function: "Direction",
      establishment: "Centre Hospitalier Régional",
      structureType: "CH",
      email: "direction@chr-region.fr",
      phone: "05 55 55 55 55",
      estimatedNeed: "3 unités fixe + 2 unités mobile",
      message: "Nous souhaitons équiper plusieurs étages avec les deux versions du RELAX DIVAN",
    };

    const result = await caller.quotes.submit(quoteData);

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
  });

  it("should reject quote request with invalid email for RELAX DIVAN", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidData = {
      name: "Test User",
      function: "Directeur",
      establishment: "EHPAD Test",
      structureType: "EHPAD",
      email: "invalid-email-format",
      phone: "06 12 34 56 78",
      estimatedNeed: "1 unité",
      message: "Test RELAX DIVAN",
    };

    try {
      // @ts-ignore - intentionally passing invalid data
      await caller.quotes.submit(invalidData);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should handle optional fields for RELAX DIVAN quote", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const quoteData = {
      name: "Test User",
      function: "Directeur",
      establishment: "EHPAD Test",
      structureType: "EHPAD",
      email: "test@ehpad.fr",
      phone: "06 12 34 56 78",
      // estimatedNeed and message are optional
    };

    const result = await caller.quotes.submit(quoteData);

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
  });
});
