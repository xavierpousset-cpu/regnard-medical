import { useEffect } from "react";

/**
 * Composant TallyForm
 * Intègre le formulaire Tally.so en iframe
 * Positionnement : Section 4 de la page d'accueil
 * Design : Industrial Minimalism avec fond transparent
 */
export default function TallyForm() {
  useEffect(() => {
    // Charger le script Tally si nécessaire
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Titre de la section */}
          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
              04 — Diagnostic Technique
            </p>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Demandez votre diagnostic
            </h2>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous pour que notre équipe puisse évaluer vos besoins et vous proposer une solution adaptée.
            </p>
          </div>

          {/* Formulaire Tally */}
          <div className="bg-card rounded-lg border border-border p-8">
            <iframe
              data-tally-src="https://tally.so/r/xXZ8yo?transparentBackground=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Étude de marché O-PREP — Regnard Medical"
              className="w-full"
              style={{
                minHeight: "600px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
