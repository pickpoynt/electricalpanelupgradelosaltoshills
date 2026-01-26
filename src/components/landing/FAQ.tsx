import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of dock lights are best for Fair Haven's environment?",
    answer: "Given the brackish water and high humidity of the Navesink River, we recommend IP68-rated LED fixtures. Piling lights and underwater LEDs should be made of tinned copper and marine-grade stainless steel or high-impact composites to resist corrosion."
  },
  {
    question: "How long do LED dock lights typically last?",
    answer: "High-quality marine LED fixtures are rated for 50,000 hours or more. With proper professional installation and occasional maintenance to clean the lenses, your lighting system can provide a decade or more of reliable service."
  },
  {
    question: "Can I control my dock lights from my smartphone?",
    answer: "Yes! We specialize in smart marine lighting solutions. We can install smart controllers that allow you to turn lights on/off, set schedules, and even change colors (for RGB units) using an app on your phone."
  },
  {
    question: "Is underwater lighting safe for fish and marine life?",
    answer: "Yes, underwater LEDs are safe for marine life. In fact, many property owners find that green or blue underwater lights attract small fish and crustaceans, creating a beautiful natural aquarium effect right at your dock."
  },
  {
    question: "How do you protect the wiring from the elements?",
    answer: "We use marine-rated, double-jacketed cables and moisture-tight heat-shrink connectors. All wiring is run through UV-resistant marine-grade conduit or protected within the dock's structure to shield it from sun, salt, and physical damage."
  },
  {
    question: "Do dock lights require a lot of electricity?",
    answer: "Modern LED dock lighting is extremely energy efficient. A typical pier lighting system uses about 80% less energy than old halogen or incandescent bulbs, costing only a few dollars a month to operate."
  },
  {
    question: "Do you offer maintenance for existing dock lighting?",
    answer: "Yes, we provide maintenance and repair services for all types of dock lighting systems. We can troubleshoot wiring issues, replace old fixtures, and upgrade existing systems to LED or smart control."
  },
  {
    question: "Are your installations compliant with Fair Haven local codes?",
    answer: "Absolutely. All our work is performed to NEC Article 555 standards and local Fair Haven electrical codes, ensuring your dock is both beautiful and fully compliant with safety regulations."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Dock Lighting FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about professional marine lighting installation in Fair Haven, NJ.
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

