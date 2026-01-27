import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hot tub wiring electrician Signal Mountain TN | Signal Mountain Hot Tub Electric",
    "image": "https://images.unsplash.com/photo-1543967625-f013d528f804?auto=format&fit=crop&q=80",
    "@id": "https://hot-tub-wiring-electrician-signal-mountain-tn.com/",
    "url": "https://hot-tub-wiring-electrician-signal-mountain-tn.com/",
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
    "serviceType": "Hot Tub Wiring",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Signal Mountain Hot Tub Electric"
    },
    "areaServed": {
      "@type": "City",
      "name": "Signal Mountain"
    },
    "description": "Professional electrical hookups, GFCI protection, and sub-panel installations for hot tubs, spas, and swim spas."
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
                <span className="text-white font-heading font-bold text-lg">SMHT</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Signal Mountain Hot Tub Electric</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Signal Mountain's premier specialists for safe and reliable hot tub electrical installations and spa hookups.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#hottub-wiring-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Hot Tub Hookups</a></li>
              <li><a href="#hottub-wiring-info" className="text-slate-400 hover:text-cyan-400 transition-colors">GFCI Protection</a></li>
              <li><a href="#hottub-wiring-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Dedicated Circuits</a></li>
              <li><a href="#hottub-wiring-info" className="text-slate-400 hover:text-cyan-400 transition-colors">Sub-Panel Setup</a></li>
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
                <span className="text-slate-400">service@signalmountainhottub.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <span className="text-slate-400">Signal Mountain, TN 37377</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Mountain Coverage</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Proudly serving the entire Town of Signal Mountain, Walden, and surrounding communities.
            </p>
            <div className="flex items-center gap-2 text-cyan-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Available for Estimates
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs text-slate-500 uppercase tracking-widest">
            <a href="https://wellpumpreplacementoverlandparkks.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium">Well Pump Replacement</a>
            <a href="https://potfillerfaucetinstallationroundroc.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium">Pot Filler Faucet Installation</a>
            <a href="https://ceramickilnelectricalhookupashevill.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium">Ceramic Kiln Hookup</a>
            <a href="https://aluminumwiringreplacementnapervilleil.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium">Aluminum Wiring Replacement</a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Signal Mountain Hot Tub Electric. All rights reserved.</p>
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
