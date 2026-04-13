/**
 * Page Étude de Marché - Regnard Medical
 * Formulaire Tally dédié aux professionnels de santé
 * URL: /etude-marche
 * 
 * Design: Formulaire fullscreen sans scrollbar interne
 */

import Header from "@/components/Header";
import { useEffect } from "react";

export default function EtudeMarche() {
  useEffect(() => {
    // Charger le script Tally si nécessaire
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      {/* Fullscreen form - takes all remaining space */}
      <main className="flex-1 w-full overflow-hidden">
        <iframe
          data-tally-src="https://tally.so/r/xXZ8yo?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Étude de marché O-PREP — Regnard Medical"
          style={{
            border: "none",
            display: "block",
          }}
        />
      </main>

      {/* CSS to hide Tally iframe scrollbar only */}
      <style>{`
        iframe[data-tally-src] {
          scrollbar-width: none;
        }
        iframe[data-tally-src]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
