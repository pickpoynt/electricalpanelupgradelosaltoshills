import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you permanently remove water damage smells?",
    answer: "We use industrial-grade hydroxyl generators and ozone machines that neutralize odor-causing bacteria and mold spores at the molecular level, rather than just masking them with perfumes."
  },
  {
    question: "Is odor removal safe for my family and pets?",
    answer: "Yes. While ozone treatment requires the home to be empty during the process, our hydroxyl technology is completely safe for people and pets and can be used while you remain in your Iowa Colony home."
  },
  {
    question: "Will the musty smell return after you leave?",
    answer: "No. Because we treat the source of the odor (bacteria and organic compounds) rather than the symptoms, the smell is permanently eliminated once the moisture issue has been resolved."
  },
  {
    question: "Can you remove odors from furniture and carpets?",
    answer: "Absolutely. Vaporized deodorization and thermal fogging allow us to reach deep into porous materials like upholstery, curtains, and carpets to remove trapped odors."
  },
  {
    question: "How long does the odor removal process take?",
    answer: "Most Iowa Colony homes can be fully deodorized within 12 to 24 hours, depending on the severity of the water damage and the total square footage."
  },
  {
    question: "Does my insurance cover odor removal?",
    answer: "In most cases, yes. If the odor is a result of a covered water damage claim, the cost of professional deodorization is typically included. We provide all necessary documentation for your Brazoria County claim."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Odor Removal FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert answers for air quality recovery in Iowa Colony, TX.
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
          <p className="text-steel mb-4">Have questions about a persistent smell in Iowa Colony?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call our Air Quality Experts: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
