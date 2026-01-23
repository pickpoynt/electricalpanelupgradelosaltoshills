import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When is a ceiling leak considered an emergency?",
    answer: "If your ceiling is sagging, bulging, or water is actively dripping near light fixtures or electrical outlets, it is a structural and fire hazard that requires immediate emergency stabilization in Eureka Springs."
  },
  {
    question: "Do you have to replace the entire ceiling if there is a small stain?",
    answer: "Not necessarily. If caught early and the source of the leak is stopped, we can often dry and treat the area before providing a professional patch and paint. However, significant saturation requires sheetrock replacement."
  },
  {
    question: "Can you match the texture of my existing ceiling?",
    answer: "Yes. Our team is expert at matching various textures, including popcorn, knock-down, and smooth finishes common in both modern and historic Eureka Springs homes."
  },
  {
    question: "How long does it take for a ceiling to dry completely?",
    answer: "With industrial dehumidifiers and air movers, most ceilings can be fully dried within 48 to 72 hours, though the full restoration (patching and painting) may take a few additional days for proper curing."
  },
  {
    question: "Will insurance cover ceiling repair from a roof leak?",
    answer: "In many cases, yes. We provide the detailed moisture maps and structural assessments required by Arkansas insurance adjusters to help facilitate your claim for ceiling restoration."
  },
  {
    question: "What causes ceilings to crack and sag after water damage?",
    answer: "Water weight pulls on the fasteners (nails or screws) holding the sheetrock to the joists. Over time, the saturated core of the drywall weakens, leading to cracking, sagging, and eventual collapse."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Ceiling Restoration FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert answers for water damage recovery in Eureka Springs, AR.
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
          <p className="text-steel mb-4">Have a sagging or stained ceiling in Eureka Springs?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for a Structural Inspection: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
