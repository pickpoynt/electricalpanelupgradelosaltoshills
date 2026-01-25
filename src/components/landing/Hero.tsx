import { Button } from "@/components/ui/button";
import { Phone, Waves, ShieldCheck, Zap } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Soot Removal from Walls Sparta WI
      <span className="block text-teal-400 mt-2">Sparta Restoration Experts: Restoring Your Home's Cleanliness.</span>
    </>
  ),
  subtitle = "Professional soot removal and wall cleaning in Sparta. From fire damage to furnace puff backs, we use specialized techniques to remove stubborn soot without damaging your walls.",
  image = "/soot-removal-walls-hero.png"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Soot Removal from Walls Sparta WI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-teal-700/40 border border-teal-400/50 rounded-full text-teal-100 text-sm font-medium mb-6 backdrop-blur-sm">
              Sparta's Trusted Wall Cleaning Specialists
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white border-none h-14 px-8 text-lg shadow-lg shadow-teal-900/20" asChild>
              <a href="tel:+13802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-200 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span className="font-medium">Soot Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-teal-400" />
              <span className="font-medium">Deep Cleaning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center text-[10px] font-bold text-white">
                WI
              </div>
              <span className="font-medium">Sparta Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-teal-400" />
              <span className="font-medium">24/7 Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
