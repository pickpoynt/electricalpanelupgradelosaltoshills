import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is knob and tube wiring dangerous?",
    answer: "Yes, primarily because it is ungrounded and uses cloth insulation that becomes brittle and combustible over time. It was not designed for the electrical load of modern appliances, which can lead to overheating and fire."
  },
  {
    question: "Can I get home insurance with knob and tube wiring?",
    answer: "Most insurance companies in Savannah and nationwide will refuse to provide coverage or will significantly increase premiums if they find active knob and tube wiring in a home."
  },
  {
    question: "Do you have to tear down my walls to rewire?",
    answer: "No. Our Savannah specialists use 'fishing' techniques to run new wiring through existing cavities, typically requiring only small, easily patchable holes near the ceiling and floor."
  },
  {
    question: "How long does a whole-home rewire take?",
    answer: "A standard two-story historic home in Savannah usually takes 5 to 10 working days for a complete rewire, depending on the accessibility of the attic and crawlspace."
  },
  {
    question: "What is the cost of replacing knob and tube wiring?",
    answer: "Cost varies based on house size and accessibility. We provide free, detailed estimates for Savannah homeowners after a brief on-site inspection."
  },
  {
    question: "Are your electricians licensed for historic district work?",
    answer: "Yes. We are fully licensed, insured, and deeply familiar with the specific requirements for electrical work in Savannah's historic Landmark District."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Historic Rewiring FAQ – Savannah, GA
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Find answers to common questions about knob and tube removal, copper rewiring, and electrical safety in Savannah's historic homes.
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
