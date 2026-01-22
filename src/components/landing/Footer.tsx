import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-copper flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">TWE</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary-foreground leading-tight">
                  Tulsa Weatherhead Experts
                </h3>
                <p className="text-xs text-primary-foreground/60">24/7 Storm Specialists</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Tulsa's dedicated emergency weatherhead and service mast repair specialists.
              We provide rapid restoration when Oklahoma storms damage your electrical entrance.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+18449012684"
                className="flex items-center gap-2 text-copper-light hover:text-copper transition-colors"
              >
                <Phone className="w-4 h-4" />
                (844) 901-2684
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Weatherhead Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Mast Straightening
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Water Entry Protection
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 text-copper-light" />
                <span>Tulsa, OK</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-copper-light" />
                <a href="tel:+18449012684" className="hover:text-copper-light transition-colors">
                  (844) 901-2684
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-copper-light" />
                <a href="mailto:service@tulsa-weatherhead.com" className="hover:text-copper-light transition-colors">
                  service@tulsa-weatherhead.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners / Backlinks - Centered */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <h4 className="font-heading font-semibold text-primary-foreground/80 mb-4 text-sm uppercase tracking-wider text-center">
            Our Home Improvement Service Network
          </h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a
              href="https://wellpumpreplacementoverlandparkks.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Well Pump Replacement Overland Park KS
            </a>
            <a
              href="https://toiletflangerepairtallahassee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Toilet Flange Repair Tallahassee
            </a>
            <a
              href="https://trenchlesspiperelininghuntsville.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Trenchless Pipe Relining Huntsville
            </a>
            <a
              href="https://greywatersysteminstallationtempe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Greywater System Installation Tempe
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Tulsa Weatherhead Experts. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-copper-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-copper-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-copper-light transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
