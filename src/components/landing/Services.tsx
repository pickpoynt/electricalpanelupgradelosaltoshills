import { Truck, Flashlight, Snowflake, Biohazard, Waves, Heater, ScanSearch, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Basement Water Removal",
    description: "Complete water extraction and drying for flooded basements in Eagle homes.",
    link: "/"
  },
  {
    icon: Truck,
    title: "Emergency Water Extraction",
    description: "24/7 rapid response with truck-mounted units for large-scale water removal.",
    link: "/emergency-water-extraction"
  },
  {
    icon: Flashlight,
    title: "Crawl Space Water Removal",
    description: "Specialized extraction and encapsulation for wet, hard-to-access crawl spaces.",
    link: "/crawl-space-water-removal"
  },
  {
    icon: Snowflake,
    title: "Burst Pipe Cleanup",
    description: "Immediate repair and drying for frozen and burst pipes during winter.",
    link: "/burst-pipe-cleanup"
  },
  {
    icon: Biohazard,
    title: "Toilet Overflow Cleanup",
    description: "Safe, sanitary removal of black water and sewage backups.",
    link: "/toilet-overflow-cleanup"
  },
  {
    icon: Waves,
    title: "Dishwasher Leak Cleanup",
    description: "Rescue for kitchen hardwood floors and cabinets from appliance leaks.",
    link: "/dishwasher-leak-cleanup"
  },
  {
    icon: Heater,
    title: "Water Heater Leak Cleanup",
    description: "Massive water extraction for failed water heater tank floods.",
    link: "/water-heater-leak-cleanup"
  },
  {
    icon: ScanSearch,
    title: "Leak Detection Services",
    description: "Non-invasive thermal imaging to find hidden leaks behind walls.",
    link: "/leak-detection-water-damage-services"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Our Specialized Water Damage Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a full range of water removal and restoration services tailored to the unique needs of Eagle properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
