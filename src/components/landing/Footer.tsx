import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dock Lighting Installation Fair Haven NJ | Fair Haven Marine Light",
    "image": "https://images.unsplash.com/photo-1516149896397-4050028711e1?auto=format&fit=crop&q=80",
    "@id": "https://dock-lighting-installation-fair-haven-nj.com/",
    "url": "https://dock-lighting-installation-fair-haven-nj.com/",
    "telephone": "18449012684",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fair Haven Waterfront",
      "addressLocality": "Fair Haven",
      "addressRegion": "NJ",
      "postalCode": "07704",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.3582,
      "longitude": -74.0435
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
    "serviceType": "Dock Lighting Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fair Haven Marine Light"
    },
    "areaServed": [
      { "@type": "City", "name": "Fair Haven" },
      { "@type": "City", "name": "Rumson" },
      { "@type": "City", "name": "Sea Bright" }
    ],
    "description": "Professional installation of dock lighting, piling lights, and underwater LEDs in Fair Haven, NJ."
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">FHML</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">Fair Haven Marine Light</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Bringing premium, durable illumination to Fair Haven docks and piers. Expert marine lighting solutions for your waterfront home.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Fair Haven, NJ 07704</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Marine Lighting</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  LED Piling Lights
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Underwater LED Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Dock Path Lighting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+18449012684" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(844) 901-2684</span>
                </a>
              </li>
              <li>
                <a href="mailto:design@fairhavenmarinelight.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>design@fhmarinelight.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs">
            <a href="https://tanklesswaterheaterdescalingbellevu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Tankless Heater Descaling</a>
            <a href="https://generatorinterlockkitinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Generator Interlock Installation</a>
            <a href="https://rvpedestalinstallationplanotx.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">RV Pedestal Installation</a>
            <a href="https://boatliftelectricianfairhavennj.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Boat Lift Electrician</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Fair Haven Marine Light. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Professional Dock Lighting Installation Services in Fair Haven NJ.
          </p>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </div>
    </footer>
  );
};

export default Footer;

