import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Zap, Home, Landmark } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Historic Home Rewiring Signal Mountain TN
      <span className="block text-amber-400 mt-2">Signal Mountain Historic Electrical: Preserving Heritage, Upgrading Safety.</span>
    </>
  ),
  subtitle = "Specialized electrical rewiring for Signal Mountain's cherished historic and vintage homes. We expertly replace dangerous knob-and-tube, cloth-wrapped, and outdated wiring systems while preserving your home's original architectural character and craftsmanship.",
  image = "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Historic Home Rewiring Signal Mountain TN"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-amber-700/60 border border-amber-400/50 rounded-full text-amber-50 font-bold text-sm mb-6 backdrop-blur-md">
              Signal Mountain's Historic Home Rewiring Specialists
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed font-medium drop-shadow-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-amber-900/40" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in-delay-3 drop-shadow-md">
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-amber-400" />
              <span className="font-bold">Heritage Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="font-bold">Full Rewiring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-[10px] font-bold text-white">
                TN
              </div>
              <span className="font-bold">Signal Mtn Local</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="font-bold">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
