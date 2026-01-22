import { Button } from "@/components/ui/button";
import { Phone, Bell, ShieldCheck, Timer } from "lucide-react";
import heroImage from "@/assets/smoke-detector-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electrician installing a smoke detector in Evanston IL"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-medium mb-6">
              24/7 Life Safety Services
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Hardwired Smoke Detector Replacement Evanston IL
            <span className="block text-gradient-copper mt-2">Protect Your Family With Pro Installation.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delay-1">
            Is your smoke alarm more than 10 years old? Evanston Smoke Detector Experts specialize in hardwired, interconnected systems that ensure every room is alerted in an emergency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white border-none h-14 px-8 text-lg" asChild>
              <a href="tel:+18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/80 animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-copper" />
              <span className="font-medium">All Linked</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="font-medium">Code Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-copper" />
              <span className="font-medium">Rapid Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-copper flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                24
              </div>
              <span className="font-medium">Hour Emergency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
