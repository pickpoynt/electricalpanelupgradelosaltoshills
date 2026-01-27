import { Button } from "@/components/ui/button";
import { Phone, Anchor, ShieldCheck, Zap, Thermometer, History as HistoryIcon } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Knob and Tube Wiring Replacement Signal Mountain TN
      <span className="block text-amber-500 mt-2">Signal Mountain Wiring Experts: Bringing Safety to Historic Homes.</span>
    </>
  ),
  subtitle = "Eliminate electrical fire hazards and insurance hurdles with professional knob and tube removal. We provide full-home rewiring services tailored for historic residences on Signal Mountain.",
  image = "https://images.unsplash.com/photo-1563770660941-20978e8700f1?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src={image}
          alt="Knob and Tube Wiring Replacement Signal Mountain TN"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-amber-700/40 border border-amber-400/50 rounded-full text-amber-100 text-sm font-medium mb-6 backdrop-blur-sm">
              Signal Mountain's Historic Home Specialists
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none h-14 px-8 text-lg shadow-lg shadow-amber-900/20" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-200 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="font-medium">Licensed Pros</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="font-medium">Full Rewiring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-[10px] font-bold text-white">
                TN
              </div>
              <span className="font-medium">Signal Mtn Local</span>
            </div>
            <div className="flex items-center gap-2">
              <HistoryIcon className="w-5 h-5 text-amber-400" />
              <span className="font-medium">Historic Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Hero;

