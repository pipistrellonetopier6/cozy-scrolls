
import { Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "10+",
    label: "Spokojných klientov"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "25+",
    label: "Dokončených projektov"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "5+",
    label: "Rokov skúseností"
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 reveal">
            <h2 className="text-3xl md:text-4xl font-bold">Malý tím, veľký dopad</h2>
            <p className="text-muted-foreground text-lg">
              Birne je butikovou agentúrou pre vývoj webových stránok založenou na presvedčení, že skvelé webové stránky nevyžadujú veľké tímy — len správne odborné znalosti a pozornosť k detailom.
            </p>
            <p className="text-muted-foreground">
              Náš malý tím oddaných vývojárov spája roky skúseností s vytváraním krásnych, funkčných a vysoko výkonných webových stránok. Sme hrdí na náš spolupracujúci prístup, ktorý nám umožňuje porozumieť vašim jedinečným potrebám a dodávať webové stránky, ktoré skutočne reprezentujú vašu značku a plnia vaše ciele.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-primary flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[300px] md:h-[400px] bg-muted order-1 lg:order-2 rounded-lg overflow-hidden reveal">
            <div className="w-full h-full bg-gradient-to-tr from-primary/5 to-primary/20 flex items-center justify-center">
              <div className="p-8 text-center">
                <div className="text-xl font-medium text-foreground/80">
                  "Skvelé webové stránky sú postavené so starostlivosťou, presnosťou a hlbokým porozumením toho, čo spôsobuje zapojenie používateľov."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
