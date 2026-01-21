import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if I have polybutylene pipes?",
    answer: "Look for grey pipes under your sinks or near your water heater. They are often stamped with codes like 'PB2110'. If you're unsure, we offer free visual inspections."
  },
  {
    question: "Do I really need to replace my pipes if they aren't leaking?",
    answer: "Yes. Poly-B pipes deteriorate from the inside out. They can look fine on the outside right up until they burst. Replacing them is a preventative measure."
  },
  {
    question: "How long does a whole house repipe take?",
    answer: "Most Chesapeake homes can be repiped in 3-5 days. We work in zones so you are rarely without water for more than a few hours during the day."
  },
  {
    question: "What happens to my walls and ceilings?",
    answer: "We have to open small sections of drywall to access pipes. However, our quote includes professional drywall patching and texture matching, so your home looks perfect when we leave."
  },
  {
    question: "Will replacing my pipes lower my insurance premiums?",
    answer: "Often, yes. Many insurers offer discounts for upgrading to modern plumbing systems, and it may be required to maintain coverage in some areas."
  },
  {
    question: "What pipe material do you use for replacement?",
    answer: "We recommend Uponor PEX-A for its flexibility, durability, and leak-resistant expansion fittings. We can also install copper if you prefer."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Repiping FAQ – Chesapeake, VA
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers to common questions about replacing polybutylene plumbing.
            We help Chesapeake homeowners protect their biggest investment.
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
