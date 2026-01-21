import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is my attic fan making a loud squealing noise?",
    answer: "Squealing usually indicates worn-out motor bearings. In the Tempe heat, lubrication dries out quickly. We can replace the motor to restore quiet operation."
  },
  {
    question: "Are solar attic fans worth the investment?",
    answer: "Yes, especially in Arizona. They cost zero to run and quality models qualify for a 30% federal tax credit. They pay for themselves in energy savings."
  },
  {
    question: "How many fans do I need for my house?",
    answer: "It depends on your attic's square footage and roof shape. Generally, one fan is needed for every 1000-1500 sq ft. We perform a calculation during our visit."
  },
  {
    question: "Can you install a fan if I don't have a gable vent?",
    answer: "Yes. We can install roof-mounted units (mushroom fans) that cut directly through the roof deck, sealed with professional flashing to prevent leaks."
  },
  {
    question: "Will an attic fan really help my AC?",
    answer: "Absolutely. By lowering the attic temp from 150°F+ to near ambient temperature, your AC ducts (often in the attic) stay cooler, delivering colder air to your rooms."
  },
  {
    question: "Do you offer warranties on motors?",
    answer: "Yes. We use high-quality motors that typically come with a 5-year to lifetime manufacturer warranty, plus our own labor guarantee."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Attic Ventilation FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Honest answers about keeping your Tempe home cool and efficient.
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
