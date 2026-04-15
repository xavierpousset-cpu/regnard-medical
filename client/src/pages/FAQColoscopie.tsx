/**
 * FAQ Coloscopie - Frequently Asked Questions
 * Optimisé pour les mots-clés : coloscopie, constipation, fécalome, laxatifs
 */

import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce qu'une coloscopie et pourquoi est-elle importante ?",
    answer: "Une coloscopie est un examen médical qui permet au médecin d'examiner l'intérieur du côlon et du rectum. Elle est importante pour dépister les polypes, les cancers du côlon, les inflammations et d'autres anomalies. C'est l'examen de référence pour le dépistage du cancer colorectal.",
    keywords: ["coloscopie", "examen coloscopie", "dépistage cancer colorectal"]
  },
  {
    question: "Quelle est la différence entre une coloscopie et une colonoscopie ?",
    answer: "Il n'y a pas de différence. Les termes \"coloscopie\" et \"colonoscopie\" sont synonymes. Les deux désignent le même examen endoscopique du côlon.",
    keywords: ["coloscopie", "colonoscopie", "examen endoscopique"]
  },
  {
    question: "Comment se préparer pour une coloscopie ?",
    answer: "La préparation coloscopique est cruciale pour la qualité de l'examen. Elle consiste à nettoyer complètement le côlon. Traditionnellement, on utilisait des laxatifs, mais l'hydrolavage colique (irrigation transanale) est maintenant une alternative efficace et mieux tolérée, particulièrement pour les patients fragiles.",
    keywords: ["préparation coloscopie", "préparation intestinale", "nettoyage côlon"]
  },
  {
    question: "Qu'est-ce que l'irrigation transanale (ITA) ?",
    answer: "L'irrigation transanale (ITA), aussi appelée hydrolavage colique, est une technique de préparation coloscopique qui utilise l'eau tiède pour nettoyer le côlon. Contrairement aux laxatifs, elle est non invasive, bien tolérée et particulièrement adaptée aux patients gériatriques et constipés chroniques.",
    keywords: ["irrigation transanale", "ITA", "hydrolavage colique", "nettoyage côlon"]
  },
  {
    question: "Quels sont les avantages de l'hydrolavage colique par rapport aux laxatifs ?",
    answer: "L'hydrolavage colique offre plusieurs avantages : meilleure efficacité, moins d'effets secondaires, préparation plus rapide (30-45 minutes vs 4-6 heures), meilleure tolérance chez les patients fragiles, pas de risque de déshydratation, et efficacité même chez les patients constipés chroniques.",
    keywords: ["hydrolavage colique", "laxatifs", "préparation coloscopie", "alternatives laxatifs"]
  },
  {
    question: "Qu'est-ce qu'un fécalome et comment le traiter ?",
    answer: "Un fécalome est une accumulation anormale de matières fécales durcies dans le côlon. C'est une condition sérieuse qui peut causer une occlusion intestinale. L'hydrolavage colique est particulièrement efficace pour traiter le fécalome car l'eau ramollit progressivement les matières fécales durcies sans risque de perforation.",
    keywords: ["fécalome", "accumulation fécale", "occlusion intestinale", "constipation sévère"]
  },
  {
    question: "Qu'est-ce que la constipation chronique et comment la gérer ?",
    answer: "La constipation chronique est une condition où les selles sont rares (moins de 3 par semaine) et difficiles à évacuer pendant au moins 3 mois. Elle affecte particulièrement les personnes âgées. L'hydrolavage colique peut aider à soulager la constipation chronique en nettoyant efficacement le côlon et en rétablissant une fonction intestinale normale.",
    keywords: ["constipation chronique", "constipation persistante", "troubles digestifs", "gestion constipation"]
  },
  {
    question: "Quels sont les effets secondaires des laxatifs traditionnels ?",
    answer: "Les laxatifs traditionnels peuvent causer : nausées, vomissements, crampes abdominales, diarrhée, déshydratation, déséquilibre électrolytique, et interactions médicamenteuses. Ces effets secondaires sont particulièrement problématiques chez les personnes âgées et les patients fragiles.",
    keywords: ["laxatifs", "effets secondaires laxatifs", "préparation coloscopie", "complications laxatifs"]
  },
  {
    question: "L'hydrolavage colique est-il sûr pour les patients gériatriques ?",
    answer: "Oui, l'hydrolavage colique est très sûr pour les patients gériatriques. Contrairement aux laxatifs, il ne cause pas de déshydratation, n'a pas d'interactions médicamenteuses, et est bien toléré. C'est l'option recommandée pour les patients âgés et fragiles en EHPAD.",
    keywords: ["hydrolavage colique", "patients gériatriques", "EHPAD", "personnes âgées", "sécurité"]
  },
  {
    question: "Combien de temps dure une préparation coloscopique avec l'hydrolavage colique ?",
    answer: "La préparation coloscopique avec l'hydrolavage colique dure généralement 30 à 45 minutes. C'est beaucoup plus rapide que les laxatifs traditionnels qui prennent 4 à 6 heures. Cette durée plus courte améliore le confort du patient et réduit le risque de complications.",
    keywords: ["hydrolavage colique", "durée préparation", "rapidité", "efficacité"]
  },
  {
    question: "Est-ce que l'irrigation transanale peut être utilisée chez les patients constipés chroniques ?",
    answer: "Oui, l'irrigation transanale est particulièrement efficace chez les patients constipés chroniques. Contrairement aux laxatifs qui peuvent être inefficaces chez ces patients, l'ITA nettoie complètement le côlon en utilisant l'eau tiède à basse pression, ce qui ramollit progressivement les matières fécales durcies.",
    keywords: ["irrigation transanale", "constipation chronique", "patients constipés", "efficacité ITA"]
  },
  {
    question: "Quels sont les risques de la coloscopie ?",
    answer: "Les risques de la coloscopie sont rares mais incluent : perforation du côlon, saignement, infection, et réactions à l'anesthésie. Une bonne préparation coloscopique réduit ces risques. L'utilisation de l'hydrolavage colique plutôt que des laxatifs réduit également les complications liées à la préparation.",
    keywords: ["risques coloscopie", "complications coloscopie", "sécurité coloscopie"]
  },
  {
    question: "Comment O-PREP® DIVAN améliore-t-il la préparation coloscopique ?",
    answer: "O-PREP® DIVAN est un système d'hydrolavage colique ergonomique et sécurisé qui utilise l'eau tiède (37°C) à basse pression. Il offre : confort amélioré, sécurité renforcée, efficacité prévisible, et adaptabilité aux patients fragiles. C'est la solution idéale pour les EHPAD et les établissements de santé.",
    keywords: ["O-PREP DIVAN", "hydrolavage colique", "système ergonomique", "préparation coloscopie"]
  }
];

