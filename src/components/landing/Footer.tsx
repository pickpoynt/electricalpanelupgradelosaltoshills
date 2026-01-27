import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Heated Floor Electrical Repair Fair Haven NJ | Fair Haven Floor Warmth",
    "image": "https://images.unsplash.com/photo-1556911220-e15224bbaf47?auto=format&fit=crop&q=80",
    "@id": "https://heated-floor-electrical-repair-fair-haven-nj.com/",
    "url": "https://heated-floor-electrical-repair-fair-haven-nj.com/",
    "telephone": "18449012684",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fair Haven Comfort District",
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
    "serviceType": "Heated Floor Electrical Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fair Haven Floor Warmth"
    },
    "areaServed": [
      { "@type": "City", "name": "Fair Haven" },
      { "@type": "City", "name": "Rumson" },
      { "@type": "City", "name": "Sea Bright" },
      { "@type": "City", "name": "Red Bank" }
    ],
    "description": "Professional troubleshooting and repair for radiant floor heating systems in Fair Haven, NJ. Specialized in cable fault locating and thermostat repair."
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">FHFW</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">Fair Haven Floor Warmth</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Restoring luxury and comfort to your home with professional radiant floor heating repairs. Expert electrical diagnostics for Fair Haven residents.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Fair Haven, NJ 07704</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Repair Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#heated-floor-info" className="hover:text-blue-400 transition-colors">
                  Thermostat Troubleshooting
                </a>
              </li>
              <li>
                <a href="#heated-floor-info" className="hover:text-blue-400 transition-colors">
                  Cable Fault Locating
                </a>
              </li>
              <li>
                <a href="#heated-floor-info" className="hover:text-blue-400 transition-colors">
                  GFCI & Circuit Repair
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
                <a href="mailto:service@fairhavenfloorwarmth.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>service@fhfloorwarmth.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs">
            <a href="https://greywatersysteminstallationtempe.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Greywater System Installation</a>
            <a href="https://rvpedestalinstallationplanotx.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">RV Pedestal Installation</a>
            <a href="https://claypiperepairmodestoca.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Clay Pipe Repair</a>
            <a href="https://smokeodorremovalatticwoodlandpark.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Smoke Odor Removal</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Fair Haven Floor Warmth. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Professional Heated Floor Electrical Repair Services in Fair Haven NJ.
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
