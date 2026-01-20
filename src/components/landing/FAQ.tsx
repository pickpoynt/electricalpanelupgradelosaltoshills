import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is my toilet wobbling?",
    answer: "A wobbly toilet is usually caused by a loose or broken flange, or an uneven subfloor. This instability can quickly compromise the wax ring seal, leading to hidden leaks and water damage."
  },
  {
    question: "Can I just tighten the bolts to stop a leak?",
    answer: "Overtightening bolts on a broken flange can actually crack the toilet base or further damage the flange. It's best to have a professional inspect the flange to ensure it's structurally sound before securing the bolts."
  },
  {
    question: "What is a closet flange?",
    answer: "A closet flange is the pipe fitting that connects your toilet to the drainage system and secures it to the floor. It's the foundation of your toilet's stability and seal."
  },
  {
    question: "How do I know if my flange is broken?",
    answer: "Common signs include a wobbly toilet, water seeping from the base, a persistent sewage smell, or floorboards that feel soft or bouncy around the toilet area."
  },
  {
    question: "Do you repair cast iron flanges?",
    answer: "Yes! We specialize in repairing all types of flanges, including old cast iron, PVC, and brass. We use modern repair kits that often eliminate the need for expensive pipe replacement."
  },
  {
    question: "How long does a flange repair take?",
    answer: "Most toilet flange repairs can be completed in 1.5 to 3 hours, depending on the condition of the subfloor and the type of repair required."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Toilet & Flange Repair FAQ – Tallahassee, FL
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get expert answers to common questions about wobbly toilets, broken flanges, and bathroom leak prevention in Florida's Capital City.
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
          <p className="text-steel mb-4">Still have questions?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
