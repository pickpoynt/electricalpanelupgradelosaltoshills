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
                <span className="text-primary-foreground font-heading font-bold text-lg">ICOR</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary-foreground leading-tight">
                  Iowa Colony Odor Restoration
                </h3>
                <p className="text-xs text-primary-foreground/60">Expert Air Quality Recovery</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Iowa Colony's leading experts in molecular odor elimination. We use advanced purification technology to permanently remove musty, moldy, and organic smells after water damage.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+13802660944"
                className="flex items-center gap-2 text-copper-light hover:text-copper transition-colors"
              >
                <Phone className="w-4 h-4" />
                (380) 266-0944
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Hydroxyl Purification
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Ozone Treatment
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  Thermal Fogging
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper-light transition-colors">
                  HEPA Air Scrubbing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 text-copper-light" />
                <span>Iowa Colony, TX 77583</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-copper-light" />
                <a href="tel:+13802660944" className="hover:text-copper-light transition-colors">
                  (380) 266-0944
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-copper-light" />
                <a href="mailto:contact@iowacolony-restoration.com" className="hover:text-copper-light transition-colors">
                  contact@iowacolony-restoration.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners / Backlinks - Centered */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <h4 className="font-heading font-semibold text-primary-foreground/80 mb-4 text-sm uppercase tracking-wider text-center">
            Our Restoration Partner Network
          </h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center max-w-4xl mx-auto">
            <a
              href="https://sumppumpbatterybackupinstallationma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Sump Pump Battery Backup Installation
            </a>
            <a
              href="https://blackmoldremovalconcretewa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Black Mold Removal Concrete WA
            </a>
            <a
              href="https://hoardinghousewaterdamagerestorationbo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Hoarding House Water Damage Restoration
            </a>
            <a
              href="https://roofleakwaterdamagerestorationwestl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
            >
              Roof Leak Water Damage Restoration
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Iowa Colony Odor Restoration. All rights reserved.
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
