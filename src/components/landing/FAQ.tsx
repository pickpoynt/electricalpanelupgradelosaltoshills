import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I really need a dedicated circuit for my patio heaters?",
    answer: "Yes. Most electric patio heaters draw between 1,500 and 6,000 watts. A standard household outlet cannot handle this load. Running heaters on shared circuits will trip breakers and create a fire hazard. We install dedicated 240V circuits to handle the load safely."
  },
  {
    question: "Are electric patio heaters better than propane?",
    answer: "Electric infrared heaters are generally preferred for permanent installations. They are about 90% efficient, don't require heavy tank replacements, and aren't affected by wind like gas flames. They also provide a much cleaner, more consistent heat."
  },
  {
    question: "Can you install heaters on a wooden pergola or ceiling?",
    answer: "Yes, but it requires strict adherence to 'clearance to combustible' requirements. We use specialized mounting brackets and sometimes heat shields to ensure the heater is safely distanced from the wood while still providing optimal warmth."
  },
  {
    question: "How do you control the heat level?",
    answer: "We offer several control options. Basic systems use on/off switches, while more advanced setups use 'infinitely variable' regulators or multi-stage switches that allow you to set the heat at 25%, 50%, or 100% power."
  },
  {
    question: "Can I connect my patio heaters to my smart home system?",
    answer: "Absolutely. We can integrate your heating system with Lutron, Control4, Savant, or mobile apps. This allows you to turn on the heat before you even step outside or ensure everything is shut off automatically at night."
  },
  {
    question: "What is the best height to mount patio heaters?",
    answer: "For most residential applications, we recommend mounting heaters between 7 and 9 feet high. This provides the best balance of heat coverage and safety. We'll consult with you to find the 'sweet spot' for your specific furniture layout."
  },
  {
    question: "How do your installations handle Fair Haven's coastal air?",
    answer: "We use marine-grade stainless steel hardware and NEMA-rated weatherproof enclosures for all switches and controls. We also apply anti-corrosion treatments to electrical terminals to prevent salt air degradation."
  },
  {
    question: "Do you handle the permitting for the new electrical work?",
    answer: "Yes, we are fully licensed in NJ and handle the entire permitting and inspection process with the Fair Haven building department to ensure your installation is fully legal and safe."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Patio Heater Wiring FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about powering luxury outdoor heating systems in Fair Haven, NJ.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
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

