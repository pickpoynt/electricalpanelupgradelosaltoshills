import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Fan, Droplets, Wind } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Bathroom Exhaust Fan Installation Cave Springs Arkansas
      <span className="block text-cyan-400 mt-2">Cave Springs Ventilation Pros: Breathe Easier, Live Healthier.</span>
    </>
  ),
  subtitle = "Professional bathroom exhaust fan installation for Cave Springs homes. We eliminate moisture problems, prevent mold growth, and improve indoor air quality with whisper-quiet, energy-efficient ventilation solutions tailored to Northwest Arkansas humidity.",
  image = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Bathroom Exhaust Fan Installation Cave Springs Arkansas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-cyan-700/60 border border-cyan-400/50 rounded-full text-cyan-50 font-bold text-sm mb-6 backdrop-blur-md">
              Cave Springs' Trusted Ventilation Experts
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed font-medium drop-shadow-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-cyan-900/40" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in-delay-3 drop-shadow-md">
            <div className="flex items-center gap-2">
              <Fan className="w-5 h-5 text-cyan-400" />
              <span className="font-bold">Quiet Operation</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <span className="font-bold">Moisture Control</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-600 flex items-center justify-center text-[10px] font-bold text-white">
                AR
              </div>
              <span className="font-bold">Cave Springs Local</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="font-bold">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
