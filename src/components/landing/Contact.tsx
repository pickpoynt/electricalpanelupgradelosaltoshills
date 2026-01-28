import { Phone, MapPin, Clock, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Protect Your Cave Springs Home Today
            </h2>
            <p className="text-lg text-slate-300">
              Contact us for a free surge protection assessment and quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-700/60 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-200" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Call Us Now</h3>
                  <a href="tel:18449012684" className="text-yellow-400 text-xl font-bold hover:text-yellow-300 transition-colors">
                    (844) 901-2684
                  </a>
                  <p className="text-slate-400 text-sm mt-1">24/7 Emergency Protection Services</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-700/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-200" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Service Area</h3>
                  <p className="text-slate-300">Cave Springs, Arkansas</p>
                  <p className="text-slate-400 text-sm mt-1">Serving all of Benton County & NW Arkansas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-700/60 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-200" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-slate-300">Monday - Saturday: 7AM - 7PM</p>
                  <p className="text-slate-400 text-sm mt-1">Emergency services available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-700/60 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-yellow-200" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Licensed & Insured</h3>
                  <p className="text-slate-300">Arkansas Licensed Master Electricians</p>
                  <p className="text-slate-400 text-sm mt-1">Full liability coverage for your protection</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-2xl p-8 text-center shadow-2xl border border-yellow-600/30">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to Protect Your Electronics?
              </h3>
              <p className="text-yellow-100 mb-6">
                Call now for a free surge protection assessment. Our electricians are ready to safeguard your Cave Springs home.
              </p>
              <Button size="lg" className="w-full bg-white text-yellow-700 hover:bg-yellow-50 font-bold text-lg h-14 shadow-lg" asChild>
                <a href="tel:18449012684" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (844) 901-2684
                </a>
              </Button>
              <p className="text-yellow-200 text-sm mt-4">
                Fast response • Licensed electricians • Upfront pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
