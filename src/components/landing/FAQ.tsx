import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a special box for a ceiling fan?",
    answer: "Yes. Ceiling fans are heavy and vibrate. Standard plastic light boxes will eventually crack or fail. We always install a fan-rated steel brace box."
  },
  {
    question: "How much does installation cost?",
    answer: "For a standard swap (fan-to-fan), prices start very low. New wiring or high ceilings add a bit more. Call us at (844) 901-2684 for an instant quote."
  },
  {
    question: "Can you install a fan where no light exists?",
    answer: "Absolutely. We are expert electricians. We can fish new wires through your attic or ceiling joists to create a new center point for your room."
  },
  {
    question: "My ceilings are 18 feet high. Can you reach them?",
    answer: "Yes. We carry specialized A-frame ladders and scaffolding to safely reach cathedral and vaulted ceilings common in Spokane homes."
  },
  {
    question: "Do you assemble the fan?",
    answer: "Yes. You just leave the box in the room. We unbox, assemble, mount, wire, and balance the fan, then take the trash with us."
  },
  {
    question: "Why is my current fan wobbling?",
    answer: "Wobbling usually comes from unbalanced blades or a loose mounting bracket. We precision-balance every fan we install for smooth operation."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Fan Installation FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers to common questions about cooling your Spokane home.
            We make it easy and affordable.
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
