import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my electrical panel needs an upgrade?",
    answer: "Signs include frequent breaker trips, burning smells, sparking, buzzing sounds, warm outlets, or having a 60-amp panel in a modern home. If you're experiencing any of these issues, contact us for a professional inspection."
  },
  {
    question: "How long does an electrical panel upgrade take?",
    answer: "Most residential panel upgrades can be completed in one day. The timeline depends on the complexity of your existing system and the type of new panel being installed. Our technicians will provide a more accurate timeframe during your estimate."
  },
  {
    question: "Do I need a permit for an electrical panel upgrade?",
    answer: "Yes, electrical panel upgrades require permits in Seward, Nebraska. We handle all permit requirements as part of our service, ensuring your upgrade meets all local codes and passes inspection."
  },
  {
    question: "What amperage panel do I need?",
    answer: "Most modern homes require at least 150-200 amp panels. The exact amperage depends on your home's size, electrical appliances, and future plans. We'll calculate your specific needs during our assessment."
  },
  {
    question: "Can I stay in my home during the panel upgrade?",
    answer: "Yes, you can remain in your home during the upgrade. There will be brief periods where power is disconnected while we connect the new panel, but we work efficiently to minimize these interruptions."
  },
  {
    question: "Will my insurance cover the panel upgrade?",
    answer: "Some insurance policies may cover panel upgrades if they're required due to safety issues or if you're experiencing claims related to electrical problems. Check with your insurance provider for specific coverage details."
  },
  {
    question: "What brands of electrical panels do you install?",
    answer: "We install top-quality panels from trusted manufacturers like Square D, Siemens, GE, and Eaton. We'll recommend the best option based on your specific needs, budget, and local code requirements."
  },
  {
    question: "Do you offer financing for panel upgrades?",
    answer: "Yes, we offer financing options for qualified customers. Panel upgrades are an important safety investment, and we work with local financing partners to make them more affordable."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Electrical Panel Upgrade FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about electrical panel services in Seward, NE.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-blue-600 py-4">
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
