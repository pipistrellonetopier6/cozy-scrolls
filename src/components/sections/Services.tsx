
import { Code, Layout, Smartphone, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Webový dizajn",
    description: "Čisté a intuitívne rozhrania, ktoré pozdvihnú vašu značku a zaujmú vašich používateľov."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Vývoj webových stránok",
    description: "Vlastné webové aplikácie vytvorené pomocou moderných technológií pre optimálny výkon."
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Responzívny dizajn",
    description: "Webové stránky, ktoré vyzerajú a fungujú skvele na všetkých zariadeniach a veľkostiach obrazovky."
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Optimalizácia výkonu",
    description: "Zrýchlite svoju stránku pre lepšiu používateľskú skúsenosť a lepšie umiestnenie vo vyhľadávaní."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold">Naše služby</h2>
          <p className="text-muted-foreground text-lg">
            Špecializujeme sa na vytváranie výnimočných digitálnych zážitkov prostredníctvom týchto kľúčových služieb
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 reveal">
              <CardHeader>
                <div className="text-primary mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
