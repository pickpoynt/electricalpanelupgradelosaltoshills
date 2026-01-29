import { Phone, MapPin, Mail, Shield, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Electrical panel upgrade Seward Nebraska | Seward Panel Upgrade Pros",
    "image": "https://images.unsplash.com/photo-1621905252522-186368b31c6b?auto=format&fit=crop&q=80",
    "telephone": "18449012684",
    "email": "service@sewardpanelupgradepros.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Street",
      "addressLocality": "Seward",
      "addressRegion": "NE",
      "postalCode": "68434",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.8739",
      "longitude": "-97.1344"
    },
    "url": "https://electrical-panel-upgrade-seward-nebraska.com",
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
      "name": "Seward",
      "containedInPlace": {
        "@type": "State",
        "name": "Nebraska"
      }
    },
    "description": "Professional electrical panel upgrade services in Seward, Nebraska. We provide safe, code-compliant panel upgrades to meet modern electrical demands and ensure home safety.",
    "services": [
      "Electrical panel upgrade Seward Nebraska",
      "Electrical panel replacement Seward NE",
      "Electrical panel installation Seward",
      "Electrical service panel upgrade",
      "Electrical panel inspection Seward",
      "Breaker panel upgrade Seward",
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
                <span className="text-white font-heading font-bold text-lg">SUP</span>
              </div>
              <span className="font-heading font-bold text-lg">Seward Panel Upgrade Pros</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Professional electrical panel upgrade services for Seward and Seward County. We provide safe, code-compliant panel upgrades to meet modern electrical demands and ensure your property's safety.
            </p>
            <div className="flex items-center gap-2 text-blue-500">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Licensed NE Electricians</span>
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
                <span>Seward, Nebraska<br />Seward County</span>
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
              <li>Seward, NE</li>
              <li>Beatrice, NE</li>
              <li>Crete, NE</li>
              <li>Lincoln, NE</li>
              <li>Omaha, NE</li>
              <li>York, NE</li>
              <li>Seward County</li>
              <li>Saline County</li>
            </ul>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://aluminumwiringreplacementnapervilleil.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Aluminum Wiring <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://knobandtubewiringreplacementsavanna.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Knob & Tube Wiring <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://generatorinterlockkitinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Generator Interlock Kit <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://electricianforpartialpoweroutageriv.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
              Partial Power Outage <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Seward Panel Upgrade Pros. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Electrical panel upgrade Seward Nebraska</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
