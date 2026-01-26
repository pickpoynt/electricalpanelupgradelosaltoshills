import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Professional Patio Heater Wiring
              </h2>
              <p className="text-lg text-slate-300">
                Ready to upgrade your Fair Haven outdoor space? Call our patio heating specialists for a custom electrical consultation and expert installation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-heading font-bold text-white mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-6">
                  <a href="tel:+18449012684" className="flex items-start gap-4 hover:opacity-80 transition-opacity group">
                    <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Call Now</div>
                      <div className="text-2xl font-heading font-bold text-white">(844) 901-2684</div>
                      <div className="text-sm text-slate-400">Expert heat design consultations</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Service Area</div>
                      <div className="text-white">Fair Haven, NJ</div>
                      <div className="text-sm text-slate-400">07704</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Email</div>
                      <div className="text-white text-sm">warmth@fairhavenpatioheat.com</div>
                      <div className="text-sm text-slate-400">For custom project inquiries</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h4 className="font-heading font-bold text-white mb-4">
                  Serving the Navesink Coast:
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><span className="text-orange-500">•</span> Fair Haven</div>
                  <div className="flex items-center gap-2"><span className="text-orange-500">•</span> Rumson</div>
                  <div className="flex items-center gap-2"><span className="text-orange-500">•</span> Sea Bright</div>
                  <div className="flex items-center gap-2"><span className="text-orange-500">•</span> Little Silver</div>
                  <div className="flex items-center gap-2"><span className="text-orange-500">•</span> Red Bank</div>
                  <div className="flex items-center gap-2"><span className="text-orange-500">•</span> Monmouth Beach</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 font-heading">
              Request a Heat Design Quote
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                  <input type="text" id="name" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" id="phone" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Heating Interest</label>
                <select id="service" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>New Circuit & Heater Install</option>
                  <option>Recessed Heater Setup</option>
                  <option>Variable Control Install</option>
                  <option>Smart Home Integration</option>
                  <option>Maintenance / Repair</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Project Details</label>
                <textarea id="message" className="w-full h-32 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your patio..." />
              </div>
              <Button type="submit" className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium">
                Send Request
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Need immediate help? Call us at (844) 901-2684
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Contact;

