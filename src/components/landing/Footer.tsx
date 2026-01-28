import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bathroom exhaust fan installation Cave Springs Arkansas | Cave Springs Ventilation Pros",
    "image": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80",
    "@id": "https://bathroom-exhaust-fan-installation-cave-springs-ar.com/",
    "url": "https://bathroom-exhaust-fan-installation-cave-springs-ar.com/",
    "telephone": "18449012684",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Street",
      "addressLocality": "Cave Springs",
      "addressRegion": "AR",
      "postalCode": "72718",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.2645",
      "longitude": "-94.2319"
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
    "serviceType": "Bathroom Exhaust Fan Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cave Springs Ventilation Pros"
    },
    "areaServed": {
      "@type": "City",
      "name": "Cave Springs"
    },
    "description": "Professional bathroom exhaust fan installation, replacement, and ventilation services. We install whisper-quiet, humidity-sensing fans with proper exterior venting to prevent mold and moisture damage."
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
              <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">CVP</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Cave Springs Ventilation Pros</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional bathroom exhaust fan installation for Cave Springs and Northwest Arkansas. Breathe easier, live healthier.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#exhaust-fan-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Fan Installation</a></li>
              <li><a href="#exhaust-fan-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Fan Replacement</a></li>
              <li><a href="#exhaust-fan-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Ductwork Installation</a></li>
              <li><a href="#exhaust-fan-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Humidity-Sensing Fans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <a href="tel:18449012684" className="text-slate-400 hover:text-cyan-400 transition-colors font-bold text-lg">
                  (844) 901-2684
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <span className="text-slate-400">service@cavespringsventilation.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <span className="text-slate-400">Cave Springs, AR 72718</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Service Area</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              We serve homeowners throughout Cave Springs, Rogers, Bentonville, Lowell, and the greater Northwest Arkansas region.
            </p>
            <div className="flex items-center gap-2 text-cyan-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Licensed Electricians Available
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs text-slate-500 uppercase tracking-widest">
            <a href="https://cheapceilingfaninstallationspokanew.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium text-center">Ceiling Fan Installation</a>
            <a href="https://atticfanrepairelectriciantempeaz.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium text-center">Attic Fan Repair</a>
            <a href="https://blackmoldremovalskykomishwa.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium text-center">Black Mold Removal</a>
            <a href="https://toiletflangerepairtallahassee.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium text-center">Toilet Flange Repair</a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Cave Springs Ventilation Pros. All rights reserved.</p>
            <div className="flex gap-6 text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
