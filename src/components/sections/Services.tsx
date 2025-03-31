
import { Code, Layout, Smartphone, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Web Design",
    description: "Clean and intuitive interfaces that elevate your brand and engage your users."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance."
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Responsive Design",
    description: "Websites that look and function beautifully across all devices and screen sizes."
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Performance Optimization",
    description: "Speed up your site for better user experience and improved search rankings."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We specialize in creating exceptional digital experiences through these core offerings
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
