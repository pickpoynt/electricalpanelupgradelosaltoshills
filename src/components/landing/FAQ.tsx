import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why does smoke odor linger in my attic even after the fire is out?",
    answer: "Smoke contains microscopic particles of ash, tar, and carbon that are highly porous. These particles settle into attic insulation, wooden trusses, and roof decking. They also 'breathe'—expanding and contracting with Woodland Park's temperature changes—which releases the smell throughout the home unless professionally neutralized."
  },
  {
    question: "Do I need to replace my attic insulation after smoke exposure?",
    answer: "Not always. Depending on the severity of the smoke, we can often deodorize blown-in or fiberglass insulation using specialized fogging and HEPA vacuuming. However, in cases of heavy soot accumulation, removal and replacement are recommended to ensure complete odor elimination and moisture control."
  },
  {
    question: "What is thermal fogging and how does it work in an attic?",
    answer: "Thermal fogging involves heating a specialized deodorizer into a fine dry fog. The fog particles are similar in size to smoke molecules, allowing them to penetrate deep into wood pores and gaps where traditional cleaners can't reach. It chemically neutralizes the odor at its source rather than just masking it."
  },
  {
    question: "Is ozone treatment safe for my roof structure?",
    answer: "Yes, when performed by IICRC-certified professionals. Ozone (O3) is a powerful oxidizer that breaks down smoke molecules. We carefully control the concentration and duration to ensure it target odors without affecting the structural integrity of your roof or nails."
  },
  {
    question: "How long does the attic smoke removal process take?",
    answer: "Typically, a professional attic restoration in Woodland Park takes 2 to 4 days. This includes inspection, surface cleaning, insulation treatment, and the necessary cycles of thermal fogging or ozone treatment."
  },
  {
    question: "Can Woodland Park's altitude affect odor removal?",
    answer: "Yes, oxygen levels and air pressure at 8,400+ feet affect how gases disperse. Our team uses specialized equipment calibrated for high-altitude environments to ensure that our ozone and fogging treatments remain highly effective."
  },
  {
    question: "Will insurance cover attic smoke odor removal?",
    answer: "Most homeowner policies cover smoke damage restoration. We provide the detailed documentation, thermal imaging, and air quality testing results required by adjusters to justify the restoration process."
  },
  {
    question: "Is the attic treatment safe for my family and pets?",
    answer: "During active fogging or ozone treatment, the area must be vacated. However, once the cycles are complete and the space is ventilated, there are no harmful residues left behind—only clean, healthy air."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Attic Smoke Removal FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about removing fire and smoke damage from attic spaces in Woodland Park and Teller County.
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
