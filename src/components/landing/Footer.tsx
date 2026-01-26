import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Landscape Lighting Repair Fair Haven NJ | Fair Haven Garden Light",
    "image": "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80",
    "@id": "https://landscape-lighting-repair-fair-haven-nj.com/",
    "url": "https://landscape-lighting-repair-fair-haven-nj.com/",
    "telephone": "18449012684",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fair Haven Garden District",
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
    "serviceType": "Landscape Lighting Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fair Haven Garden Light"
    },
    "areaServed": [
      { "@type": "City", "name": "Fair Haven" },
      { "@type": "City", "name": "Rumson" },
      { "@type": "City", "name": "Little Silver" }
    ],
    "description": "Expert repair and restoration services for landscape lighting systems in Fair Haven, NJ."
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">FHGL</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">Fair Haven Garden Light</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Restoring the brilliance of Fair Haven's gardens with professional landscape lighting repair and maintenance services.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-green-500" />
              <span>Fair Haven, NJ 07704</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Repair Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Wire Locating & Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Transformer Fixes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  LED System Upgrades
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+18449012684" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(844) 901-2684</span>
                </a>
              </li>
              <li>
                <a href="mailto:repair@fairhavengardenlight.com" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>repair@fhgardenlight.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs">
            <a href="https://knobandtubewiringreplacementsavanna.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Knob & Tube Replacement</a>
            <a href="https://greywatersysteminstallationtempe.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Greywater System Installation</a>
            <a href="https://cheapceilingfaninstallationspokanew.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Ceiling Fan Installation</a>
            <a href="https://toiletoverflowdamagerepairtimnathco.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Toilet Overflow Repair</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Fair Haven Garden Light. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Professional Landscape Lighting Repair Services in Fair Haven NJ.
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