export default function FAQColoscopie() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Helmet>
        <title>FAQ Coloscopie : Questions sur Préparation, Hydrolavage & Constipation | Regnard Medical</title>
        <meta name="description" content="Questions fréquemment posées sur la coloscopie, la préparation coloscopique, l'hydrolavage colique, l'irrigation transanale, la constipation chronique et le fécalome." />
        <meta name="keywords" content="FAQ coloscopie, questions coloscopie, préparation coloscopie, hydrolavage colique, irrigation transanale, constipation, fécalome, laxatifs" />
        <link rel="canonical" href="https://www.regnardmedical.com/faq-coloscopie" />
        <meta property="og:title" content="FAQ Coloscopie : Vos Questions Répondues" />
        <meta property="og:description" content="Trouvez les réponses à vos questions sur la coloscopie, la préparation intestinale et l'hydrolavage colique." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumb items={[
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/" },
          { label: "FAQ Coloscopie" },
        ]} />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              FAQ Coloscopie
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Trouvez les réponses à vos questions sur la coloscopie, la préparation coloscopique, l'hydrolavage colique et la gestion de la constipation.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-secondary hover:bg-secondary/80 transition-colors text-left"
                  >
                    <h3 className="font-semibold text-foreground text-lg">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 py-4 bg-background border-t border-border">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.keywords.map((keyword, kIndex) => (
                          <span
                            key={kIndex}
                            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <section className="mt-16 bg-primary text-primary-foreground p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Vous avez d'autres questions ?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contactez notre équipe pour obtenir plus d'informations sur la préparation coloscopique et l'hydrolavage colique.
              </p>
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Nous contacter
              </Button>
            </section>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
