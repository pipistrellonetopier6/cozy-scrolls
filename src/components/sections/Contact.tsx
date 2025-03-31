
import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Správa odoslaná!",
      description: "Ozveme sa vám čo najskôr.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 reveal">
            <h2 className="text-3xl md:text-4xl font-bold">Porozprávajme sa</h2>
            <p className="text-muted-foreground text-lg">
              Ste pripravení začať svoj ďalší webový projekt? Radi sa s vami spojíme a prediskutujeme, ako môžeme vašu víziu premeniť na skutočnosť.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>tomasmlady@birne.tech</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>Albina Brunovskeho 6, 841 05 Bratislava</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Meno</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše meno"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas.email@priklad.sk"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Správa</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Povedzte nám o vašom projekte..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Odoslať správu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
