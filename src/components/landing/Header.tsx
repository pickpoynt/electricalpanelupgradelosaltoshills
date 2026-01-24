import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
              <span className="text-white font-heading font-bold text-lg">VR</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-slate-900 leading-tight">
                Vail Water Rescue
              </h1>
              <p className="text-xs text-slate-500">24/7 Basement Water Removal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Why Us
            </a>
            <a href="#basement-water-removal" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Water Removal
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg" asChild>
              <a href="tel:+13802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (380) 266-0944
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in bg-white">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2">
                Why Us
              </a>
              <a href="#basement-water-removal" className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2">
                Water Removal
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2">
                Contact
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" asChild>
                <a href="tel:+13802660944" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (380) 266-0944
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
