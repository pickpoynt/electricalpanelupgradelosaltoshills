import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why does my house have power in some rooms but not others?",
    answer: "This is usually caused by a 'lost phase.' Modern homes use two hot wires to provide 240V of power. If one of those wires (or one half of your main breaker) fails, you lose power to roughly half of your 120V circuits."
  },
  {
    question: "Is it safe to leave my electronics plugged in during a partial outage?",
    answer: "No. A lost phase can cause 'floating neutral' conditions or low voltage (brownouts), which can damage the compressors in your fridge and AC, and fry the power supplies in computers and TVs. Unplug sensitive devices immediately."
  },
  {
    question: "How can I tell if the problem is my panel or Austin Energy?",
    answer: "We use high-precision voltmeters at your main service entrance. If we see 120V on one leg and 0V or low voltage on the other coming from the utility side, it's an Austin Energy issue. If the power is good at the meter but not the panel, it's a customer-side failure."
  },
  {
    question: "Can a tripped breaker cause half the house to lose power?",
    answer: "Only if it's the main breaker. Individual 15A or 20A breakers only control specific rooms or appliances. If multiple unrelated areas are dark simultaneously, the main breaker or the incoming service feed is the culprit."
  },
  {
    question: "What is a 'loose neutral' and why is it dangerous?",
    answer: "A loose neutral means the return path for electricity is compromised. This can cause some lights to get very bright (high voltage) while others get very dim (low voltage). This is a severe fire hazard and requires immediate attention."
  },
  {
    question: "How quickly can you arrive in Riverside?",
    answer: "We offer priority dispatch for partial power emergencies. In most cases, we can have a troubleshooting technician at your door in Riverside within 60 minutes."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Partial Power FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Restoring stability to Riverside homes safely.
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
          <p className="text-steel mb-4">Urgent electrical issue?</p>
          <a
            href="tel:+18449012684"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call Dispatch: (844) 901-2684
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
