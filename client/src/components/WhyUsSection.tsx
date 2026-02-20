/**
 * Why Us Section - Regnard Medical
 * Design: Industrial Minimalism
 * - Arguments différenciants
 * - Image de fond avec overlay
 */

const differentiators = [
  {
    title: "Expertise technique terrain",
    description:
      "Nos équipes interviennent directement sur site et maîtrisent les contraintes opérationnelles des établissements de santé.",
  },
  {
    title: "Vision long terme",
    description:
      "Nous accompagnons nos partenaires dans la durée, en assurant la pérennité et l'évolution de leurs équipements médicaux.",
  },
  {
    title: "Maîtrise des dispositifs médicaux",
    description:
      "Une connaissance approfondie des normes, des réglementations et des exigences spécifiques au secteur médical.",
  },
  {
    title: "Capacité R&D interne",
    description:
      "Un bureau d'études intégré capable de concevoir, prototyper et industrialiser des solutions techniques innovantes.",
  },
  {
    title: "Structure agile",
    description:
      "Une organisation réactive qui s'adapte rapidement aux besoins spécifiques de chaque projet et de chaque partenaire.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-32 bg-secondary">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/BndEUYCABGUfi8qq8lXOOF-img-4_1771423105000_na1fn_bWVkaWNhbC1wcmVjaXNpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L0JuZEVVWUNBQkdVZmk4cXE4bFhPT0YtaW1nLTRfMTc3MTQyMzEwNTAwMF9uYTFmbl9iV1ZrYVdOaGJDMXdjbVZqYVhOcGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YPZ9K7mWOaq9pVFmmFPLmcJplWzpLQgFMPIPIoWs~~1kjefYYzscPvmERVZpgtfBjAoiNgPVJbAuA5HjqWCgYwVIFad5I9JGlw26OwJgUf6tDdp7iOpOcl~HWnjDxNPB2NFYIVhkBAF1j2iDmZ739EDjaIMMewgromAWUDsdxRKovE730wk4qIm4Uszp3NAKrANrYq4ZKeJIXqILfYD1NbB0shj6l9Ttj3pnzVTDuIbrn-Gi88oI~b0XapWx9mWmP5Awr3AadgmW4YGVipjfD-sFOYk0EhN2no8BD3OygSO-819NhXRgh2pGKDzXR1kfBanqvwy8O836bACBSHRVaw__"
          alt="Précision médicale"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        {/* Section number */}
        <div className="section-number mb-8">05 — Pourquoi Regnard Medical</div>

        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          Un partenaire technique de confiance pour vos dispositifs médicaux
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {differentiators.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary">
              <h4 className="mb-3 font-display font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
