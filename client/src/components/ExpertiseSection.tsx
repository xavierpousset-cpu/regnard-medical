/**
 * Expertise Section - Regnard Medical
 * Design: Industrial Minimalism
 * - 3 colonnes avec séparateurs verticaux
 * - Icônes minimalistes
 * - Espacement généreux
 */

import { Wrench, FlaskConical, Ruler } from "lucide-react";

const expertiseItems = [
  {
    icon: Wrench,
    title: "Réparation",
    items: [
      "Maintenance spécialisée",
      "Remise en conformité",
      "Prolongation du cycle de vie",
    ],
  },
  {
    icon: FlaskConical,
    title: "Recherche & Développement",
    items: [
      "Conception de solutions techniques",
      "Prototypage",
      "Optimisation fonctionnelle",
    ],
  },
  {
    icon: Ruler,
    title: "Bureau d'Études",
    items: [
      "Analyse technique",
      "Amélioration produit",
      "Développement sur mesure",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        {/* Section number */}
        <div className="section-number mb-8">02 — Expertise</div>

        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          Une expertise technique complète au service de vos équipements médicaux
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
