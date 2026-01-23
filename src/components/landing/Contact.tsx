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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              24/7 Emergency Toilet Overflow Response
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't wait when sewage emergencies strike. Call now for immediate response in Timnath and Larimer County, or fill out the form for non-emergency inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-hero rounded-lg p-8 text-primary-foreground">
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Emergency Contact
                </h3>
                <div className="space-y-4">
                  <a href="tel:+13802660944" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Call 24/7</div>
                      <div className="text-2xl font-heading font-bold">(380) 266-0944</div>
                      <div className="text-sm opacity-90">30-minute response guarantee</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Service Area</div>
                      <div>Timnath, CO</div>
                      <div className="text-sm opacity-90">Serving all of Larimer County</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Availability</div>
                      <div>24 Hours / 7 Days</div>
                      <div className="text-sm opacity-90">Including holidays</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-sm">emergency@timnathoverflow.com</div>
                      <div className="text-sm opacity-90">For non-urgent inquiries</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-heading font-bold text-foreground mb-3">
                  We Serve These Larimer County Areas:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Timnath</div>
                  <div>• Fort Collins</div>
                  <div>• Windsor</div>
                  <div>• Loveland</div>
                  <div>• Wellington</div>
                  <div>• Laporte</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Request Information
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
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe your situation (For emergencies, please call instead)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="copper" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  For immediate emergency response, please call (380) 266-0944
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
