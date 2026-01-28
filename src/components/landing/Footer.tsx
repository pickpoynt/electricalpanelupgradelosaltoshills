import { Phone, MapPin, Mail, Shield, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Whole House Surge Protector Installation Cave Springs Arkansas | Cave Springs Surge Protection Experts",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
    "telephone": "18449012684",
    "email": "service@cavesprings-surge.com",
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
    "url": "https://whole-house-surge-protector-cave-springs-ar.com",
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
      "name": "Cave Springs",
      "containedInPlace": {
        "@type": "State",
        "name": "Arkansas"
      }
    },
    "description": "Professional whole house surge protector installation in Cave Springs, Arkansas. Licensed electricians providing comprehensive surge protection for homes in Northwest Arkansas.",
    "services": [
      "Whole House Surge Protector Installation",
      "Install Whole House Surge Protector Cost",
      "Electrician for Surge Protector Installation",
      "Home Surge Protection System Installer",
      "Whole Home Surge Protector Near Me",
      "Electrical Panel Surge Protector Install",
      "Surge Protection Service for Home",
      "Main Panel Surge Protector Installation"
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
              <div className="w-10 h-10 rounded-lg bg-yellow-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">CSP</span>
              </div>
              <span className="font-heading font-bold text-lg">Cave Springs Surge Protection</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Whole house surge protector installation experts serving Cave Springs and Northwest Arkansas. We protect your electronics from damaging power surges with professional panel-mounted surge protection systems.
            </p>
            <div className="flex items-center gap-2 text-yellow-500">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Arkansas Licensed Electricians</span>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Whole House Surge Protector Installation</li>
              <li>Panel Surge Protector Install</li>
              <li>Home Surge Protection Systems</li>
              <li>Main Panel SPD Installation</li>
              <li>Surge Protection Inspection</li>
              <li>Lightning Protection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <a href="tel:18449012684" className="hover:text-white transition-colors">(844) 901-2684</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <a href="mailto:service@cavesprings-surge.com" className="hover:text-white transition-colors">service@cavesprings-surge.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5" />
                <span>Cave Springs, Arkansas<br />Benton County</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span>Mon-Sat: 7AM-7PM</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>Cave Springs, AR</li>
              <li>Bentonville, AR</li>
              <li>Rogers, AR</li>
              <li>Bella Vista, AR</li>
              <li>Centerton, AR</li>
              <li>Pea Ridge, AR</li>
              <li>Lowell, AR</li>
              <li>All of Benton County</li>
            </ul>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://wellpumpreplacementoverlandparkks.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-yellow-500 transition-colors">
              Well Pump Replacement <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://emergencyweatherheadrepairtulsaok.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-yellow-500 transition-colors">
              Emergency Weatherhead Repair <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://sumppumpbatterybackupinstallationma.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-yellow-500 transition-colors">
              Sump Pump Battery Backup <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://rvpedestalinstallationplanotx.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-yellow-500 transition-colors">
              RV Pedestal Installation <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Cave Springs Surge Protection Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Whole House Surge Protector Installation Cave Springs Arkansas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
