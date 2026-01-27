import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you find a break in the floor heating cable without removing the tiles?",
    answer: "We use a combination of advanced resistance testing, TDR (Time Domain Reflectometry), and thermal imaging. This allows us to pinpoint the exact location of the 'open' or 'short' in the cable. In many cases, we only need to remove a single tile to perform a permanent repair."
  },
  {
    question: "Why is my heated floor thermostat showing a GFCI error?",
    answer: "A GFCI error (often 'GROUND FAULT' or 'ERR 01') means the system is detecting a leakage of current to ground. This is a safety feature. It could be caused by moisture, a damaged cable, or a faulty sensor. We diagnostic these issues safely to protect your home and family."
  },
  {
    question: "Can any electrician repair a radiant floor heating system?",
    answer: "Floor heating is a specialized branch of electrical work. Most general electricians don't have the sensitive ohm-meters or thermal cameras required to locate underground faults. Our team specifically trains on the leading radiant heat brands like Nuheat, Schluter, and SunTouch."
  },
  {
    question: "Can a faulty thermostat be the reason my floor is cold?",
    answer: "Yes, quite often. Thermostats can fail or lose their calibration over time. We can test the resistance of your floor sensor and the continuity of your heating mat to determine if the issue is in the controller or under the floor."
  },
  {
    question: "How long do heated floor systems typically last?",
    answer: "Most high-quality radiant heating cables are designed to last 20-30 years or more. If a system fails early, it's usually due to physical damage during installation or a faulty thermostat. Repairs are highly effective and can restore the full lifespan of your system."
  },
  {
    question: "Is it safe to repair a heated floor in a wet area like a shower?",
    answer: "Yes, provided the repair is done using manufacturer-approved waterproof splice kits and verified with high-voltage insulation testing. We ensure every repair in a wet environment meets or exceeds the original factory safety standards."
  },
  {
    question: "Do you serve all of Fair Haven and surrounding areas?",
    answer: "Yes, we provide expert floor heating repair throughout Fair Haven, NJ, as well as Rumson, Little Silver, Red Bank, and the wider Monmouth County area."
  },
  {
    question: "How long does a typical diagnostic and repair take?",
    answer: "A diagnostic visit usually takes 1-2 hours. If a fault is found, the localized tile removal and cable repair can often be completed in a single afternoon, depending on the complexity and location of the break."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Heated Floor Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about diagnosing and fixing radiant floor heating in Fair Haven, NJ.
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

