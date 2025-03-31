
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bloom E-commerce",
    description: "A modern online store built with React and integrated with headless CMS",
    tags: ["E-commerce", "React", "API Integration"],
    image: "bg-gradient-to-br from-primary/10 to-accent/30"
  },
  {
    title: "Tempo Dashboard",
    description: "Analytics dashboard for a SaaS application with real-time data visualization",
    tags: ["Dashboard", "Data Visualization", "SaaS"],
    image: "bg-gradient-to-tr from-secondary/20 to-primary/10"
  },
  {
    title: "FoodFinder App",
    description: "Restaurant discovery platform with location-based search and reviews",
    tags: ["Geolocation", "Reviews", "Mobile-first"],
    image: "bg-gradient-to-bl from-accent/20 to-primary/10"
  }
];

const Work = () => {
  return (
    <section id="work" className="section-padding bg-muted/30">
      <div className="section-container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
          <p className="text-muted-foreground text-lg">
            A selection of recent projects we've crafted with passion and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg reveal">
              <div className={`w-full h-64 ${project.image}`}></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 via-background/60 to-transparent transition-all duration-300">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-primary/10 text-primary-foreground px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-fit mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-8 reveal">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
