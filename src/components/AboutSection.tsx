import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const values = [
    "ISO 9001:2015 Certified Operations",
    "Rigorous Quality Control Systems",
    "Global Trade Compliance Standards",
    "Sustainable Manufacturing Practices",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-body">
                About Drago Impex
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">
              Building Trust Through{" "}
              <span className="text-gradient-gold">Global Excellence</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For over 15 years, Drago Impex has been a cornerstone of Pakistan's 
              international trade landscape. We specialize in manufacturing and 
              exporting premium products that meet the exacting standards of 
              global markets.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Our commitment to quality, reliability, and ethical business practices 
              has earned us the trust of partners across 30+ countries. We don't just 
              export products—we export confidence.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-card border border-border p-8 lg:p-12">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 border-b border-r border-border/50">
                  <div className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-2">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 border-b border-border/50">
                  <div className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-2">
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Countries Served
                  </div>
                </div>
                <div className="text-center p-6 border-r border-border/50">
                  <div className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Global Partners
                  </div>
                </div>
                <div className="text-center p-6">
                  <div className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Quality Commitment
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
