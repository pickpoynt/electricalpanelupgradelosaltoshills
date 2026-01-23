import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I do if a pipe bursts in my Josephine home?",
    answer: "First, immediately shut off your main water valve to stop the flow. Then, turn off electricity to the affected area if it's safe to do so. Finally, call our emergency Josephine restoration team at +18777921410 for immediate extraction and repair."
  },
  {
    question: "How fast can you arrive in Josephine for an emergency?",
    answer: "We offer 24/7 rapid response for Collin County. Our restoration experts typically arrive on-site within 45 to 60 minutes to minimize secondary damage like mold and structural rot."
  },
  {
    question: "Do you handle both the pipe repair and the water damage?",
    answer: "Yes! We are a full-service restoration company. We repair the burst pipe itself and then handle the extraction, drying, and structural restoration of your home."
  },
  {
    question: "Will my insurance cover burst pipe damage?",
    answer: "In most cases, yes. Most standard homeowners insurance policies cover water damage from sudden and accidental pipe bursts. We work directly with your insurance provider to provide all necessary documentation."
  },
  {
    question: "How long does it take to dry out my property?",
    answer: "Depending on the extent of the flooding, the professional drying process typically takes between 3 to 5 days using industrial LGR dehumidifiers and high-speed air movers."
  },
  {
    question: "Is mold a risk after a pipe burst?",
    answer: "Yes, mold can begin to grow within 24-48 hours of water exposure. That is why immediate professional extraction and dehumidification are critical for Josephine homeowners."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Burst Pipe Recovery FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert advice for Josephine property owners facing water emergencies.
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
          <p className="text-steel mb-4">Facing a burst pipe emergency in Josephine?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call 24/7 for Emergency Help: (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
