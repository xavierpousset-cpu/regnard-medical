/**
 * Contact Section - Regnard Medical
 * Design: Industrial Minimalism
 * - Formulaire de contact avec validation
 * - Bloc rassurance
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: "",
    fonction: "",
    etablissement: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.nom || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Simulation d'envoi
    toast.success("Votre message a été envoyé avec succès. Nous vous répondrons sous 48h.");
    
    // Reset form
    setFormData({
      nom: "",
      fonction: "",
      etablissement: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Info */}
          <div>
            {/* Title */}
            <h2 className="mb-8">
              Parlons de votre projet
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Que vous ayez besoin d'une réparation, d'un diagnostic technique ou d'une solution sur mesure, notre équipe est à votre écoute pour comprendre vos besoins et vous proposer une réponse adaptée.
            </p>

            {/* Rassurance */}
            <div className="flex items-start p-6 bg-secondary border-l-2 border-primary">
              <Clock className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  Réponse sous 48h
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nous nous engageons à vous répondre dans les meilleurs délais pour étudier votre demande et vous proposer une solution adaptée.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nom" className="text-foreground font-medium">
                  Nom *
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              <div>
                <Label htmlFor="fonction" className="text-foreground font-medium">
                  Fonction
                </Label>
                <Input
                  id="fonction"
                  name="fonction"
                  type="text"
                  value={formData.fonction}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              <div>
                <Label htmlFor="etablissement" className="text-foreground font-medium">
                  Établissement
                </Label>
                <Input
                  id="etablissement"
                  name="etablissement"
                  type="text"
                  value={formData.etablissement}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              <div>
                <Label htmlFor="telephone" className="text-foreground font-medium">
                  Téléphone
                </Label>
                <Input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 font-medium"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
