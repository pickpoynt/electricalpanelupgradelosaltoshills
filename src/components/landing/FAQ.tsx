import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do I need a specialized marine electrician for my boat lift?",
    answer: "Regular residential wiring isn't designed for the constant moisture, salt air, and ground-fault risks of a waterfront environment. Marine electricians use specific materials like stainless steel hardware and special conduits to ensure longevity and safety that standard electricians might overlook."
  },
  {
    question: "How often should I have my boat lift electrical system inspected?",
    answer: "In Fair Haven's coastal environment, we recommend a professional electrical inspection at least once a year, preferably before the start of the primary boating season. We check for corrosion, tighten terminals, and test GFCI breakers to ensure everything is safe."
  },
  {
    question: "Can my existing manual boat lift be upgraded to wireless remote control?",
    answer: "Absolutely. In most cases, we can retrofit your existing motor setup with a modern wireless control box. This adds convenience and safety, allowing you to operate the lift from the boat or the dock."
  },
  {
    question: "What is GFCI and why is it critical for my dock?",
    answer: "Ground Fault Circuit Interrupter (GFCI) protection is a life-safety device that shuts off power instantly if a leak to ground is detected. This is critical in marine environments to prevent electric shock drowning (ESD) and equipment damage."
  },
  {
    question: "How do I know if my boat lift motor is failing?",
    answer: "Common signs include humming without movement, slow lifting, intermittent operation, or visible corrosion on the housing. If you notice any of these, it's best to call us before the motor burns out completely."
  },
  {
    question: "Does the saltwater in the Navesink River affect my wiring?",
    answer: "Yes, the salt air and occasional spray can cause rapid oxidation of copper and aluminum. We use tinned copper wiring and sealed connections to resist this corrosion and ensure your system lasts for years."
  },
  {
    question: "Are your boat lift services compliant with local Fair Haven codes?",
    answer: "Yes, all our work is performed to the latest National Electrical Code (NEC) standards, specifically Article 555 which covers Marinas, Boatyards, and Floating Buildings, ensuring safety and compliance."
  },
  {
    question: "Do you offer emergency repairs for stuck boat lifts?",
    answer: "Yes, we provide 24/7 emergency services. If your boat is stuck Up or Down due to an electrical failure, call us immediately at (844) 901-2684 for rapid assistance."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Boat Lift Electrical FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about boat lift maintenance, safety, and electrical services in Fair Haven, NJ.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-blue-600">
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

