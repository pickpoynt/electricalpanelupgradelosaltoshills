import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Historic home rewiring Signal Mountain TN | Signal Mountain Historic Electrical",
    "image": "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80",
    "@id": "https://historic-home-rewiring-signal-mountain-tn.com/",
    "url": "https://historic-home-rewiring-signal-mountain-tn.com/",
    "telephone": "18449012684",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Signal Mountain Blvd",
      "addressLocality": "Signal Mountain",
      "addressRegion": "TN",
      "postalCode": "37377",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.1223",
      "longitude": "-85.3436"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Historic Home Rewiring",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Signal Mountain Historic Electrical"
    },
    "areaServed": {
      "@type": "City",
      "name": "Signal Mountain"
    },
    "description": "Expert electrical rewiring for historic and vintage homes. Specializing in knob-and-tube replacement, cloth-wrapped wire removal, panel upgrades, and preservation-minded electrical modernization."
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1 border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">SHE</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Signal Mountain Historic Electrical</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Preserving Signal Mountain's architectural heritage while modernizing electrical systems for safety and peace of mind.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#historic-rewiring-info" className="text-slate-400 hover:text-amber-400 transition-colors">Knob & Tube Replacement</a></li>
              <li><a href="#historic-rewiring-info" className="text-slate-400 hover:text-amber-400 transition-colors">Cloth Wire Removal</a></li>
              <li><a href="#historic-rewiring-info" className="text-slate-400 hover:text-amber-400 transition-colors">Panel Upgrades</a></li>
              <li><a href="#historic-rewiring-info" className="text-slate-400 hover:text-amber-400 transition-colors">Heritage Preservation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <a href="tel:18449012684" className="text-slate-400 hover:text-amber-400 transition-colors font-bold text-lg">
                  (844) 901-2684
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-slate-400">service@signalmountainhistoric.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-slate-400">Signal Mountain, TN 37377</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Local Heritage Experts</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              We serve historic homeowners across Signal Mountain and the Greater Chattanooga region with specialized vintage home electrical services.
            </p>
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Licensed Master Electricians
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs text-slate-500 uppercase tracking-widest">
            <a href="https://knobandtubewiringreplacementsavanna.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium text-center">Knob & Tube Replacement</a>
            <a href="https://aluminumwiringreplacementnapervilleil.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium text-center">Aluminum Wiring Replacement</a>
            <a href="https://generatorinterlockkitinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium text-center">Generator Interlock Kit</a>
            <a href="https://ceramickilnelectricalhookupashevill.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium text-center">Ceramic Kiln Hookup</a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Signal Mountain Historic Electrical. All rights reserved.</p>
            <div className="flex gap-6 text-slate-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
