import { Button } from "@/components/ui/button";
import { Phone, Wind, ShieldCheck, Zap } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Basement Water Removal Eagle CO
      <span className="block text-blue-300 mt-2">Eagle Water Rescue: Rapid Local Response.</span>
    </>
  ),
  subtitle = "When your home travels from dry to flooded, every minute counts. We specialize in basement water removal for Eagle properties, handling frozen pipe bursts, river flooding, and drainage failures specifically in Eagle County.",
  image = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2000"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Water Damage Restoration Vail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-600/30 border border-blue-400/50 rounded-full text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
              Eagle's 24/7 Emergency Water Removal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-14 px-8 text-lg shadow-lg shadow-blue-900/20" asChild>
              <a href="tel:+13802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-200 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Rapid Drying</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                CO
              </div>
              <span className="font-medium">Eagle Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="font-medium">30-Min ETA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
