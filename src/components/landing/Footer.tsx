import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  // Random 4 non-repeating partner links
  const partnerLinks = [
    { url: "https://ceramickilnelectricalhookupashevill.vercel.app/", text: "Ceramic Kiln Electrical Hookup Asheville" },
    { url: "https://toiletflangerepairtallahassee.netlify.app/", text: "Toilet Flange Repair Tallahassee" },
    { url: "https://greywatersysteminstallationtempe.vercel.app/", text: "Greywater System Installation Tempe" },
    { url: "https://baseboardheaterinstallationseattlew.vercel.app/", text: "Baseboard Heater Installation Seattle" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">TOP</span>
              </div>
              <div>
                <div className="font-heading font-bold text-foreground">Timnath Overflow Pros</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              24/7 emergency toilet overflow damage repair and sewage cleanup serving Timnath and Larimer County, Colorado.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-copper" />
              <span>Timnath, CO</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-copper transition-colors">
                  Emergency Water Extraction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper transition-colors">
                  Sewage Cleanup & Sanitization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper transition-colors">
                  Structural Drying
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper transition-colors">
                  Bathroom Restoration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper transition-colors">
                  Antimicrobial Treatment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper transition-colors">
                  Insurance Claims Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-copper transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#overflow-info" className="hover:text-copper transition-colors">
                  Overflow Solutions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-copper transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-copper transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Emergency Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+13802660944" className="flex items-center gap-2 text-muted-foreground hover:text-copper transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(380) 266-0944</span>
                </a>
              </li>
              <li>
                <a href="mailto:emergency@timnathoverflow.com" className="flex items-center gap-2 text-muted-foreground hover:text-copper transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>emergency@timnathoverflow.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-copper/10 border border-copper/30 rounded-lg">
              <p className="text-xs font-semibold text-copper mb-1">24/7 Emergency Service</p>
              <p className="text-xs text-muted-foreground">30-minute response time in Timnath</p>
            </div>
          </div>
        </div>

        {/* Partner Network */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-heading font-bold text-foreground text-center mb-4">Trusted Partner Network</h3>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            {partnerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Timnath Overflow Pros. All rights reserved.</p>
          <p className="mt-2">
            Licensed, bonded, and insured for toilet overflow damage repair in Timnath, CO and Larimer County.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
