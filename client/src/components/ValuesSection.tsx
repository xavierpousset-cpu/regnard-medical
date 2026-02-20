/**
 * Values Section - Regnard Medical
 * Design: Industrial Minimalism
 * - 3 piliers : Expertise, Fiabilité, Innovation
 * - Layout horizontal avec séparateurs
 */

import { Award, Shield, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getValues = (t: (key: string) => string) => [
  {
    icon: Award,
    title: t('values.expertise'),
    description: t('values.expertise.description'),
  },
  {
    icon: Shield,
    title: t('values.reliability'),
    description: t('values.reliability.description'),
  },
  {
    icon: Lightbulb,
    title: t('values.innovation'),
    description: t('values.innovation.description'),
  },
];

export default function ValuesSection() {
  const { t } = useLanguage();
  const values = getValues(t);

  return (
    <section className="py-12 md:py-32 bg-background">
      <div className="container">
        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          {t('values.commitments')}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative">
              {/* Vertical guide line */}
              {index < values.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-px h-full bg-border"></div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <value.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-4 font-display font-semibold text-foreground">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
