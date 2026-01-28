import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my historic Signal Mountain home needs rewiring?",
    answer: "Key warning signs include: two-prong outlets throughout the home, a fuse box instead of a breaker panel, flickering lights, outlets that spark or feel warm, frequently tripped breakers or blown fuses, and visible cloth-wrapped or knob-and-tube wiring in the attic or basement. If your home was built before 1960 and hasn't been rewired, we recommend a professional electrical assessment."
  },
  {
    question: "What is knob-and-tube wiring and why is it dangerous?",
    answer: "Knob-and-tube wiring was the standard electrical installation method from about 1880 to 1940. It uses ceramic knobs to support individual wires running through open air spaces. While safe when installed, these systems are now dangerous because: they lack grounding protection, the rubber insulation has degraded, they weren't designed for modern electrical loads, and blown-in insulation touching the wires creates fire hazards. Most insurance companies refuse to cover homes with active knob-and-tube wiring."
  },
  {
    question: "Will rewiring damage my historic home's original features?",
    answer: "Not when done by experienced historic home electricians. We use specialized techniques including fishing wires through existing wall cavities, strategic access points in closets and attics, flexible conduit where needed, and careful patching that matches original materials. Our goal is to leave your plaster walls, crown molding, and hardwood floors looking untouched."
  },
  {
    question: "How long does it take to rewire a historic home on Signal Mountain?",
    answer: "The timeline depends on your home's size and complexity, but most whole-house rewiring projects take 5-10 business days. Factors that affect timing include: square footage, number of floors, wall construction type (plaster vs. drywall), extent of existing wiring issues, and any custom requirements. We provide a detailed timeline during your initial assessment."
  },
  {
    question: "Do I need to move out during the rewiring process?",
    answer: "In most cases, no. We work room by room and maintain power to occupied areas whenever possible. There may be brief periods when power to certain areas is shut off, but we coordinate these with you in advance. Most homeowners find they can continue living in their home during the rewiring project."
  },
  {
    question: "Will rewiring my historic home affect my insurance rates?",
    answer: "Actually, rewiring typically improves your insurance situation significantly. Many insurers either refuse to cover or charge premium rates for homes with knob-and-tube or cloth-wrapped wiring. After a complete rewiring, you should be eligible for standard rates and may even qualify for discounts. We provide all documentation needed for your insurance company."
  },
  {
    question: "What does a complete rewiring project include?",
    answer: "Our comprehensive rewiring includes: removal of all outdated wiring, installation of new NM (Romex) or MC cable throughout, panel upgrade to 200-amp service, proper grounding and bonding, GFCI protection where required, arc-fault protection on bedroom circuits, new outlets and switches as needed, and all required permits and inspections. We also offer optional upgrades like whole-house surge protection and smart home pre-wiring."
  },
  {
    question: "How much does it cost to rewire a historic home in Signal Mountain?",
    answer: "Cost varies based on your home's size, age, construction, and specific requirements. A typical 2,000 square foot historic home might range from $15,000 to $25,000 for complete rewiring including panel upgrade. We provide detailed, itemized estimates after a thorough assessment. Remember that this is an investment in safety, insurance compliance, and home value—rewiring often increases property values significantly."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Historic Home Rewiring FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about rewiring vintage and historic homes in Signal Mountain, TN.
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
