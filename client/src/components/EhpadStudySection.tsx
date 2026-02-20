import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Composant EhpadStudySection
 * Section 4 de la page d'accueil
 * Invitation à participer à l'étude EHPAD
 * Design : Industrial Minimalism
 */
export default function EhpadStudySection() {
  const [, navigate] = useLocation();
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Titre principal */}
          <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            {t('ehpad.study.title')}
          </h2>

          {/* Texte descriptif */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('ehpad.study.description')}
          </p>

          {/* Bouton d'action */}
          <Button
            onClick={() => navigate("/questionnaire")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            {t('ehpad.study.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
