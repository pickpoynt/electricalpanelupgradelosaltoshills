import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Whole House Surge Installation", href: "#surge-protector-info" },
    { name: "Panel Surge Protector Install", href: "#surge-protector-info" },
    { name: "Home Surge Protection Systems", href: "#surge-protector-info" },
    { name: "Surge Protection Service", href: "#surge-protector-info" },
    { name: "Main Panel Installation", href: "#surge-protector-info" },
    { name: "Lightning Protection", href: "#surge-protector-info" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-600 flex items-center justify-center shadow-md">
              <span className="text-white font-heading font-bold text-lg">CSP</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-slate-900 leading-tight">
                Cave Springs Surge Protection
              </h1>
              <p className="text-xs text-slate-500">Whole House Surge Protector Experts</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-yellow-600 transition-colors font-medium outline-none">
                Our Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <a href={service.href} className="w-full cursor-pointer">
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/#about" className="text-slate-600 hover:text-yellow-600 transition-colors font-medium">
              Why Us
            </a>
            <a href="/#contact" className="text-slate-600 hover:text-yellow-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white" size="lg" asChild>
              <a href="tel:18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (844) 901-2684
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
                    <a
                      key={service.name}
                      href={service.href}
                      className="text-slate-600 hover:text-yellow-600 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href="/#about" className="text-slate-600 hover:text-yellow-600 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Why Us
              </a>
              <a href="/#contact" className="text-slate-600 hover:text-yellow-600 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white" size="lg" asChild>
                <a href="tel:18449012684" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (844) 901-2684
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
