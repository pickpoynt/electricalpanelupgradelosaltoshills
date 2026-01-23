import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if I have mold in my Josephine attic?",
    answer: "Common signs include a persistent musty smell, dark staining on roof sheathing, visible black or white growth on joists, or an increase in allergy symptoms when the HVAC is running."
  },
  {
    question: "Is attic mold dangerous to my family?",
    answer: "Yes. Mold spores can easily travel from the attic into your living spaces through gaps in lighting fixtures and attic hatches. This can cause respiratory issues, especially in children and the elderly."
  },
  {
    question: "Why did mold grow in my attic specifically?",
    answer: "In Josephine, attic mold is usually caused by excessive humidity trapped by poor ventilation, roof leaks, or bathroom exhaust fans that are improperly vented directly into the attic space."
  },
  {
    question: "How long does the mold remediation process take?",
    answer: "Most Josephine attic projects are completed within 2 to 4 days, depending on the square footage and the severity of the mold colonization."
  },
  {
    question: "Will the mold come back after remediation?",
    answer: "Not if the moisture source is addressed. Part of our service includes identifying and recommending fixes for ventilation or leak issues to ensure your attic remains dry and mold-free."
  },
  {
    question: "Do you offer free mold inspections in Josephine?",
    answer: "We offer professional assessments for homeowners in Josephine and the surrounding Collin County areas to determine the extent of mold growth and provide a detailed remediation plan."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Attic Mold FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert answers for mold recovery in Josephine, TX.
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
          <p className="text-steel mb-4">Concerned about mold in your Josephine attic?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for a Certified Inspection: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
