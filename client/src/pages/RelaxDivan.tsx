/**
 * RELAX DIVAN Product Page
 * Design: Industrial Minimalism with Human Touch
 * - Professional, reassuring, focused on safety and comfort
 * - Adapted for EHPAD, geriatric services, and healthcare centers
 * - Toilet solution for patients who cannot remain seated
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Heart, Users, Accessibility, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function RelaxDivan() {
  const [formData, setFormData] = useState({
    name: "",
    function: "",
    establishment: "",
    structureType: "",
    email: "",
    phone: "",
    estimatedNeed: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitQuote = trpc.quotes.submit.useMutation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitQuote.mutateAsync(formData);
      toast.success("Votre demande de devis a été envoyée. Réponse sous 48h ouvrées.");
      setFormData({
        name: "",
        function: "",
        establishment: "",
        structureType: "",
        email: "",
        phone: "",
        estimatedNeed: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erreur lors de l'envoi de la demande. Veuillez réessayer.");
      console.error(error);
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById("devis-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-background to-secondary mt-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-bold text-foreground mb-6 leading-tight">
              RELAX® DIVAN
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Solution sanitaire pour patients en position allongée
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Un dispositif ergonomique et sécurisé conçu pour les patients fragiles qui ne peuvent pas rester assis, adapté aux EHPAD et milieux hospitaliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Versions Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-bold text-foreground mb-16 text-center">
            Deux versions adaptées à vos besoins
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fixed Version */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/PNL2ECYJnSNAEijU678vC4-img-1_1772034513000_na1fn_cmVsYXgtZGl2YW4tZml4ZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L1BOTDJFQ1lKblNOQUVpalU2Nzh2QzQtaW1nLTFfMTc3MjAzNDUxMzAwMF9uYTFmbl9jbVZzWVhndFpHbDJZVzR0Wm1sNFpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z7r681k~AOEXrPHNkkH615YnjWA3bkr99wxk6K-hZ0wbJNFz6eEXMrzBUIR8ZFNlxqBiom6VAfF~MAlyfEcpaEKdJ3zksNxGWC3s0AOQBtxkETpday16RWrGsO2Ny~Xk2u34WW~4mf4Q-owHQQ02fLRxapGA1AZOCLosVOfmaxzqPuFvaiKxp1K~DZL6PLfuggvhh1knZv5yXUbzpobkHZUUcJy6OoNtSkTWjU6Eszj2hNhgi4Fr9jy7bY8x6udSu57L1IiT99HSQ8oH5vcWVdJ52K0skyk3rsU2QAUpCFk8Cz6nm0xOp9catepdVwAina82qw~ikaQLvBsT0B8nEg__"
                alt="RELAX DIVAN - Version fixe"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="font-semibold text-foreground text-xl mb-4">Version Fixe</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Installation stationnaire, idéale pour les espaces dédiés et les salles de bains standards.
                </p>
                <ul className="space-y-3">
                  {[
                    "Structure stable et robuste",
                    "Installation murale ou sur socle",
                    "Maintenance simplifiée",
                    "Coût d'installation réduit",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Version */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/PNL2ECYJnSNAEijU678vC4-img-2_1772034505000_na1fn_cmVsYXgtZGl2YW4tbW9iaWxl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L1BOTDJFQ1lKblNOQUVpalU2Nzh2QzQtaW1nLTJfMTc3MjAzNDUwNTAwMF9uYTFmbl9jbVZzWVhndFpHbDJZVzR0Ylc5aWFXeGwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZtOc~-YWwMMcXHEiBwrUn3awanOvs-gsKWKHcyX5eKw1AtUqbLaHg9PKtwYhgilByzJa7AFLbhx5g5A~tT-7oZP4m0aVp1v9YI~CzSf7PxrlHm~StX~WGpW8~XM~LSBEot5o25oYpJV1PBRPLumxX7TpgE9ynAzq0kvChG5z3MOVfS0nbbLemE0ziSD~SP6RaanIu6-DLY~8AM07KVHQVkNHgpt4Uyk7vX9ZQmqGH30-EThuZxkAgSVfMOEaPMlpWziPIxwqAUTpCuaVhI5jqWa0FJ7Z6XM4iepcTPo7byccqqBDv~yWU2zUpWO8k5rLh59xJFlDccYVtV29yiOndg__"
                alt="RELAX DIVAN - Version mobile"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="font-semibold text-foreground text-xl mb-4">Version Mobile</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sur roulettes avec ajustement de hauteur, pour une flexibilité maximale et une mobilité optimale.
                </p>
                <ul className="space-y-3">
                  {[
                    "Roulettes de déplacement",
                    "Ajustement hydraulique de hauteur",
                    "Mobilité entre salles",
                    "Flexibilité organisationnelle",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-bold text-foreground mb-8">Une solution pensée pour le confort et la sécurité</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                RELAX®DIVAN est un dispositif ergonomique conçu pour les patients fragiles qui ne peuvent pas rester assis. Il offre une solution sécurisée et confortable pour les environnements EHPAD et hospitaliers.
              </p>
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-6">Caractéristiques principales :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Position allongée confortable et sécurisée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Matériaux hygiéniques et faciles à nettoyer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Rampes de sécurité intégrées</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Conception robuste adaptée aux environnements médicalisés</span>
                  </li>
                </ul>
              </div>
              <p>
                Sa conception pensée pour les patients fragiles réduit les risques de chute, d'inconfort et de manipulation excessive. Le système s'intègre facilement dans les protocoles existants sans modification majeure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="font-bold text-foreground mb-16">Bénéfices spécifiques pour EHPAD et gériatrie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Sécurité renforcée",
                description: "Structure stable, réduction des risques de déséquilibre et de chute.",
              },
              {
                icon: Heart,
                title: "Respect du patient",
                description: "Maintien du confort du patient tout au long du processus.",
              },
              {
                icon: Users,
                title: "Soulagement des équipes",
                description: "Moins de contraintes posturales pour les soignants, travail facilité.",
              },
              {
                icon: Accessibility,
                title: "Accessibilité optimale",
                description: "Conçu pour les patients fragiles et à mobilité réduite.",
              },
              {
                icon: Award,
                title: "Hygiène & entretien simplifiés",
                description: "Matériaux adaptés aux environnements médicalisés, nettoyage aisé.",
              },
              {
                icon: CheckCircle2,
                title: "Intégration fluide",
                description: "S'adapte aux protocoles existants sans modification majeure.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors duration-150">
                  <Icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizational Impact */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-bold text-foreground mb-8">Impact organisationnel pour les décideurs</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            RELAX®DIVAN contribue directement à l'amélioration de votre structure :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              "Fluidifier l'organisation des soins",
              "Réduire le temps de mobilisation du personnel",
              "Améliorer la qualité perçue par les familles",
              "Sécuriser les protocoles en service gérontologie",
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-secondary rounded-lg border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Validation */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="font-bold text-foreground mb-12">Confiance & Validation</h2>
          <div className="max-w-3xl bg-background p-12 rounded-lg border-2 border-primary">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une innovation développée sur le terrain, validée par l'usage.
            </p>
            <ul className="space-y-4">
              {[
                "✔ Testé en environnement clinique",
                "✔ Développé avec des professionnels de santé",
                "✔ Adapté aux patients âgés et à mobilité réduite",
                "✔ Conception française",
                "✔ Conforme aux exigences des dispositifs médicaux",
              ].map((item, index) => (
                <li key={index} className="text-foreground font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="devis-form" className="py-24 bg-secondary">
        <div className="container max-w-2xl">
          <h2 className="font-bold text-foreground mb-12">Demander un devis personnalisé</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6 bg-background p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nom *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Fonction *</label>
                <input
                  type="text"
                  name="function"
                  value={formData.function}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Cadre de santé, Direction, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Établissement *</label>
                <input
                  type="text"
                  name="establishment"
                  value={formData.establishment}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Nom de l'établissement"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Type de structure *</label>
                <select
                  name="structureType"
                  value={formData.structureType}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="">Sélectionner...</option>
                  <option value="EHPAD">EHPAD</option>
                  <option value="CH">Centre Hospitalier</option>
                  <option value="Clinique">Clinique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="votre.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Besoin estimé</label>
              <input
                type="text"
                name="estimatedNeed"
                value={formData.estimatedNeed}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="Ex: 1 unité, 5 unités, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                placeholder="Décrivez vos besoins spécifiques..."
              />
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Réponse sous 48h ouvrées.</strong> Nous traiterons votre demande avec attention pour vous proposer une solution adaptée.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
            >
              Recevoir une proposition personnalisée
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
