import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Knob and tube wiring replacement Signal Mountain TN | Signal Mountain Wiring Experts",
    "image": "https://images.unsplash.com/photo-1563770660941-20978e8700f1?auto=format&fit=crop&q=80",
    "@id": "https://knob-and-tube-wiring-replacement-signal-mountain-tn.com/",
    "url": "https://knob-and-tube-wiring-replacement-signal-mountain-tn.com/",
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
    "serviceType": "Knob and Tube Wiring Replacement",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Signal Mountain Wiring Experts"
    },
    "areaServed": {
      "@type": "City",
      "name": "Signal Mountain"
    },
    "description": "Professional replacement of outdated knob and tube wiring in historic homes with modern, safe, and code-compliant electrical systems."
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
                <span className="text-white font-heading font-bold text-lg">SMWE</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Signal Mountain Wiring Experts</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Signal Mountain's premier specialists for historic home electrical modernization and knob and tube replacement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#knob-tube-info" className="text-slate-400 hover:text-amber-400 transition-colors">Wiring Replacement</a></li>
              <li><a href="#knob-tube-info" className="text-slate-400 hover:text-amber-400 transition-colors">Insurance Certification</a></li>
              <li><a href="#knob-tube-info" className="text-slate-400 hover:text-amber-400 transition-colors">Panel Upgrades</a></li>
              <li><a href="#knob-tube-info" className="text-slate-400 hover:text-amber-400 transition-colors">AFCI Protection</a></li>
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
                <span className="text-slate-400">service@signalmountainwiring.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-slate-400">Signal Mountain, TN 37377</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="border-slate-800">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Local Coverage</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Serving the Town of Signal Mountain, Walden, and historic districts across the Tennessee valley.
            </p>
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Mountain Local Service
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-xs text-slate-500 uppercase tracking-widest">
            <a href="https://sumppumpbatterybackupinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium">Sump Pump Battery Backup</a>
            <a href="https://toiletflangerepairtallahassee.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium">Toilet Flange Repair</a>
            <a href="https://trenchlesspiperelininghuntsville.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium">Trenchless Pipe Relining</a>
            <a href="https://greywatersysteminstallationtempe.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-medium">Greywater System Installation</a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Signal Mountain Wiring Experts. All rights reserved.</p>
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
