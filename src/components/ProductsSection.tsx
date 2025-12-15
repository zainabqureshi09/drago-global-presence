import { ArrowUpRight } from "lucide-react";
import textilesImg from "@/assets/products/textiles.jpg";
import surgicalImg from "@/assets/products/surgical.jpg";
import sportsImg from "@/assets/products/sports.jpg";
import leatherImg from "@/assets/products/leather.jpg";
import agricultureImg from "@/assets/products/agriculture.jpg";
import industrialImg from "@/assets/products/industrial.jpg";

const products = [
  {
    title: "Textiles & Apparel",
    description: "Premium fabrics and ready-made garments meeting international quality standards.",
    category: "Manufacturing",
    image: textilesImg,
  },
  {
    title: "Surgical Instruments",
    description: "Precision-crafted medical instruments trusted by healthcare professionals worldwide.",
    category: "Medical",
    image: surgicalImg,
  },
  {
    title: "Sports Equipment",
    description: "High-performance sports goods including leather and synthetic products.",
    category: "Sports",
    image: sportsImg,
  },
  {
    title: "Leather Goods",
    description: "Exquisite leather products from premium Pakistani tanneries.",
    category: "Luxury",
    image: leatherImg,
  },
  {
    title: "Agricultural Products",
    description: "Fresh and processed agricultural commodities for global markets.",
    category: "Agriculture",
    image: agricultureImg,
  },
  {
    title: "Industrial Materials",
    description: "Raw materials and components for manufacturing industries.",
    category: "Industrial",
    image: industrialImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-body">
              Our Expertise
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Products & <span className="text-gradient-gold">Services</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            We specialize in manufacturing and exporting a diverse range of 
            premium products that meet the highest international standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(42_75%_50%/0.1)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Tag on Image */}
                <div className="absolute top-4 left-4 text-xs text-primary tracking-[0.2em] uppercase bg-card/80 backdrop-blur-sm px-3 py-1.5 border border-primary/30">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm text-foreground/60 group-hover:text-primary transition-colors">
                  <span className="tracking-wider uppercase">Learn More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for custom manufacturing solutions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group"
          >
            <span className="tracking-wider uppercase text-sm font-medium">
              Request a Custom Quote
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
