import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  // Random 4 non-repeating partner links
  const partnerLinks = [
    { url: "https://sewercleanoutinstallationplanotx.vercel.app/", text: "Sewer Cleanout Installation Plano" },
    { url: "https://atticmoldremediationjosephinetexas.vercel.app/", text: "Attic Mold Remediation Josephine" },
    { url: "https://toiletflangerepairtallahassee.netlify.app/", text: "Toilet Flange Repair Tallahassee" },
    { url: "https://hardwiredsmokedetectorreplacementev.vercel.app/", text: "Hardwired Smoke Detector Replacement Evansville" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">VR</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">Vail Water Rescue</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              24/7 emergency basement water removal and restoration services serving Vail and Eagle County, Colorado. Specialized in mountain home flooding recovery.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Vail, CO</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Basement Water Extraction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Frozen Pipe Burst Cleanup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Structural Drying
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Mold Prevention
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Sewage Backup Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Insurance Coordination
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#basement-water-removal" className="hover:text-blue-400 transition-colors">
                  Water Removal Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Emergency Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+13802660944" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(380) 266-0944</span>
                </a>
              </li>
              <li>
                <a href="mailto:emergency@vailwaterrescue.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>emergency@vailwaterrescue.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-900/50 rounded-lg">
              <p className="text-xs font-semibold text-blue-400 mb-1">24/7 Emergency Service</p>
              <p className="text-xs text-slate-400">45-minute response in Eagle County</p>
            </div>
          </div>
        </div>

        {/* Partner Network */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-white text-center mb-4">Trusted Partner Network</h3>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            {partnerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vail Water Rescue. All rights reserved.</p>
          <p className="mt-2">
            Licensed, bonded, and insured for water damage restoration in Vail, CO and Eagle County.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
