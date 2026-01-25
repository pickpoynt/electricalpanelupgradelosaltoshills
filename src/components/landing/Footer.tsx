import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">MFR</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">Montana Fresh Restore</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Serving Flathead Valley with professional smoke odor removal from upholstery. We are local, certified, and experts in fire damage restoration.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Whitefish, MT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/smoke-odor-removal-whitefish-mt" className="hover:text-blue-400 transition-colors">
                  Smoke Odor Removal
                </Link>
              </li>
              <li>
                <Link to="/fire-damage-restoration-whitefish-mt" className="hover:text-blue-400 transition-colors">
                  Fire Damage Restoration
                </Link>
              </li>
              <li>
                <Link to="/upholstery-deep-cleaning-whitefish-mt" className="hover:text-blue-400 transition-colors">
                  Upholstery Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+13802660944" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(380) 266-0944</span>
                </a>
              </li>
              <li>
                <a href="mailto:service@montanafreshrestore.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>service@montanafreshrestore.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Partners</h3>
            <ul className="space-y-2 text-xs text-slate-500 text-center">
              <li><a href="https://toiletflangerepairtallahassee.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Toilet Flange Tallahassee</a></li>
              <li><a href="https://showerpanleakrepairlubbocktx.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Shower Pan Repair Lubbock</a></li>
              <li><a href="https://blackmoldremovalconcretewa.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Black Mold Removal Concrete WA</a></li>
              <li><a href="https://atticmoldremediationjosephinetexas.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Attic Mold Josephine TX</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Montana Fresh Restore. All rights reserved.</p>
          <p className="mt-2">
            Certified and insured for smoke odor removal and fire damage restoration in Whitefish, MT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
