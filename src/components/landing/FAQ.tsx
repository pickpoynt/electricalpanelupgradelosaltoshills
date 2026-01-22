import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I tell if mold is black mold (Stachybotrys)?",
    answer: "Black mold is typically dark green or black and has a slimy or soot-like texture. However, the only way to be 100% certain is through professional lab testing of a surface or air sample, which we provide."
  },
  {
    question: "Is it safe to stay in my home during mold remediation?",
    answer: "It depends on the severity and location of the mold. For small areas, you can usually stay. For larger remediations, we use containment and negative air pressure to keep spores from spreading, but we often recommend temporary relocation for those with respiratory issues."
  },
  {
    question: "Can I just use bleach to kill black mold?",
    answer: "No. Bleach is mostly water and can actually encourage mold growth on porous materials like drywall and wood. Professional remediation involves removing the mold spores and the underlying roots while fixing the moisture source."
  },
  {
    question: "How long does the mold removal process take?",
    answer: "Most Concrete residential projects take 3 to 5 days. This includes the setup of containment, the actual removal process, structural drying, and a final clearance test to ensure the air is safe."
  },
  {
    question: "Will my homeowners insurance cover mold removal?",
    answer: "In many cases, yes, if the mold was caused by a 'sudden and accidental' water event like a burst pipe. We assist with documentation and work with most insurance carriers in Concrete to help process your claim."
  },
  {
    question: "How do I prevent mold from returning in Concrete?",
    answer: "The key is moisture control. We recommend maintaining humidity below 50%, ensuring proper attic and crawlspace ventilation, and immediately repairing any roof or plumbing leaks."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Mold Remediation FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Protecting Concrete families with scientific mold solutions.
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
          <p className="text-steel mb-4">Worried about toxic mold?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for a Professional Inspection: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
