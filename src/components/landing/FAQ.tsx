import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should hardwired smoke detectors be replaced?",
    answer: "Both the National Fire Protection Association (NFPA) and the Evanston Fire Department recommend replacing hardwired smoke detectors every 10 years. The sensors inside the units become less effective over time due to dust and component degradation."
  },
  {
    question: "Do hardwired detectors still need batteries?",
    answer: "Yes. In Evanston, local codes require hardwired detectors to have a battery backup (usually a 9V or a 10-year sealed lithium battery) so they continue to function during a power outage."
  },
  {
    question: "What does 'interconnected' mean?",
    answer: "Interconnection means that all detectors in your home are linked. If a detector in the basement senses smoke, the communication wire triggers every other alarm in the house simultaneously, giving you the earliest possible warning."
  },
  {
    question: "Can I just replace one detector, or do I need to replace them all?",
    answer: "It is strongly recommended to replace all detectors at once. Mixed brands or units of different ages may not communicate correctly through the interconnection wire, potentially leaving parts of your home unprotected."
  },
  {
    question: "What is the difference between ionization and photoelectric sensors?",
    answer: "Ionization sensors are better at detecting fast-flaming fires, while photoelectric sensors are superior at sensing slow, smoldering fires. We typically install dual-sensor or photoelectric units to provide the best overall protection for Evanston homes."
  },
  {
    question: "Do you provide carbon monoxide detector installation?",
    answer: "Yes. Many of our clients in Evanston choose combination smoke/CO detectors. Illinois law requires CO detectors to be installed within 15 feet of every sleeping room."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Smoke Detector FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Important safety information for Evanston homeowners.
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
            href="tel:+18449012684"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (844) 901-2684
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
