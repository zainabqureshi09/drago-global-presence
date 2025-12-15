import { Shield, Globe, Award, Clock, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "ISO 9001:2015 certified processes with rigorous quality control at every stage.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Established distribution networks across 30+ countries on 5 continents.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple export excellence awards and trade certifications.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "On-time delivery with full logistics support and real-time tracking.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Multilingual team providing 24/7 support for global clients.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Eco-friendly manufacturing with commitment to environmental responsibility.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-body">
              Why Choose Us
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            The <span className="text-gradient-gold">Drago Advantage</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Partner with a company that combines local manufacturing excellence 
            with global trade expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Number */}
              <div className="absolute top-6 right-6 font-display text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
