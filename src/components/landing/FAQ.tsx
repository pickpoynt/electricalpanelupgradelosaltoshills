import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you tarp my roof in Westlake?",
    answer: "We offer 24/7 emergency response and can typically have a crew at your Westlake property to install emergency tarping within 60 minutes of your call."
  },
  {
    question: "Do I need to wait for my insurance adjuster to start restoration?",
    answer: "No. In fact, most insurance policies require you to take immediate action to mitigate further Damage (like tarping and water extraction). We provide full documentation for your claim."
  },
  {
    question: "Can you dry out a water-damaged ceiling without removing it?",
    answer: "In many cases, yes. We use specialized drying systems that can push warm air through small holes in the ceiling or attic to dry the structure without full demolition, depending on the contamination level."
  },
  {
    question: "What are the signs of a hidden roof leak?",
    answer: "Look for yellow or brown water stains on your ceiling, peeling paint, a musty odor in the attic, or bubbling drywall. If you see these signs in Westlake, call us immediately for a thermal inspection."
  },
  {
    question: "How long does the restoration process take?",
    answer: "Emergency stabilization (tarping and extraction) happens in hours. The professional drying process usually takes 3 to 5 days, followed by any necessary structural repairs."
  },
  {
    question: "Is mold a concern with roof leaks in Westlake?",
    answer: "Absolutely. Florida's humidity means mold can grow within 24-48 hours of a leak. Rapid extraction and high-speed dehumidification are the only ways to prevent a mold outbreak."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Roof Leak Recovery FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert advice for Westlake property owners facing storm and roof damage.
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
          <p className="text-steel mb-4">Have an emergency roof leak in Westlake?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for Immediate Assistance: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
