import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my cast iron pipes are bad?",
    answer: "Common signs include frequent backups, slow drainage, foul sewer smells, or pest issues. If you notice cracks in your walls or uneven floors, you may have a slab leak."
  },
  {
    question: "Do you have to break my floors to fix the pipes?",
    answer: "Not necessarily. We specialize in tunneling under the slab and trenchless pipe lining. These methods preserve your tile, wood, and carpet flooring."
  },
  {
    question: "What is the difference between descaling and replacement?",
    answer: "Descaling removes rust to restore flow in pipes that are still structurally sound. Replacement is for pipes that have collapsed, cracked, or completely eroded."
  },
  {
    question: "Does insurance cover cast iron pipe replacement?",
    answer: "It depends on your policy. While wear and tear usually isn't covered, water damage resulting from a failure often is. We can help provide the documentation you need."
  },
  {
    question: "How long does a tunneling job take?",
    answer: "Most tunneling residential projects in Baton Rouge are completed in 5-10 days. You can usually stay in your home during the process."
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes. Our full PVC replacements come with a 50-year warranty, and our extensive spot repairs come with industry-leading guarantees."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Pipe Repair FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers to common questions about cast iron plumbing in Baton Rouge.
            We provide clear, honest assessments.
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
