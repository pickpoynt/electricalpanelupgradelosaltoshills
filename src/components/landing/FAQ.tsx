import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a weatherhead?",
    answer: "A weatherhead, also known as a service head or service mast, is the waterproof entry point where overhead power lines from the utility company enter your home's electrical system. It's designed to keep rain and snow out of your pipes and electrical panel."
  },
  {
    question: "Who is responsible for fixing a damaged service mast?",
    answer: "Generally, the homeowner is responsible for the service mast, weatherhead, and the meter base attached to the house. The utility company (like PSO) is only responsible for the wires coming from the pole to the point of connection at the weatherhead."
  },
  {
    question: "My service mast is leaning after a storm. Is it dangerous?",
    answer: "Yes. A leaning mast indicates structural failure and puts immense tension on your electrical connections. It can also allow water to pour directly into your breaker box, creating a major fire and shock hazard."
  },
  {
    question: "Will the utility company reconnect my power if the mast is bent?",
    answer: "No. Utility companies will typically pull the meter or disconnect service if they see a damaged mast. They will require a licensed electrician to repair it and potentially a city inspection before they restore power."
  },
  {
    question: "How long does a weatherhead repair take?",
    answer: "Most emergency repairs can be completed in 3-5 hours. However, coordination with the utility company and local inspectors can add time to the overall restoration process."
  },
  {
    question: "Do you provide emergency service in Tulsa on weekends?",
    answer: "Yes. We offer 24/7 emergency response throughout the Tulsa metro area, including Broken Arrow, Jenks, and Owasso, because storm damage doesn't wait for Monday morning."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Weatherhead Repair FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Expert answers for Tulsa homeowners facing storm damage.
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
            href="tel:+18449012684"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (844) 901-2684
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
