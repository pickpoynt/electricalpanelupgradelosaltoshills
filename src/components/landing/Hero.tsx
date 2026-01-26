import { Button } from "@/components/ui/button";
import { Phone, Anchor, ShieldCheck, Zap, Lightbulb } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Landscape Lighting Repair Fair Haven NJ
      <span className="block text-green-400 mt-2">Fair Haven Garden Light: Restoring Your Property's Evening Radiance.</span>
    </>
  ),
  subtitle = "Expert troubleshooting and repair for outdoor lighting systems. From tracing cut wires to fixing faulty transformers and upgrading to LED, we restore the beauty and security of your Fair Haven landscape.",
  image = "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src={image}
          alt="Landscape Lighting Repair Fair Haven NJ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-green-700/40 border border-green-400/50 rounded-full text-green-100 text-sm font-medium mb-6 backdrop-blur-sm">
              Fair Haven's Premier Landscape Lighting Repair Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none h-14 px-8 text-lg shadow-lg shadow-green-900/20" asChild>
              <a href="tel:+18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-200 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span className="font-medium">UL Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="font-medium">Fast Repairs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-[10px] font-bold text-white">
                NJ
              </div>
              <span className="font-medium">Fair Haven Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-green-400" />
              <span className="font-medium">LED Upgrades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hero;

