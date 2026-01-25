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
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">SRE</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">Sparta Restoration Experts</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Serving Sparta and Monroe County with professional soot removal and wall cleaning services. Local experts you can trust.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-teal-500" />
              <span>Sparta, WI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/soot-removal-sparta-wi" className="hover:text-teal-400 transition-colors">
                  Soot Removal
                </Link>
              </li>
              <li>
                <Link to="/wall-cleaning-sparta-wi" className="hover:text-teal-400 transition-colors">
                  Wall Cleaning
                </Link>
              </li>
              <li>
                <Link to="/furnace-puff-cleanup-sparta-wi" className="hover:text-teal-400 transition-colors">
                  Furnace Puff Cleanup
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
                <a href="mailto:service@spartarestoration.com" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>service@spartarestoration.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Partners</h3>
            <ul className="space-y-2 text-xs text-slate-500 text-center">
              <li><a href="https://firedamagecleanupforlogcabinswhitef.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Log Cabin Restoration</a></li>
              <li><a href="https://frozenpipeburstcleanupryebrookny.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Frozen Pipe Cleanup Rye Brook</a></li>
              <li><a href="https://basementwaterremovaleagleco.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Basement Water Removal Eagle</a></li>
              <li><a href="https://smokeodorremovalfromupholsterywhite.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Smoke Odor Removal Whitefish</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sparta Restoration Experts. All rights reserved.</p>
          <p className="mt-2">
            Professional soot removal and smoke damage restoration in Sparta, WI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
