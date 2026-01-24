import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              24/7 Emergency Water Removal Response
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flooded basement in Eagle? Don't wait. Call our emergency line now for immediate dispatch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-heading font-bold mb-6">
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
                      <div className="text-sm text-slate-400">30-minute response guarantee</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Service Area</div>
                      <div className="text-white">Eagle, CO</div>
                      <div className="text-sm text-slate-400">Serving all of Eagle County</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Availability</div>
                      <div className="text-white">24 Hours / 7 Days</div>
                      <div className="text-sm text-slate-400">Including Holidays & Weekends</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-slate-300">Email</div>
                      <div className="text-white text-sm">emergency@eaglewaterrescue.com</div>
                      <div className="text-sm text-slate-400">For non-urgent inquiries</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                <h4 className="font-heading font-bold text-slate-900 mb-3">
                  We Serve These Local Areas:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Eagle</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Gypsum</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Wolcott</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Edwards</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Avon</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">•</span> Bond</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                Request a Free Inspection
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-slate-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-slate-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 border-slate-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe your water damage situation..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="resize-none border-slate-200 focus:border-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium">
                  Send Message
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  For immediate emergency response in Eagle, please call us directly at (380) 266-0944
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
