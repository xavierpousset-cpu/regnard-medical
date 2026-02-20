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
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
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
      toast.error(t('contact_page.required_fields'));
      return;
    }

    // Simulation d'envoi
    toast.success(t('contact_page.success'));
    
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
              {t('contact_page.form.heading')}
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {t('contact_page.form.description')}
            </p>

            {/* Rassurance */}
            <div className="flex items-start p-6 bg-secondary border-l-2 border-primary">
              <Clock className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {t('contact_page.response_time')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact_page.response_time.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nom" className="text-foreground font-medium">
                  {t('contact_page.form.name')}
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
                  {t('contact_page.form.function')}
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
                  {t('contact_page.form.establishment')}
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
                  {t('contact_page.form.email')}
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
                  {t('contact_page.form.phone')}
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
                  {t('contact_page.form.message')}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
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
                {t('contact_page.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
