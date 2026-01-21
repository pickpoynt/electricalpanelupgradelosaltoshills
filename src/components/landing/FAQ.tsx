import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do my lights flicker when the AC turns on?",
    answer: "This often indicates a loose neutral connection in your main panel or at the park pedestal. It's a serious fire hazard that needs immediate attention from a pro."
  },
  {
    question: "Do you fix aluminum wiring?",
    answer: "Yes. We don't just patch it; we use AlumiConn connectors or COPALUM crimps to permanently bond the aluminum to fresh copper pigtails for safe device connection."
  },
  {
    question: "The power is out at my pedestal, but the park says it's my problem.",
    answer: "This is common. We can meet the park maintenance team on-site, test the lines, and prove exactly where the fault is, or fix it if it's on your side of the meter."
  },
  {
    question: "Can you install a 50-amp outlet for my RV?",
    answer: "Absolutely. We install 30-amp and 50-amp RV pedestals and outlets, complying with all Henderson codes for recreational vehicles."
  },
  {
    question: "Do you charge extra for weekends?",
    answer: "We offer 24/7 service. While there is an emergency dispatch fee for after-hours calls, our pricing is transparent and quoted before we start any work."
  },
  {
    question: "Is my mobile home too old to work on?",
    answer: "Never. We specialize in older models (pre-1976 HUD code) and know how to safely navigate their unique wiring challenges."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Mobile Home Electrical FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Honest answers for manufactured homeowners in Henderson.
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
