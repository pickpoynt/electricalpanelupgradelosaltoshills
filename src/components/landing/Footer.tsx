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
                <span className="text-white font-heading font-bold text-lg">GB</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">Gulf Breeze Restoration</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Serving the Gulf Coast with emergency water damage restoration. We are local, licensed, and ready for any storm.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Gulf Breeze, FL</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/storm-surge-water-damage-cleanup" className="hover:text-blue-400 transition-colors">
                  Storm Surge Cleanup
                </Link>
              </li>
              <li>
                <Link to="/burst-pipe-water-damage-cleanup" className="hover:text-blue-400 transition-colors">
                  Burst Pipe Cleanup
                </Link>
              </li>
              <li>
                <Link to="/ceiling-leak-water-damage-repair" className="hover:text-blue-400 transition-colors">
                  Ceiling Leak Repair
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
                <a href="mailto:emergency@gulfbreezerestoration.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>emergency@gulfbreezerestoration.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6">Partners</h3>
            <ul className="space-y-2 text-xs text-slate-500 text-center">
              <li><a href="https://freezeproofoutdoorfaucetreplacementoh.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Outdoor Faucet OH</a></li>
              <li><a href="https://emergencyslableakdetectionnapervill.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Slab Leak Naperville</a></li>
              <li><a href="https://galvanized-pipe-replacement-akron.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Pipe Replacement Akron</a></li>
              <li><a href="https://tanklesswaterheaterdescalingbellevu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Heater Descaling Bellevue</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gulf Breeze Restoration. All rights reserved.</p>
          <p className="mt-2">
            Licensed, bonded, and insured for water damage restoration in Gulf Breeze, FL.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
