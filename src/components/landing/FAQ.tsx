import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a permit for my kiln?",
    answer: "In most cases in Buncombe County, yes. Adding a new dedicated circuit for a kiln is considered new electrical work that requires a permit and inspection, which we handle for you."
  },
  {
    question: "What outlet does my kiln need?",
    answer: "It depends on the kiln. Most single-phase kilns use a NEMA 6-50 or 14-50 outlet (like a dryer or range), but we always check the manufacturer plate to match the exact amperage requirements."
  },
  {
    question: "Can I run my kiln on an extension cord?",
    answer: "Absolutely NOT. Kilns draw high continuous amperage that will melt standard extension cords, creating a severe fire hazard. You must have a direct wall connection."
  },
  {
    question: "How much does it cost to install a kiln outlet?",
    answer: "Cost varies based on distance from your main panel and wire gauge needed. A run close to the panel is cheaper than one requiring conduit across a basement or garage."
  },
  {
    question: "Do kilns need ventilation?",
    answer: "Yes. Firing clay and glazes releases fumes (sulfur, carbon monoxide, heavy metals) that must be vented outside. We can wire your EnviroVent or overhead hood system into the circuit."
  },
  {
    question: "Can I put a kiln in my garage?",
    answer: "Yes, garages are popular spots. We just need to ensure the electrical panel has room for the new breaker and that we use outdoor-rated conduit if the wiring is exposed."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Kiln Electrical FAQ – Asheville, NC
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers to common questions about powering your pottery studio safely.
            We follow the National Electrical Code (NEC) for all continuous load installations.
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
