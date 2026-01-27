import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Zap, Smartphone } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Smart Switch Installation Signal Mountain TN
      <span className="block text-indigo-400 mt-2">Signal Mountain Smart Home: Control at Your Fingertips.</span>
    </>
  ),
  subtitle = "Transform your lighting with professional smart switch installations. From historic home retrofits to modern automation, we provide expert electrical services for Signal Mountain residents.",
  image = "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Smart Switch Installation Signal Mountain TN"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-indigo-700/60 border border-indigo-400/50 rounded-full text-indigo-50 font-bold text-sm mb-6 backdrop-blur-md">
              Signal Mountain's Certified Smart Home Specialists
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed font-medium drop-shadow-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-indigo-900/40" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in-delay-3 drop-shadow-md">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span className="font-bold">Licensed Pros</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-400" />
              <span className="font-bold">Retrofit Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                TN
              </div>
              <span className="font-bold">Signal Mtn Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-indigo-400" />
              <span className="font-bold">App Syncing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
