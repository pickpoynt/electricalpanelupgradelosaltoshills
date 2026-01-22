import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why should I fix a leaking outdoor faucet immediately?",
    answer: "An outdoor leak can slowly saturate the ground around your foundation, potentially leading to basement flooding or structural shifting. Additionally, even a small drip can waste thousands of gallons of water over time."
  },
  {
    question: "Do you offer emergency late night faucet repairs in Westfield?",
    answer: "Yes! We specialize in late night emergency calls. If your faucet bursts or won't stop running in the middle of the night, our Westfield plumbers are available 24/7 to shut it down and fix it."
  },
  {
    question: "What is a frost-proof hose bib?",
    answer: "A frost-proof hose bib has a long stem reaching inside your home's heated space. This ensures that the water valve is protected from the cold, preventing the pipe from freezing and bursting during Indiana winters."
  },
  {
    question: "How long does it take to replace an outdoor faucet?",
    answer: "Most faucet replacements take about 1 to 2 hours. We carry a wide variety of sizes and brands on our trucks to ensure we can complete the job in a single visit."
  },
  {
    question: "Can I just cap a leaking outdoor faucet?",
    answer: "Capping is a temporary fix but can be dangerous in winter. If water is trapped in the pipe behind the cap, it can freeze and cause the pipe to burst inside your wall. Proper repair or replacement is always recommended."
  },
  {
    question: "Should I remove my hose in the winter?",
    answer: "Absolutely. Leaving a hose attached to your faucet prevents it from draining properly. This is the leading cause of burst pipes, even with frost-proof faucets."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Outdoor Faucet FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Providing Westfield families with expert exterior plumbing advice.
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
          <p className="text-steel mb-4">Have an outdoor plumbing emergency?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for Immediate Assistance: (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


