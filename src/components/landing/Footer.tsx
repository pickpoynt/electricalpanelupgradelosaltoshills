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
              <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-lg">WPA</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">Woodland Park Attic Restore</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Serving Woodland Park and Teller County with professional attic smoke odor removal and restoration. Mountain experts you can trust.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Woodland Park, CO</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/smoke-removal-woodland-park" className="hover:text-amber-400 transition-colors">
                  Attic Smoke Removal
                </Link>
              </li>
              <li>
                <Link to="/insulation-deodorization-woodland-park" className="hover:text-amber-400 transition-colors">
                  Insulation Cleaning
                </Link>
              </li>
              <li>
                <Link to="/thermal-fogging-woodland-park" className="hover:text-amber-400 transition-colors">
                  Thermal Fogging
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
                <a href="mailto:service@woodlandatticrestore.com" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>service@woodlandatticrestore.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Partners</h3>
            <ul className="space-y-2 text-xs text-slate-500 text-center">
              <li><a href="https://freezeproofoutdoorfaucetreplacementoh.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Freeze Proof Faucet Replacement</a></li>
              <li><a href="https://tanklesswaterheaterdescalingbellevu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Tankless Heater Descaling Bellevue</a></li>
              <li><a href="https://balconydrainleakdetectionservicesau.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Balcony Drain Leak Detection</a></li>
              <li><a href="https://potfillerfaucetinstallationroundroc.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Pot Filler Faucet Installation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Woodland Park Attic Restore. All rights reserved.</p>
          <p className="mt-2">
            Professional attic smoke odor removal and deodorization in Woodland Park, CO.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
