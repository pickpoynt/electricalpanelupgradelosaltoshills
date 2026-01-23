import { Button } from "@/components/ui/button";
import { Phone, Droplets, ShieldCheck, CloudRain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1631338808139-74bac86ca073?auto=format&fit=crop&q=80&w=2000"
          alt="Emergency roof leak water damage restoration in Westlake Florida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-medium mb-6">
              24/7 Emergency Storm Response
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Roof Leak Water Damage Westlake FL
            <span className="block text-gradient-copper mt-2">Emergency Tarping & Extraction.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delay-1">
            Florida storms can turn a small leak into a major flood. Our Westlake response team provides immediate roof tarping, water extraction, and ceiling restoration to protect your home from mold and structural collapse.
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
              <CloudRain className="w-5 h-5 text-copper" />
              <span className="font-medium">Roof Tarping</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="font-medium">Certified Techs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-copper flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                FL
              </div>
              <span className="font-medium">Westlake Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-copper" />
              <span className="font-medium">24/7 Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
