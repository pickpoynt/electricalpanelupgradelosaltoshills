import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is water damage in hoarding situations considered an emergency?",
    answer: "Water trapped beneath debris and stored items cannot evaporate, leading to rapid mold growth, biohazard contamination, and weight-related structural failure. Immediate professional extraction is vital in Bozeman."
  },
  {
    question: "How do you handle personal items during the restoration?",
    answer: "We use a compassionate triage system. We work with the family to identify critical items for recovery, cleaning and sanitizing everything that can be saved while managing the safe disposal of contaminated debris."
  },
  {
    question: "Are your technicians trained for biohazard cleanup?",
    answer: "Yes. Our Bozeman team is certified in biohazard remediation. We wear full personal protective equipment (PPE) and use EPA-approved antimicrobial agents to sanitize the home."
  },
  {
    question: "Can you help with insurance claims for hoarding house damage?",
    answer: "Absolutely. We provide comprehensive documentation, including detailed photos and moisture maps, to help justify the higher costs often associated with specialized hoarding restoration."
  },
  {
    question: "Is the cleanup process discrete?",
    answer: "We understand the privacy concerns of our clients. Our team maintains a high level of professionalism and discretion while working on your Bozeman property."
  },
  {
    question: "How long does it take to restore a hoarding home after water damage?",
    answer: "Due to the complexity of content sorting and decontamination, the process can take anywhere from 1 to 3 weeks, significantly longer than a standard water restoration project."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Hoarding Restoration FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert answers for complex water damage recovery in Bozeman, MT.
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
          <p className="text-steel mb-4">Need help with a complex restoration in Bozeman?</p>
          <a
            href="tel:+13802660944"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for a Private Consultation: (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
