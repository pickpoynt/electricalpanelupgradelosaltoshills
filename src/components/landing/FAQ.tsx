import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does whole house surge protector installation cost?",
    answer: "Most whole-house surge protector installations in Cave Springs cost between $250-$500 including parts and labor. The price varies based on your panel type, the SPD brand selected, and any modifications needed for installation. We provide detailed quotes upfront so you know exactly what to expect."
  },
  {
    question: "Do I need a whole house surge protector if I have power strips?",
    answer: "Power strips only protect devices plugged directly into them—and even quality strips can't handle large surges from lightning strikes. Whole-house protection at your main panel provides a first line of defense for your entire home, including hardwired appliances like your HVAC, water heater, and range that can't use power strips."
  },
  {
    question: "How long does surge protector installation take?",
    answer: "Most whole-house surge protector installations are completed in 1-2 hours. Our electricians will briefly turn off your main power during installation, but the disruption is minimal. You'll have comprehensive surge protection for your entire home by the time we leave."
  },
  {
    question: "What brands of surge protectors do you install?",
    answer: "We install premium surge protection devices from trusted manufacturers including Eaton, Siemens, Square D, Leviton, and GE. We'll recommend the best option based on your panel type, protection requirements, and budget."
  },
  {
    question: "Do surge protectors wear out or need replacement?",
    answer: "Yes, surge protectors have a finite lifespan—they sacrifice themselves to protect your electronics. Most quality SPDs have indicator lights showing protection status. We recommend checking this light periodically and replacing the unit if it shows the protection is compromised, typically every 5-10 years or after a major surge event."
  },
  {
    question: "Will a surge protector protect against lightning strikes?",
    answer: "Whole-house surge protectors provide excellent protection against lightning-induced surges traveling through power lines. However, no surge protector can guarantee protection against a direct lightning strike to your home. Our installations significantly reduce the risk of damage from the vast majority of surge events."
  },
  {
    question: "Is a whole house surge protector worth it?",
    answer: "Absolutely. For a one-time investment of a few hundred dollars, you protect tens of thousands in electronics and appliances. The average home contains $15,000+ in electronics and appliances vulnerable to surge damage. A single surge event can destroy TVs, computers, refrigerators, and HVAC controls simultaneously."
  },
  {
    question: "Do you service all of Benton County?",
    answer: "Yes! While we're based in Cave Springs, we provide surge protector installation throughout Benton County including Bentonville, Rogers, Bella Vista, Centerton, Pea Ridge, and surrounding Northwest Arkansas communities."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Surge Protector Installation FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about whole house surge protection for Cave Springs homeowners.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-yellow-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
