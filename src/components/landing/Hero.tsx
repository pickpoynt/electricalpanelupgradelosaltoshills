import { Button } from "@/components/ui/button";
import { Phone, Zap, Home, Wrench, DollarSign } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Cheap Electrician Brevard NC
      <span className="block text-green-400 mt-2">Brevard Affordable Electricians: Quality Work, Fair Prices.</span>
    </>
  ),
  subtitle = "Affordable electrical services for Brevard homes and businesses. We provide budget-friendly electrical repairs, installations, and maintenance without compromising quality or safety. Licensed electricians offering competitive pricing you can trust.",
  image = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Cheap Electrician Brevard NC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-green-700/60 border border-green-400/50 rounded-full text-green-50 font-bold text-sm mb-6 backdrop-blur-md">
              Brevard's Trusted Budget Electricians
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed font-medium drop-shadow-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-green-900/40" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in-delay-3 drop-shadow-md">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="font-bold">Budget Priced</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="font-bold">Licensed & Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-[10px] font-bold text-white">
                NC
              </div>
              <span className="font-bold">Brevard Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-green-400" />
              <span className="font-bold">Quality Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
