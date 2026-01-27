import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is knob and tube wiring?",
    answer: "Knob and tube (K&T) was the standard wiring method from the 1880s to the 1940s. It uses ceramic 'knobs' to support wires and ceramic 'tubes' to protect them when passing through wood. It is an ungrounded, two-wire system that is not designed for modern electrical loads."
  },
  {
    question: "Is knob and tube wiring inherently dangerous?",
    answer: "While K&T wasn't dangerous when new, it is now reaching the end of its intended lifespan. The rubberized cloth insulation becomes brittle and flakes off, leaving bare wires. Additionally, it lacks a ground wire, which increases the risk of shocks and fires in modern electronics."
  },
  {
    question: "Can I just cover my old wiring with new insulation?",
    answer: "No. Knob and tube wiring is designed to dissipate heat into free air. If you cover it with fiberglass or spray foam insulation, the heat can build up and ignite the surrounding materials. Most building codes require K&T to be removed before insulation is added."
  },
  {
    question: "How do you replace wiring without cutting large holes in my historic walls?",
    answer: "We use specialized 'fishing' techniques. By accessing the home via the attic and crawlspace, we can pull new copper cables through the wall cavities using the old wiring as a guide or using flexible steel rods, resulting in minimal to no damage to your plaster."
  },
  {
    question: "Why does my insurance company care about my wiring?",
    answer: "Insurance companies view knob and tube as a high-risk fire hazard. Many carriers will refuse to issue a new policy or renew an existing one until the system is certified as removed or decommissioned by a licensed electrician."
  },
  {
    question: "How long does a full home rewiring project take?",
    answer: "For a typical historic Signal Mountain home, a full rewire usually takes between 5 to 10 working days, depending on the size and complexity. We work circuit by circuit to ensure you have power and lighting in essential areas throughout the process."
  },
  {
    question: "Do you provide electrical certifications for real estate transactions?",
    answer: "Yes. If you are buying or selling a home on Signal Mountain, we can perform a certified inspection and provide the necessary documentation for lenders and insurance companies regarding the status of the electrical system."
  },
  {
    question: "Will I need a new breaker panel as well?",
    answer: "In most cases, yes. Most K&T systems are connected to old fuse boxes or 60-amp panels. Modern safety standards require a 200-amp service with AFCI/GFCI breakers to properly protect your new wiring and support modern appliances."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Historic Wiring FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about replacing knob and tube wiring in Signal Mountain, TN.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-amber-600">
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

