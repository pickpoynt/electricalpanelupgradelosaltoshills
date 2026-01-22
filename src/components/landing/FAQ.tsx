import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a generator interlock kit?",
    answer: "A generator interlock kit is a mechanical safety device that consists of two sliding plates. It ensures that the main breaker and the generator breaker cannot both be 'ON' at the same time, preventing dangerous backfeeding into the utility grid."
  },
  {
    question: "Is an interlock kit legal in Cypress, Texas?",
    answer: "Yes, when installed by a licensed electrician, interlock kits are NEC (National Electrical Code) compliant. They meet the requirement for a physical disconnect between the generator and utility power."
  },
  {
    question: "Can I power my AC with a portable generator and an interlock?",
    answer: "Yes, provided your generator has enough wattage (typically 7,500W to 12,000W) to handle the startup surge of your AC compressor. We can install 'soft start' kits on your AC to make this even easier on your generator."
  },
  {
    question: "What is a power inlet box?",
    answer: "A power inlet box is a weatherproof outlet installed on the outside of your home. You plug your generator into this box using a heavy-duty cord, which then sends power through the interlock kit into your panel."
  },
  {
    question: "How long does the installation take?",
    answer: "A standard interlock kit and power inlet box installation typically takes 2 to 4 hours. We test the system with your generator before we leave to ensure everything is working perfectly."
  },
  {
    question: "Do I need to pick which circuits to power?",
    answer: "No. Unlike a transfer switch, an interlock kit energizes the entire panel. You simply turn off the breakers for heavy loads you don't need (like the oven or dryer) and leave on the ones you do (like lights, outlets, and fridge)."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Generator Interlock FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Everything you need to know about safe backup power in Cypress.
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
