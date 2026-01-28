import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What size exhaust fan do I need for my bathroom?",
    answer: "The general rule is 1 CFM per square foot of bathroom space, with a minimum of 50 CFM. However, for bathrooms larger than 100 sq ft, or those with jetted tubs, steam showers, or separate toilet enclosures, you'll need higher CFM ratings. We calculate the exact requirements based on your specific bathroom layout and features."
  },
  {
    question: "Why is my current exhaust fan so loud?",
    answer: "Older exhaust fans typically have louder motors, and noise levels weren't a priority in their design. Modern fans are rated in 'sones'—the lower the sone rating, the quieter the fan. We install fans rated as low as 0.3 sones, which is barely audible. If your current fan rattles or vibrates, it may also indicate a worn motor or loose mounting."
  },
  {
    question: "Can my exhaust fan vent into the attic?",
    answer: "Absolutely not—and this is a very common mistake we fix regularly. Venting into the attic dumps all that warm, moist bathroom air directly into your attic space, causing mold growth, wood rot, and damaged insulation. We always vent exhaust fans directly to the exterior through a roof cap or wall vent."
  },
  {
    question: "What's the difference between humidity-sensing and timer fans?",
    answer: "Timer fans run for a set period after you turn them off (usually 5-60 minutes adjustable). Humidity-sensing fans automatically detect moisture levels and turn on/off accordingly—no user action required. Humidity-sensing fans are ideal for rental properties, kids' bathrooms, or anyone who forgets to use the fan."
  },
  {
    question: "How long should I run my bathroom exhaust fan?",
    answer: "For best results, run your exhaust fan during your shower and for 20-30 minutes afterward. This allows enough time to remove residual moisture from the air. Humidity-sensing fans handle this automatically, while timer switches can be set to the appropriate run time."
  },
  {
    question: "Do I need an electrician to install an exhaust fan?",
    answer: "Yes, for proper and safe installation. Exhaust fan installation involves electrical wiring connections, potentially running new circuits, and ensuring proper grounding. In Arkansas, electrical work must be performed by licensed electricians to meet code requirements and maintain your homeowner's insurance coverage."
  },
  {
    question: "Can you install an exhaust fan where there isn't one currently?",
    answer: "Yes, we frequently install exhaust fans in bathrooms that never had them. This involves cutting a ceiling opening, running electrical wiring, and installing ductwork to the exterior. While more involved than a simple replacement, it's absolutely doable in most homes and makes a tremendous difference in moisture control."
  },
  {
    question: "How much does bathroom exhaust fan installation cost in Cave Springs?",
    answer: "A straightforward replacement of an existing fan typically ranges from $150-$300 including the fan. New installations requiring ductwork and electrical runs range from $300-$600+. Premium fans with advanced features cost more. We provide detailed quotes after assessing your specific situation—no surprises."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Bathroom Exhaust Fan FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about bathroom ventilation and exhaust fan installation in Cave Springs, Arkansas.
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
