import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I really need a dedicated electrician for my hot tub?",
    answer: "Yes. Most hot tubs require a dedicated 220V/50-60 amp circuit, which is a significant load. Improper wiring can lead to frequent breaker trips, damage to the spa's sensitive electronics, or even electrical fires. A licensed electrician ensures the safety of your family and the longevity of your investment."
  },
  {
    question: "What is a GFCI disconnect and why is it required?",
    answer: "A GFCI (Ground Fault Circuit Interrupter) disconnect is a safety switch installed within sight of the hot tub but at least 5 feet away. It instantly shuts off power if it detects a leak of electrical current to ground, preventing fatal shocks in wet environments. It is a strict requirement for all hot tub installations."
  },
  {
    question: "How deep does the conduit need to be buried?",
    answer: "According to the National Electrical Code (NEC), PVC conduit for hot tub wiring must generally be buried at least 18 inches deep. In Signal Mountain's rocky soil, this can be challenging, which is why hiring local experts who know the terrain and have the right equipment is essential."
  },
  {
    question: "Can I use my existing 110V outdoor outlet for a hot tub?",
    answer: "Only if the hot tub is specifically marketed as a 'Plug-and-Play' model. However, these models often cannot run the heater and the pumps at high speed simultaneously. Most full-sized hot tubs require a permanent 220V/240V hookup for optimal performance."
  },
  {
    question: "What is 'bonding' and why is it different from grounding?",
    answer: "Grounding provides a path for fault current to return to the panel. Bonding connects all metal components (like handrails or adjacent metal structures) together to ensure they stay at the same electrical potential, preventing 'stray voltage' shocks when touching both water and metal."
  },
  {
    question: "How long does it take to wire a new hot tub?",
    answer: "A typical installation on Signal Mountain usually takes 4 to 6 hours, depending on the distance from your main electrical panel to the tub location and the complexity of the trenching required."
  },
  {
    question: "Do you pull the necessary permits for the work?",
    answer: "Yes. We handle all necessary electrical permits with the Town of Signal Mountain or Walden and ensure that an inspector verifies the installation for your peace of mind and insurance compliance."
  },
  {
    question: "Will my current electrical panel support a new hot tub?",
    answer: "We perform a load calculation of your existing electrical service during our initial audit. If your panel is full or maxed out, we can provide options for a sub-panel or a main service upgrade to support your new spa safely."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Hot Tub Wiring FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about safely powering your spa or hot tub in Signal Mountain, TN.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-cyan-600">
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
