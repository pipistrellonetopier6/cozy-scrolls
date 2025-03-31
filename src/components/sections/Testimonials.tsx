
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Spolupráca s Birne bola ako sen. Transformovali našu zastaranú webovú stránku na modernú, funkčnú platformu, ktorá prináša reálne výsledky pre naše podnikanie.",
    author: "Simon M.",
    company: "Pinch of Salt",
    image: "bg-gradient-to-br from-primary/20 to-muted"
  },
  {
    quote: "Technické znalosti tímu sa vyrovnajú len ich záväzku porozumieť našim potrebám. Dodali nám vlastnú webovú aplikáciu, ktorá prekonala naše očakávania.",
    author: "Dominik R.",
    company: "FQS Group",
    image: "bg-gradient-to-tr from-muted to-primary/20"
  },
  {
    quote: "Čo odlišuje Birne, je ich pozornosť k detailom. Od dizajnu po vývoj, každý aspekt nášho projektu bol spracovaný s starostlivosťou a presnosťou.",
    author: "Ondrej V.",
    company: "DroneFinder",
    image: "bg-gradient-to-bl from-primary/20 to-muted"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold">Čo hovoria naši klienti</h2>
          <p className="text-muted-foreground text-lg">
            Neberte len naše slovo — vypočujte si podniky, ktorým sme pomohli
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 reveal"
            >
              <Quote className="h-8 w-8 text-primary/60 mb-4" />
              <blockquote className="text-foreground/90 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className={`w-12 h-12 rounded-full mr-4 ${testimonial.image}`}></div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
