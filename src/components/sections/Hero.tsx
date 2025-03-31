
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    
    // Initial check
    checkTheme();
    
    // Create MutationObserver to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

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
        <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-muted rounded-lg overflow-hidden reveal shadow-lg">
          {/* Wireframe design that adapts to light/dark mode */}
          <div className="w-full h-full relative">
            {/* Dark mode wireframe image */}
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Header wireframe */}
                  <div className="absolute top-0 left-0 w-full h-[10%] border-2 border-primary/30 rounded-md"></div>
                  
                  {/* Sidebar wireframe */}
                  <div className="absolute top-[15%] left-0 w-[20%] h-[70%] border-2 border-primary/30 rounded-md"></div>
                  
                  {/* Content sections wireframe */}
                  <div className="absolute top-[15%] right-0 w-[75%] h-[20%] border-2 border-primary/30 rounded-md"></div>
                  <div className="absolute top-[40%] right-0 w-[75%] h-[20%] border-2 border-primary/30 rounded-md"></div>
                  <div className="absolute top-[65%] right-0 w-[75%] h-[20%] border-2 border-primary/30 rounded-md"></div>
                  
                  {/* Footer wireframe */}
                  <div className="absolute bottom-0 left-0 w-full h-[10%] border-2 border-primary/30 rounded-md"></div>
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                    {[...Array(36)].map((_, i) => (
                      <div key={i} className="border border-primary/20"></div>
                    ))}
                  </div>
                  
                  {/* Dot decoration */}
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary rounded-full"></div>
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-primary rounded-full"></div>
                  <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  
                  <div className="absolute bottom-4 right-4 text-lg font-semibold text-primary/70">Birne</div>
                </div>
              </div>
            </div>
            
            {/* Light mode wireframe image */}
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
              <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/5 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Header wireframe */}
                  <div className="absolute top-0 left-0 w-full h-[10%] border-2 border-secondary/60 rounded-md bg-secondary/10"></div>
                  
                  {/* Sidebar wireframe */}
                  <div className="absolute top-[15%] left-0 w-[20%] h-[70%] border-2 border-secondary/60 rounded-md bg-secondary/10"></div>
                  
                  {/* Content sections wireframe */}
                  <div className="absolute top-[15%] right-0 w-[75%] h-[20%] border-2 border-secondary/60 rounded-md bg-secondary/10"></div>
                  <div className="absolute top-[40%] right-0 w-[75%] h-[20%] border-2 border-secondary/60 rounded-md bg-secondary/10"></div>
                  <div className="absolute top-[65%] right-0 w-[75%] h-[20%] border-2 border-secondary/60 rounded-md bg-secondary/10"></div>
                  
                  {/* Footer wireframe */}
                  <div className="absolute bottom-0 left-0 w-full h-[10%] border-2 border-secondary/60 rounded-md bg-secondary/10"></div>
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                    {[...Array(36)].map((_, i) => (
                      <div key={i} className="border border-primary/40"></div>
                    ))}
                  </div>
                  
                  {/* Dot decoration */}
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary rounded-full"></div>
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-primary rounded-full"></div>
                  <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  
                  <div className="absolute bottom-4 right-4 text-lg font-semibold text-primary/70">Birne</div>
                </div>
              </div>
            </div>
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
