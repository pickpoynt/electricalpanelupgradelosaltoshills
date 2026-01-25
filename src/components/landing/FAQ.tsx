import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I just wash soot off my walls with soap and water?",
    answer: "We strongly advise against this. Soot is oily and washing it with water can smear it, pushing it deeper into the paint or wallpaper and creating permanent stains. We use specialized dry chemical sponges to lift the soot off the surface without smearing."
  },
  {
    question: "What is a furnace 'puff back' and can you clean it?",
    answer: "A furnace puff back occurs when an oil or gas burner misfires, sending a cloud of soot through your home's vents. This oily soot covers walls, ceilings, and furniture. Yes, we specialize in cleaning these massive soot deposits using industrial-grade degreasers and HEPA filtration."
  },
  {
    question: "How do you remove the smoke smell that comes with soot?",
    answer: "Soot particles trap odors. After we physically remove the soot, we use hydroxyl generators or ozone machines to break down the odor-causing molecules at the molecular level, ensuring your Sparta home smells fresh again."
  },
  {
    question: "Is soot dangerous to my health?",
    answer: "Yes, soot particles are microscopic and can be easily inhaled, leading to respiratory issues. It's important to have it removed professionally using HEPA vacuums that capture these fine particles rather than blowing them back into the air."
  },
  {
    question: "Do you work with homeowners insurance for soot damage?",
    answer: "Absolutely. Most fire and smoke damage, including furnace malfunctions, are covered by insurance. We provide detailed documentation and work directly with your adjuster to ensure your claim is handled efficiently."
  },
  {
    question: "How long does the soot removal process take?",
    answer: "It depends on the scope of the damage. A single room affected by a small fire might take a few hours, while a whole-house furnace puff back can take several days of meticulous cleaning. We provide a detailed timeline after our initial assessment."
  },
  {
    question: "Can you remove soot from textured ceilings?",
    answer: "Textured or 'popcorn' ceilings are challenging because they are fragile. We use specialized vacuums with soft brush attachments and very gentle cleaning techniques to remove soot without damaging the texture."
  },
  {
    question: "Should I stay in my home while the soot is being removed?",
    answer: "For minor soot, it's usually fine. However, in cases of significant smoke damage or large-scale soot deposits, the air quality may be poor. We can advise you on whether it's safe to stay during our initial inspection."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Soot Removal FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about soot cleaning and wall restoration in Sparta, WI.
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
