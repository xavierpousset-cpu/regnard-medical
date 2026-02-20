/**
 * Expertise Section - Regnard Medical
 * Design: Industrial Minimalism
 * - 3 colonnes avec séparateurs verticaux
 * - Icônes minimalistes
 * - Espacement généreux
 */

import { Zap, Cog, Ruler } from "lucide-react";

const getExpertiseItems = () => [
  {
    icon: Zap,
    title: "Innovation",
    items: [
      "Conception innovante",
      "Conception innovante",
      "Prototypage rapide",
    ],
  },
  {
    icon: Cog,
    title: "Fabrication",
    items: [
      "Expertise en fabrication",
      "Optimisation des procédés",
      "Contrôle qualité",
    ],
  },
  {
    icon: Ruler,
    title: "Études",
    items: [
      "Études techniques",
      "Amélioration produit",
      "Développement sur mesure",
    ],
  },
];

export default function ExpertiseSection() {
  const expertiseItems = getExpertiseItems();
  
  return (
    <section className="py-12 md:py-32 bg-background">
      <div className="container">
        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          [Texte]
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Vertical guide line - Industrial Minimalism signature */}
              {index < expertiseItems.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-px h-full bg-border"></div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <item.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-6 font-display font-semibold text-foreground">
                {item.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {item.items.map((listItem, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-2 h-1 w-1 flex-shrink-0 bg-foreground"></span>
                    <span className="text-muted-foreground">{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
