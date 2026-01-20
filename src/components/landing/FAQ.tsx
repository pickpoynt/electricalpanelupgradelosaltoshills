import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do baseboard heaters use a lot of electricity?",
    answer: "Resistance heat is 100% efficient, but electricity costs more than gas. However, zonal heating (only heating occupied rooms) often results in lower overall bills than heating a whole house with a central furnace."
  },
  {
    question: "My heater smells like burning. Is that normal?",
    answer: "If you haven't used it all summer, yes. It's usually just dust burning off the element. The smell should dissipate in 20-30 minutes. If it persists, turn it off and call us."
  },
  {
    question: "Can I put furniture in front of the heater?",
    answer: "No! You need to keep at least 12 inches of clearance in front of baseboard heaters to prevent fire hazards and allow proper airflow."
  },
  {
    question: "How long do these heaters last?",
    answer: "Electric baseboard heaters are very simple and durable, often lasting 20+ years. The thermostats usually fail before the heaters do."
  },
  {
    question: "Can you upgrade me to a smart thermostat?",
    answer: "Yes! High-voltage smart thermostats like Mysa are designed specifically for baseboard heaters. We can retrofit them to give you app control and scheduling."
  },
  {
    question: "Do I need a dedicated circuit?",
    answer: "Yes, electric heaters draw significant power (amperage). They generally require dedicated 240V circuits to operate safely and meet code."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Heating FAQ – Seattle, WA
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Common questions about electric zonal heating.
            We help Seattle homeowners stay warm and safe.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-steel/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-copper hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-steel mb-4">Still have questions?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
