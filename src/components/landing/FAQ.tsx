import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I descale my tankless water heater?",
    answer: "For most Bellevue homes, we recommend once a year. If you have extremely hard water or a high-usage household, every 6-9 months may be necessary to prevent mineral buildup and maintain efficiency."
  },
  {
    question: "Do I really need a professional for this?",
    answer: "While DIY kits exist, a professional service includes critical safety checks that DIY kits miss. We inspect the heat exchanger for cracks, check the venting system for leaks, and clear any error codes in the system's memory."
  },
  {
    question: "Will descaling help with my low water pressure?",
    answer: "Yes! Mineral buildup inside the heat exchanger's narrow copper tubes is a common cause of declining hot water pressure. A thorough descaling often restores full pressure to your showers and faucets."
  },
  {
    question: "What happens if I don't descale my unit?",
    answer: "Over time, scale acts as an insulator, forcing your heater to run hotter and longer to heat water. This leads to higher gas bills, frequent 'E5' or 'LC' error codes, and eventually, a costly heat exchanger failure."
  },
  {
    question: "Is the descaling solution safe for my family?",
    answer: "Absolutely. We use a food-grade, biodegradable citric acid solution that is highly effective against scale but completely safe for your potable water system and the environment."
  },
  {
    question: "Do you service all tankless brands in Bellevue?",
    answer: "Yes. We are factory-trained to service all major brands including Navien, Rinnai, Noritz, Rheem, and Takagi. We carry the specific diagnostic tools for each manufacturer."
  },
  {
    question: "How long does a maintenance visit take?",
    answer: "A standard descaling and full system diagnostic typically takes about 60 to 90 minutes. We'll have your hot water back on before we leave."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Tankless Maintenance FAQ – Bellevue, WA
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get professional answers to common questions about tankless water heater descaling, maintenance intervals, and efficiency in Bellevue.
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
