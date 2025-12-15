import { ArrowRight, Globe, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              International Trading Excellence
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-up delay-100">
            Driven by{" "}
            <span className="text-gradient-gold">Excellence</span>
            <br />
            <span className="text-foreground/80">Trusted Worldwide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-body opacity-0 animate-fade-up delay-200">
            Premier manufacturing and export solutions from Pakistan to the world. 
            We deliver uncompromising quality and reliability to global markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up delay-300">
            <Button variant="hero" size="lg" className="group">
              Explore Our Products
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Request a Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto opacity-0 animate-fade-up delay-400">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-wide">30+ Countries Served</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-wide">ISO Certified Quality</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-wide">15+ Years Excellence</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-600">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
