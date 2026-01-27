import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Schedule Your Safety Audit
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Don't leave your family's safety to chance. Our licensed Signal Mountain electricians provide expert smoke detector hardwiring and CO detection integration. Contact us today for a comprehensive life safety inspection.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Call Anytime</p>
                  <a href="tel:18449012684" className="text-2xl font-bold text-white hover:text-red-400 transition-colors">
                    (844) 901-2684
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Email Us</p>
                  <a href="mailto:service@signalmountainfire.com" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
                    service@signalmountainfire.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group border-t border-slate-800 pt-6">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                  <MapPin className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Service Area</p>
                  <p className="text-lg font-bold text-white">Signal Mountain, TN & Surrounding Mountain Communities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                  <input id="name" type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input id="phone" type="tel" className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="(423) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="alarm-type" className="text-sm font-medium text-slate-700">Service Required</label>
                <select id="alarm-type" className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>Full Home Hardwiring Upgrade</option>
                  <option>New SM/CO Alarm Installation</option>
                  <option>System Interconnection Check</option>
                  <option>Alarm Chirping / Troubleshooting</option>
                  <option>Safety Code Audit</option>
                  <option>Emergency Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Important Details (e.g. number of floors)</label>
                <textarea id="message" className="w-full min-h-[100px] px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Tell us about your home and any concerns you have..."></textarea>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-bold">
                Get My Free Safety Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
