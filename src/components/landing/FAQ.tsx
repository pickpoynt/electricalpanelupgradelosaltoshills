import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it legal to reuse greywater in Tempe?",
    answer: "Yes, Arizona has some of the most progressive greywater laws in the country. Residential greywater use (from washers, showers, etc.) is allowed under a specific 'General Permit' rule, which we strictly follow."
  },
  {
    question: "What kind of soap should I use?",
    answer: "You must use 'plant-friendly' soaps that are free of salts (sodium), boron, and chlorine bleach. We provide a full list of recommended detergents upon installation."
  },
  {
    question: "Does greywater smell bad?",
    answer: "A properly designed system moves water to the landscape immediately (usually within 24 hours), preventing decomposition and odors. It never sits in a holding tank."
  },
  {
    question: "Can I use greywater on my lawn?",
    answer: "Greywater is best suited for trees, bushes, vines, and perennials. It is generally not recommended for sprinklers or lawns due to potential runoff and human contact issues."
  },
  {
    question: "How much water can I save?",
    answer: "A typical household produces 20-40 gallons of greywater per person per day. diverting this can reduce your outdoor freshwater irrigation needs by 30-50%."
  },
  {
    question: "Does the system require a permit?",
    answer: "Simple Laundry-to-Landscape systems often don't require a formal inspection if they meet ADEQ guidelines. More complex whole-house systems may require a city permit, which we handle."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Greywater Recycling FAQ – Tempe, AZ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get clarity on using recycled water for your Tempe landscape. We adhere to all Arizona Department of Environmental Quality standards.
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
