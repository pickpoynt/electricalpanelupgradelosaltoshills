import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Storm Surge Cleanup", href: "/storm-surge-water-damage-cleanup" },
    { name: "Dishwasher Leak Cleanup", href: "/dishwasher-leak-water-damage-cleanup" },
    { name: "Water Heater Leak Cleanup", href: "/water-heater-leak-cleanup" },
    { name: "Burst Pipe Cleanup", href: "/burst-pipe-water-damage-cleanup" },
    { name: "Ceiling Leak Repair", href: "/ceiling-leak-water-damage-repair" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
              <span className="text-white font-heading font-bold text-lg">GB</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-slate-900 leading-tight">
                Gulf Breeze Restoration
              </h1>
              <p className="text-xs text-slate-500">24/7 Storm & Water Cleanup</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors font-medium outline-none">
                Our Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href} className="w-full cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Why Us
            </a>
            <a href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
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
          <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in bg-white max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              <div className="px-2">
                <div className="font-medium text-slate-900 mb-2">Our Services</div>
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="text-slate-600 hover:text-blue-600 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Why Us
              </a>
              <a href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
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
