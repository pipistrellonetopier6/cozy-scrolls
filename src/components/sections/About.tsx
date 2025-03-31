
import { Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "10+",
    label: "Happy Clients"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "25+",
    label: "Projects Completed"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "5+",
    label: "Years Experience"
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 reveal">
            <h2 className="text-3xl md:text-4xl font-bold">Small team, big impact</h2>
            <p className="text-muted-foreground text-lg">
              PixelWave is a boutique web development agency founded on the belief that great websites don't require huge teams — just the right expertise and attention to detail.
            </p>
            <p className="text-muted-foreground">
              Our small team of dedicated developers brings together years of experience in creating beautiful, functional, and high-performing websites. We pride ourselves on a collaborative approach that lets us understand your unique needs and deliver websites that truly represent your brand and meet your objectives.
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
                  "Great websites are built with care, precision, and a deep understanding of what makes users engage."
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
