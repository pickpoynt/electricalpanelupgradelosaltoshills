import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you arrive for a flood emergency in Iowa Colony?",
    answer: "We offer 24/7 emergency response and typically arrive on-site within 30 to 60 minutes for calls in Iowa Colony and surrounding areas of Brazoria County."
  },
  {
    question: "Do you work with my insurance company?",
    answer: "Yes, we work with all major insurance providers. We provide complete documentation, moisture maps, and photos to help streamline your claim process."
  },
  {
    question: "What should I do while waiting for the restoration team?",
    answer: "If it's safe, shut off the main water source and turn off electricity to the affected areas. Avoid walking through standing water if power is still on. If possible, move small valuable items to a dry location."
  },
  {
    question: "How long does the drying process usually take?",
    answer: "Most properties are completely dried within 3 to 5 days. Factors such as the extent of flooding and the type of materials (hardwood vs. carpet) can affect this timeline."
  },
  {
    question: "Is mold a concern after a flood?",
    answer: "Absolutely. Mold can begin to grow within 24-48 hours of water exposure. That's why professional extraction and high-speed drying are critical to preventing a secondary mold problem."
  },
  {
    question: "Can you restore personal items and documents?",
    answer: "We offer specialized content cleaning and document recovery services for many items. We will assess your belongings and advise on the best course of action for restoration."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Flood Restoration FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Providing Iowa Colony families with expert advice during property emergencies.
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
          <p className="text-steel mb-4">Have a flood restoration emergency?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call for Immediate Assistance: (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
