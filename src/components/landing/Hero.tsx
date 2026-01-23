import { Button } from "@/components/ui/button";
import { Phone, Wind, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622781564-1d9876a13d01?auto=format&fit=crop&q=80&w=2000"
          alt="Professional odor removal after water damage in Iowa Colony Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-medium mb-6">
              Molecular Deodorization Specialists
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Odor Removal After Water Damage Iowa Colony
            <span className="block text-gradient-copper mt-2">Permanent Smell Elimination Guaranteed.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delay-1">
            Don't let the damp, musty smell of water damage haunt your Iowa Colony home. Our team uses advanced hydroxyl and ozone technology to destroy odor molecules at their source, not just mask them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white border-none h-14 px-8 text-lg" asChild>
              <a href="tel:+13802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/80 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-copper" />
              <span className="font-medium">Ozone Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="font-medium">Certified Pros</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-copper flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                TX
              </div>
              <span className="font-medium">Iowa Colony Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-copper" />
              <span className="font-medium">Rapid Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
