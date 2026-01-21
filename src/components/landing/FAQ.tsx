import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do my clay pipes keep getting clogged?",
    answer: "Clay pipes are made of short sections joined together. Over time, these joints crack or separate, allowing tree roots to grow inside and catch debris."
  },
  {
    question: "Is trenchless repair really better than digging?",
    answer: "In most cases, yes. Trenchless methods like CIPP relining are faster, cheaper (because there's no restoration cost for your yard/driveway), and just as durable."
  },
  {
    question: "How long does the new liner last?",
    answer: "Our epoxy liners are rated for 50+ years. Essentially, you are getting a brand new, seamless PVC-like pipe cured inside your existing clay line."
  },
  {
    question: "Can you fix a pipe that has collapsed?",
    answer: "If the collapse is total, we might need to dig a small spot repair or use pipe bursting. However, many severe cracks can still be lined if the pipe is round enough."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we offer free estimates for all major repairs. We can usually provide a quote directly after performing a video camera inspection."
  },
  {
    question: "What areas of Modesto do you serve?",
    answer: "We serve all of Modesto and surrounding communities including Salida, Ceres, and Riverbank. We are the local sewer experts."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Common Sewer Questions
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers about clay pipe repair and replacement in Modesto.
            Don't let sewer problems stress you out.
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
