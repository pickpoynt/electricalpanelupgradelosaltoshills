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
                24/7 Emergency Storm Response
              </h2>
              <p className="text-lg text-slate-300">
                Flooding in Gulf Breeze? Don't wait. Call our emergency line now for immediate dispatch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h3 className="text-xl font-heading font-bold text-white mb-6">
                  Emergency Contact
                </h3>
                <div className="space-y-6">
                  <a href="tel:+13802660944" className="flex items-start gap-4 hover:opacity-80 transition-opacity group">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Call 24/7</div>
                      <div className="text-2xl font-heading font-bold text-white">(380) 266-0944</div>
                      <div className="text-sm text-slate-400">30-minute rapid response</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Service Area</div>
                      <div className="text-white">Gulf Breeze, FL</div>
                      <div className="text-sm text-slate-400">32561, 32563</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Email</div>
                      <div className="text-white text-sm">emergency@gulfbreezerestoration.com</div>
                      <div className="text-sm text-slate-400">For non-urgent inquiries</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h4 className="font-heading font-bold text-white mb-4">
                  We Serve These Local Areas:
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Gulf Breeze Proper</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Pensacola Beach</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Tiger Point</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Oriole Beach</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Midway</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Navarre</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Request Immediate Help
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                  <input type="text" id="name" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" id="phone" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Needed</label>
                <select id="service" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Storm Surge Cleanup</option>
                  <option>Burst Pipe Repair</option>
                  <option>Roof Leak Water Damage</option>
                  <option>Water Extraction</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" className="w-full h-32 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about the damage..." />
              </div>
              <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium">
                Get Help Now
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                For life-threatening emergencies, please call 911. For flood response, call (380) 266-0944
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
