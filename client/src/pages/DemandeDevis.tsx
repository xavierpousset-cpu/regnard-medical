import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function DemandeDevis() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.email) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    toast.success("Votre demande de devis a été envoyée avec succès");
    setFormData({ nom: "", email: "", telephone: "", entreprise: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Demande de Devis</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nom *</label>
            <Input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <Input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Entreprise</label>
            <Input
              type="text"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full">
            Envoyer la demande
          </Button>
        </form>
      </div>
    </div>
  );
}
