import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly should I call after water damage occurs?",
    answer: "Immediately. The first 24-48 hours are critical. Water continues to spread through drywall and insulation, and mold can begin growing within 48 hours in Hudson's climate."
  },
  {
    question: "Can you save my water-damaged drywall or does it need replacement?",
    answer: "It depends on the severity and duration of exposure. Minor water damage can sometimes be dried and saved, but heavily saturated or contaminated drywall (from sewage or flooding) must be removed and replaced."
  },
  {
    question: "Will my insurance cover drywall water damage restoration?",
    answer: "Most Wisconsin homeowners policies cover sudden water damage from burst pipes, appliance leaks, and storm damage. We work directly with adjusters and provide detailed documentation to support your claim."
  },
  {
    question: "How do you ensure all the moisture is removed?",
    answer: "We use professional moisture meters and thermal imaging cameras to detect hidden water pockets. We monitor readings daily and don't consider the job complete until moisture levels return to normal ranges."
  },
  {
    question: "How long does the drying process take in Hudson?",
    answer: "Typically 3-5 days depending on the extent of damage, humidity levels, and temperature. Wisconsin winters can extend drying times, which is why we use industrial-grade dehumidifiers and air movers."
  },
  {
    question: "Can you match my existing wall texture and paint?",
    answer: "Yes. Our craftsmen are skilled in matching all common textures including orange peel, knockdown, and smooth finishes. We also color-match paint to ensure seamless blending with your existing walls."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Drywall Restoration FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert answers for water damage recovery in Hudson, WI.
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
          <p className="text-steel mb-4">Have water-damaged drywall in Hudson?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for Emergency Restoration: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
