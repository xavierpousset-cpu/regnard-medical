/**
 * Home Page - Regnard Medical
 * Design: Industrial Minimalism
 * - Minimalisme industriel sobre
 * - Palette restreinte: blanc, gris béton, noir technique, accent bleu acier
 * - Typographie: DM Sans (display) + IBM Plex Sans (body)
 */

import ContactSection from "@/components/ContactSection";
import EhpadStudySection from "@/components/EhpadStudySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ValuesSection from "@/components/ValuesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TrustSection from "@/components/TrustSection";
import VideodigestBanner from "@/components/VideodigestBanner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProductsSection />
        {/* Lien vers la page Préparation Coloscopie */}
        <section className="py-12 bg-secondary text-center">
          <div className="container">
            <h2 className="text-2xl font-bold mb-4">Besoin d'informations sur la préparation coloscopique ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Découvrez notre guide complet sur l'hydrolavage colique, l'irrigation transanale et les alternatives aux laxatifs traditionnels.</p>
            <a href="/preparation-coloscopie" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Lire le guide complet</a>
          </div>
        </section>
        <EhpadStudySection />
        <ValuesSection />
        <div id="etablissements">
          <TrustSection />
        </div>
        <VideodigestBanner />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
