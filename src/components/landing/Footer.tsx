import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Boat Lift Electrician Fair Haven NJ | Fair Haven Marine Electric",
    "image": "https://boat-lift-electrician-fair-haven-nj.com/boat-lift-hero.png",
    "@id": "https://boat-lift-electrician-fair-haven-nj.com/",
    "url": "https://boat-lift-electrician-fair-haven-nj.com/",
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
    "serviceType": "Boat Lift Electrical Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fair Haven Marine Electric"
    },
    "areaServed": [
      { "@type": "City", "name": "Fair Haven" },
      { "@type": "City", "name": "Rumson" },
      { "@type": "City", "name": "Sea Bright" }
    ],
    "description": "Expert electrical services for boat lifts, motors, remotes, and dock lighting in Fair Haven, NJ."
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">FHME</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">Fair Haven Marine Electric</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Serving the Fair Haven and Monmouth County waterfront communities with professional boat lift and marine electrical services.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Fair Haven, NJ 07704</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Marine Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Boat Lift Motor Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Remote System Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Dock & Pier Lighting
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
                <a href="mailto:service@fairhavenmarineelectric.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>service@fhmarine.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs">
              <a href="https://smokeodorremovalatticwoodlandpark.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Attic Smoke Cleanup Woodland Park</a>
              <a href="https://ceramickilnelectricalhookupashevill.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Ceramic Kiln Electrical Hookup</a>
              <a href="https://hardwiredsmokedetectorreplacementev.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Smoke Detector Replacement</a>
              <a href="https://castironpiperepairbatonrougela.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Cast Iron Pipe Repair</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Fair Haven Marine Electric. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Professional Boat Lift Electrician Services in Fair Haven NJ.
            </p>
          </div>


          {/* Schema */}
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(serviceSchema)}
          </script>
        </div>
    </footer>
  );
};

export default Footer;

