import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a permit to install a sewer cleanout in Plano?",
    answer: "Yes, most cleanout installations require a plumbing permit. We handle all permitting and inspections for you as part of our service."
  },
  {
    question: "Where should a cleanout be located?",
    answer: "Ideally near your property line for easy access, at direction changes in the sewer line, and before the connection to the city main. We'll assess your property and recommend the best location."
  },
  {
    question: "Can you install a cleanout if my sewer line is under my driveway?",
    answer: "Yes! We can bore under driveways or install the cleanout on either side. We minimize disruption to hardscaping and restore everything when done."
  },
  {
    question: "How much does sewer cleanout installation cost?",
    answer: "Costs vary based on depth, location, and soil conditions. Most installations range from $400-$1,200. We provide free estimates with no obligation."
  },
  {
    question: "Will you restore my landscaping after installation?",
    answer: "Absolutely. We backfill properly, compact the soil, and restore grass or landscaping. The cleanout cap sits flush with grade for easy mowing."
  },
  {
    question: "How long does installation take?",
    answer: "Most cleanout installations are completed in 3-6 hours, including excavation, installation, inspection, and restoration. Same-day service available."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Cleanout FAQ – Plano, TX
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Common questions about sewer cleanout installation and replacement.
            We help Plano homeowners protect their investment and save on future repairs.
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
