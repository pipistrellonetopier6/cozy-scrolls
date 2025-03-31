
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with PixelWave was a dream. They transformed our outdated website into a modern, functional platform that's driving real results for our business.",
    author: "Sarah J.",
    company: "Bloom Boutique",
    image: "bg-gradient-to-br from-primary/20 to-muted"
  },
  {
    quote: "The team's technical expertise is matched only by their commitment to understanding our needs. They delivered a custom web application that exceeded our expectations.",
    author: "Michael T.",
    company: "Tempo Analytics",
    image: "bg-gradient-to-tr from-muted to-primary/20"
  },
  {
    quote: "What sets PixelWave apart is their attention to detail. From design to development, every aspect of our project was handled with care and precision.",
    author: "Elena R.",
    company: "FoodFinder",
    image: "bg-gradient-to-bl from-primary/20 to-muted"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from the businesses we've helped
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
