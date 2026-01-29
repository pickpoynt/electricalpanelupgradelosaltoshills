import { Phone, MapPin, Mail, Shield, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Electrical panel upgrade Los Altos Hills | Los Altos Hills Panel Upgrade Experts",
    "image": "https://images.unsplash.com/photo-1596319530447-e2a195f1c8d7?auto=format&fit=crop&q=80",
    "telephone": "18449012684",
    "email": "service@losaltoshillspanelupgradeexperts.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Street",
      "addressLocality": "Los Altos Hills",
      "addressRegion": "CA",
      "postalCode": "94022",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.3688",
      "longitude": "-122.1359"
    },
    "url": "https://electrical-panel-upgrade-los-altos-hills.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [],
    "areaServed": {
      "@type": "City",
      "name": "Los Altos Hills",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "description": "Professional electrical panel upgrade services in Los Altos Hills, California. We provide safe, code-compliant panel upgrades to meet modern electrical demands and ensure home safety.",
    "services": [
      "Electrical panel upgrade Los Altos Hills",
      "Electrical panel replacement Los Altos Hills CA",
      "Electrical panel installation Los Altos Hills",
      "Electrical service panel upgrade",
      "Electrical panel inspection Los Altos Hills",
      "Breaker panel upgrade Los Altos Hills",
      "Panel upgrade financing",
      "Code compliance electrical work"
    ]
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">LAH</span>
              </div>
              <span className="font-heading font-bold text-lg">Los Altos Hills Panel Upgrade Experts</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Professional electrical panel upgrade services for Los Altos Hills and Santa Clara County. We provide safe, code-compliant panel upgrades to meet modern electrical demands and ensure your property's safety.
            </p>
            <div className="flex items-center gap-2 text-blue-500">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Licensed CA Electricians</span>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Electrical Panel Upgrade</li>
              <li>Panel Replacement Services</li>
              <li>Service Panel Installation</li>
              <li>Electrical Panel Inspection</li>
              <li>Breaker Panel Upgrade</li>
              <li>Code Compliance Check</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <a href="tel:18449012684" className="hover:text-white transition-colors">(844) 901-2684</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:service@sewardpanelupgradepros.com" className="hover:text-white transition-colors">service@sewardpanelupgradepros.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>Los Altos Hills, California<br />Santa Clara County</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Mon-Sat: 7AM-7PM</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>Los Altos Hills, CA</li>
              <li>Los Altos, CA</li>
              <li>Palo Alto, CA</li>
              <li>Mountain View, CA</li>
              <li>Stanford, CA</li>
              <li>Cupertino, CA</li>
              <li>Santa Clara County</li>
              <li>Silicon Valley</li>
            </ul>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://tanklesswaterheaterdescalingbellevu.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Tankless Water Heater <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://baseboardheaterinstallationseattlew.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Baseboard Heater <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://heatedfloorelectricalrepairfairhave.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Heated Floor Repair <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://smartswitchinstallationsignalmounta.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Smart Switch Install <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Los Altos Hills Panel Upgrade Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Electrical panel upgrade Los Altos Hills</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
