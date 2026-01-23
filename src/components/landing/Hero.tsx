import { Button } from "@/components/ui/button";
import { Phone, Droplets, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524230659192-35f3dace198d?auto=format&fit=crop&q=80&w=2000"
          alt="Emergency flood damage restoration in Iowa Colony TX"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-medium mb-6">
              24/7 Emergency Flood Restoration
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Flood Damage Restoration Iowa Colony TX
            <span className="block text-gradient-copper mt-2">Professional Water Extraction & Recovery.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delay-1">
            When disaster strikes, every second counts. Our Iowa Colony team provides rapid 24/7 water extraction, structural drying, and complete flood damage restoration to protect your property and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white border-none h-14 px-8 text-lg" asChild>
              <a href="tel:+18777921410" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (877) 792-1410
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/80 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-copper" />
              <span className="font-medium">Water Removal</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="font-medium">Certified Techs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-copper flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                TX
              </div>
              <span className="font-medium">Texas Local</span>
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


