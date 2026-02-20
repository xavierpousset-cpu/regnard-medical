/**
 * Page Demande de Devis - Regnard Medical
 * Formulaire Tally pour demande de devis
 * URL: /demande-devis
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DemandeDevis() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Demande de Devis</h1>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour vos besoins en réparation et maintenance de dispositifs médicaux.
            </p>
          </div>
          
          <iframe
            src="https://tally.so/r/nPLQJk?transparentBackground=1"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Demande de Devis - Regnard Medical"
            style={{
              border: "none",
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
