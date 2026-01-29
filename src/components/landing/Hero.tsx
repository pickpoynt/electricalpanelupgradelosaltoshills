import { Button } from "@/components/ui/button";
import { Phone, Zap, Home, Wrench, Shield } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Electrical panel upgrade Los Altos Hills
      <span className="block text-blue-400 mt-2">Los Altos Hills Panel Upgrade Experts: Safe & Modern Electrical Systems.</span>
    </>
  ),
  subtitle = "Professional electrical panel upgrade services for Los Altos Hills homes and businesses. We provide safe, code-compliant panel upgrades to meet modern electrical demands and ensure your property's safety. Licensed electricians offering reliable service you can trust.",
  image = "https://images.unsplash.com/photo-1596319530447-e2a195f1c8d7?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Balanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Electrical panel upgrade Los Altos Hills"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/30 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-700/60 border border-blue-400/50 rounded-full text-blue-50 font-bold text-sm mb-6 backdrop-blur-md">
              Los Altos Hills' Trusted Panel Upgrade Experts
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed font-medium drop-shadow-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/40" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in-delay-3 drop-shadow-md">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="font-bold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="font-bold">Code Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                CA
              </div>
              <span className="font-bold">Los Altos Hills Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-400" />
              <span className="font-bold">Quality Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
