/**
 * Préparation Coloscopie - Resource Page
 * Optimisé pour les mots-clés : préparation coloscopie, hydrolavage colique, irrigation transanale, laxatifs
 */

import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, AlertCircle, BookOpen, Users } from "lucide-react";

export default function PreparationColoscopie() {
  return (
    <>
      <Helmet>
        <title>Préparation Coloscopie : Hydrolavage Colique & Irrigation Transanale | Regnard Medical</title>
        <meta name="description" content="Guide complet de la préparation coloscopie : hydrolavage colique, irrigation transanale (ITA), alternatives aux laxatifs. Découvrez O-PREP® DIVAN pour une préparation sécurisée en EHPAD." />
        <meta name="keywords" content="préparation coloscopie, hydrolavage colique, irrigation transanale, ITA, laxatifs coloscopie, préparation intestinale, fécalome, constipation chronique" />
        <link rel="canonical" href="https://www.regnardmedical.com/preparation-coloscopie" />
        <meta property="og:title" content="Préparation Coloscopie : Guide Complet de l'Hydrolavage Colique" />
        <meta property="og:description" content="Tout ce que vous devez savoir sur la préparation coloscopique, l'hydrolavage colique et l'irrigation transanale pour EHPAD et établissements de santé." />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumb items={[
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/" },
          { label: "Préparation Coloscopie" },
        ]} />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Préparation Coloscopie : Guide Complet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Découvrez les meilleures pratiques pour préparer une coloscopie, des alternatives aux laxatifs traditionnels, et comment l'hydrolavage colique révolutionne la préparation intestinale.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            {/* Table of Contents */}
            <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
              <h2 className="font-bold text-foreground mb-6">Table des matières</h2>
              <ul className="space-y-3">
                <li><a href="#preparation-coloscopie" className="text-primary hover:underline">1. Qu'est-ce que la préparation coloscopique ?</a></li>
                <li><a href="#hydrolavage-colique" className="text-primary hover:underline">2. Hydrolavage colique : une révolution</a></li>
                <li><a href="#irrigation-transanale" className="text-primary hover:underline">3. Irrigation transanale (ITA) : principes et avantages</a></li>
                <li><a href="#laxatifs-alternatives" className="text-primary hover:underline">4. Laxatifs vs alternatives modernes</a></li>
                <li><a href="#fecalome-constipation" className="text-primary hover:underline">5. Gestion du fécalome et de la constipation chronique</a></li>
                <li><a href="#ehpad-geriatrie" className="text-primary hover:underline">6. Préparation coloscopie en EHPAD et gériatrie</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="preparation-coloscopie" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Qu'est-ce que la préparation coloscopique ?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                La préparation coloscopique est une étape cruciale avant tout examen endoscopique du côlon. Elle consiste à nettoyer complètement le tractus intestinal inférieur pour permettre au médecin d'observer clairement la muqueuse colique et de détecter les anomalies.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Une bonne préparation coloscopique est essentielle pour :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground">Améliorer la qualité diagnostique de l'examen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground">Réduire le risque de complications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground">Diminuer le temps d'examen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground">Assurer le confort du patient</span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="hydrolavage-colique" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Hydrolavage Colique : Une Révolution dans la Préparation</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                L'hydrolavage colique, également connu sous le terme d'irrigation transanale (ITA), représente une avancée majeure dans les techniques de préparation coloscopique. Contrairement aux laxatifs traditionnels, cette méthode utilise l'eau pour nettoyer le côlon de manière progressive et contrôlée.
              </p>
              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded">
                <h3 className="font-semibold text-foreground mb-3">Avantages de l'hydrolavage colique :</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Nettoyage efficace et complet du côlon</li>
                  <li>✓ Meilleure tolérance chez les patients fragiles</li>
                  <li>✓ Réduction des effets secondaires gastro-intestinaux</li>
                  <li>✓ Adaptation possible aux patients constipés chroniques</li>
                  <li>✓ Sécurité renforcée pour les patients gériatriques</li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                O-PREP® DIVAN utilise un système d'hydrolavage colique par gravité, avec un réservoir de 30,5 litres d'eau portée à 37°C, permettant une irrigation progressive jusqu'au cæcum.
              </p>
            </section>

            {/* Section 3 */}
            <section id="irrigation-transanale" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Irrigation Transanale (ITA) : Principes et Avantages</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                L'irrigation transanale (ITA) est une technique médicale qui consiste à introduire de l'eau tiède dans le côlon par voie anale pour le nettoyer. Contrairement à la coloscopie, l'ITA ne nécessite pas d'anesthésie et peut être réalisée en ambulatoire.
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Comment fonctionne l'ITA ?</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-4 flex-shrink-0">1.</span>
                  <div>
                    <p className="font-semibold text-foreground">Installation confortable</p>
                    <p className="text-muted-foreground">Le patient est installé sur un système ergonomique adapté à sa morphologie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-4 flex-shrink-0">2.</span>
                  <div>
                    <p className="font-semibold text-foreground">Introduction progressive de l'eau</p>
                    <p className="text-muted-foreground">L'eau tiède (37°C) est introduite progressivement par gravité à basse pression</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-4 flex-shrink-0">3.</span>
                  <div>
                    <p className="font-semibold text-foreground">Irrigation jusqu'au cæcum</p>
                    <p className="text-muted-foreground">L'eau irrigue complètement le côlon jusqu'à la jonction iléo-caecale</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary mr-4 flex-shrink-0">4.</span>
                  <div>
                    <p className="font-semibold text-foreground">Évacuation naturelle</p>
                    <p className="text-muted-foreground">L'eau et les matières fécales sont évacuées naturellement</p>
                  </div>
                </li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="laxatifs-alternatives" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Laxatifs vs Alternatives Modernes</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pendant des années, les laxatifs ont été la méthode standard de préparation coloscopique. Cependant, cette approche présente des limitations importantes, particulièrement chez les patients fragiles et les personnes âgées.
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border border-border p-4 text-left font-semibold text-foreground">Critère</th>
                      <th className="border border-border p-4 text-left font-semibold text-foreground">Laxatifs Traditionnels</th>
                      <th className="border border-border p-4 text-left font-semibold text-foreground">Hydrolavage Colique (ITA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-semibold text-foreground">Efficacité</td>
                      <td className="border border-border p-4 text-muted-foreground">Variable selon le patient</td>
                      <td className="border border-border p-4 text-muted-foreground">Très élevée et prévisible</td>
                    </tr>
                    <tr className="bg-secondary/50">
                      <td className="border border-border p-4 font-semibold text-foreground">Effets secondaires</td>
                      <td className="border border-border p-4 text-muted-foreground">Nausées, crampes, déshydratation</td>
                      <td className="border border-border p-4 text-muted-foreground">Minimes et bien tolérés</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-semibold text-foreground">Durée de préparation</td>
                      <td className="border border-border p-4 text-muted-foreground">4-6 heures</td>
                      <td className="border border-border p-4 text-muted-foreground">30-45 minutes</td>
                    </tr>
                    <tr className="bg-secondary/50">
                      <td className="border border-border p-4 font-semibold text-foreground">Patients fragiles</td>
                      <td className="border border-border p-4 text-muted-foreground">Risqué (déshydratation)</td>
                      <td className="border border-border p-4 text-muted-foreground">Sûr et recommandé</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-semibold text-foreground">Constipation chronique</td>
                      <td className="border border-border p-4 text-muted-foreground">Souvent inefficace</td>
                      <td className="border border-border p-4 text-muted-foreground">Très efficace</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="fecalome-constipation" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Gestion du Fécalome et de la Constipation Chronique</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Le fécalome est une accumulation anormale de matières fécales durcies dans le côlon, souvent associée à la constipation chronique. Cette condition est particulièrement fréquente chez les personnes âgées et les patients immobilisés.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6 rounded">
                <h3 className="font-semibold text-amber-900 mb-3 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Complications du fécalome
                </h3>
                <ul className="space-y-2 text-amber-900">
                  <li>• Occlusion intestinale partielle ou complète</li>
                  <li>• Volvulus colique</li>
                  <li>• Perforation colique</li>
                  <li>• Syndrome de malabsorption</li>
                  <li>• Incontinence fécale paradoxale</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Comment l'hydrolavage colique aide</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                L'irrigation transanale est particulièrement efficace pour traiter le fécalome et la constipation chronique car :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Hydratation progressive :</strong> L'eau ramollit progressivement les matières fécales durcies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Basse pression :</strong> Évite les risques de perforation contrairement aux lavements haute pression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Contrôle du débit :</strong> Permet une adaptation à la tolérance du patient</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Sécurité :</strong> Système ergonomique qui minimise les risques de traumatisme</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="ehpad-geriatrie" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Préparation Coloscopie en EHPAD et Gériatrie</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Les patients gériatriques présentent des défis particuliers pour la préparation coloscopique. La fragilité, la polypharmacologie, et les comorbidités rendent les laxatifs traditionnels risqués.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Défis spécifiques en EHPAD</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Déshydratation :</strong> Les laxatifs peuvent causer une déshydratation dangereuse chez les personnes âgées</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Déséquilibre électrolytique :</strong> Risque d'hyponatrémie et d'hyperkaliémie</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Interactions médicamenteuses :</strong> Les laxatifs peuvent interagir avec d'autres traitements</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-muted-foreground"><strong>Inconfort et complications :</strong> Crampes, incontinence, chutes liées aux passages répétés aux toilettes</span>
                </li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h3 className="font-semibold text-green-900 mb-3">Avantages de O-PREP® DIVAN en EHPAD</h3>
                <ul className="space-y-2 text-green-900">
                  <li>✓ Sécurité renforcée pour les patients fragiles</li>
                  <li>✓ Pas de risque de déshydratation</li>
                  <li>✓ Pas d'interactions médicamenteuses</li>
                  <li>✓ Confort amélioré grâce à l'ergonomie</li>
                  <li>✓ Réduction des chutes et des incidents</li>
                  <li>✓ Meilleure qualité de vie pour les résidents</li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à révolutionner votre préparation coloscopique ?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Découvrez comment O-PREP® DIVAN peut améliorer la sécurité et le confort de vos patients.
              </p>
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base font-semibold"
                onClick={() => window.location.href = '/oprep-divan'}
              >
                En savoir plus sur O-PREP® DIVAN
              </Button>
            </section>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
