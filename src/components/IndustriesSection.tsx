import { Factory, Building2, ShoppingBag, Heart, Truck, Wheat } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", description: "Industrial & production sectors" },
  { icon: Building2, name: "Corporate", description: "B2B enterprise solutions" },
  { icon: ShoppingBag, name: "Retail", description: "Consumer goods & distribution" },
  { icon: Heart, name: "Healthcare", description: "Medical & pharmaceutical" },
  { icon: Truck, name: "Logistics", description: "Supply chain & distribution" },
  { icon: Wheat, name: "Agriculture", description: "Agri-commodities export" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-body">
              Industries We Serve
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Serving <span className="text-gradient-gold">Global Industries</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            From healthcare to heavy industry, we provide tailored solutions 
            for diverse sectors across the globe.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-card border border-border hover:border-primary/50 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:bg-primary/5"
            >
              <industry.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-sm font-semibold text-foreground text-center mb-1">
                {industry.name}
              </h3>
              <p className="text-[10px] text-muted-foreground text-center uppercase tracking-wider">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Global Presence Banner */}
        <div className="mt-16 p-8 lg:p-12 bg-card border border-border relative overflow-hidden">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                Global Presence, Local Expertise
              </h3>
              <p className="text-muted-foreground">
                Operating from Pakistan with reach across North America, Europe, Middle East, Asia, and Africa.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="font-display text-3xl text-primary font-semibold">5</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Continents</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl text-primary font-semibold">30+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Countries</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl text-primary font-semibold">500+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
