import { Phone, MapPin, Mail, Shield, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cheap Electrician Brevard NC | Brevard Affordable Electricians",
    "image": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80",
    "telephone": "18449012684",
    "email": "service@brevardaffordableelectricians.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Street",
      "addressLocality": "Brevard",
      "addressRegion": "NC",
      "postalCode": "28712",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.2319",
      "longitude": "-82.7305"
    },
    "url": "https://cheap-electrician-brevard-nc.com",
    "priceRange": "$",
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
      "name": "Brevard",
      "containedInPlace": {
        "@type": "State",
        "name": "North Carolina"
      }
    },
    "description": "Affordable electrician services in Brevard, North Carolina. Budget electrical work, low-cost repairs, and cheap electrical services. Licensed electricians offering residential and commercial electrical work at competitive prices.",
    "services": [
      "Affordable Electrician Brevard NC",
      "Budget Electrician Brevard NC",
      "Low Cost Electrician Brevard NC",
      "Cheap Electrical Services Brevard NC",
      "Residential Electrical Services",
      "Electrical Panel Services",
      "Electrical Maintenance",
      "Emergency Electrical Service"
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
              <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">BAE</span>
              </div>
              <span className="font-heading font-bold text-lg">Brevard Affordable Electricians</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Providing genuinely affordable electrical services to Brevard and Transylvania County. Quality electrical work at prices families can actually afford, without compromising safety or professionalism.
            </p>
            <div className="flex items-center gap-2 text-green-500">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Licensed NC Electricians</span>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Affordable Electrical Repairs</li>
              <li>Budget Electrical Installations</li>
              <li>Low-Cost Electrical Services</li>
              <li>Cheap Electrical Maintenance</li>
              <li>Residential Electrical Work</li>
              <li>Panel Upgrades & Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <a href="tel:18449012684" className="hover:text-white transition-colors">(844) 901-2684</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500" />
                <a href="mailto:service@brevardaffordableelectricians.com" className="hover:text-white transition-colors">service@brevardaffordableelectricians.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Brevard, North Carolina<br />Transylvania County</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Mon-Sat: 7AM-7PM</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>Brevard, NC</li>
              <li>Rosman, NC</li>
              <li>Cedar Mountain, NC</li>
              <li>Sapphire, NC</li>
              <li>Lake Toxaway, NC</li>
              <li>Pisgah Forest, NC</li>
              <li>Transylvania County</li>
              <li>Western NC Mountains</li>
            </ul>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://generatorinterlockkitinstallercypre.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-green-500 transition-colors">
              Generator Interlock Kit <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://electricianforpartialpoweroutageriv.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-green-500 transition-colors">
              Partial Power Outage <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://knobandtubewiringreplacementsignalm.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-green-500 transition-colors">
              Knob & Tube Wiring <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://aluminumwiringreplacementnapervilleil.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-green-500 transition-colors">
              Aluminum Wiring <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Brevard Affordable Electricians. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Cheap Electrician Brevard NC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
