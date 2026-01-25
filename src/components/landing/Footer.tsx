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
              <div className="w-10 h-10 rounded-lg bg-orange-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">MCR</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">Montana Cabin Restore</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Serving the Whitefish area with specialized log cabin fire restoration. We are local experts in traditional and modern timber home recovery.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Whitefish, MT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/charred-log-restoration-whitefish-mt" className="hover:text-orange-400 transition-colors">
                  Charred Log Restoration
                </Link>
              </li>
              <li>
                <Link to="/smoke-damage-cleanup-whitefish-mt" className="hover:text-orange-400 transition-colors">
                  Smoke Damage Cleanup
                </Link>
              </li>
              <li>
                <Link to="/structural-log-repair-whitefish-mt" className="hover:text-orange-400 transition-colors">
                  Structural Timber Repair
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
                <a href="mailto:service@montanacabinrestore.com" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>service@montanacabinrestore.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Partners</h3>
            <ul className="space-y-2 text-xs text-slate-500 text-center">
              <li><a href="https://smokeodorremovalfromupholsterywhite.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Smoke Odor Removal Whitefish</a></li>
              <li><a href="https://drywallwaterdamagerestorationhudson.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Drywall Restoration Hudson</a></li>
              <li><a href="https://sumppumpfailurewatercleanupcohasset.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Sump Pump Cleanup Cohasset</a></li>
              <li><a href="https://toiletoverflowdamagerepairtimnathco.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Toilet Overflow Timnath</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Montana Cabin Restore. All rights reserved.</p>
          <p className="mt-2">
            Professional log home restoration and fire damage recovery in Whitefish, MT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
