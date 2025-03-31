
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-6 reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tvoríme <span className="text-primary">digitálne</span> zážitky, ktoré <span className="text-primary">majú zmysel</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Malý, ale výkonný tím vývojárov, ktorí sa venujú realizácii vašej webovej vízie
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Spolupracujme</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#work">Pozrite si naše práce</a>
            </Button>
          </div>
        </div>
        <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-muted rounded-lg overflow-hidden reveal">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
            <div className="text-4xl font-bold text-primary">Birne</div>
          </div>
        </div>
      </div>
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Prejsť na sekciu služby"
      >
        <ArrowDown className="h-8 w-8 text-primary opacity-60" />
      </a>
    </section>
  );
};

export default Hero;
