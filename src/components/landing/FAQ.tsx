import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why should I hardwire my smoke detectors instead of just using batteries?",
    answer: "Hardwired smoke detectors are interconnected, meaning if one alarm detects smoke in the basement, every alarm in the house will sound. This provides crucial extra time to escape, especially if a fire starts in a remote part of the home like a garage or attic. Additionally, hardwired units are powered by your home's electrical system, reducing reliance on battery replacement."
  },
  {
    question: "How often should smoke detectors be replaced?",
    answer: "According to NFPA guidelines, smoke detectors should be replaced every 10 years from the date of manufacture. Even if they still 'beep' when tested, the internal sensors degrade over time and become less effective at detecting smoke particles."
  },
  {
    question: "Do I need a smoke detector in every room?",
    answer: "Current fire codes require smoke detectors in every sleeping room, outside every separate sleeping area, and on every level of the home, including the basement. In Signal Mountain, local codes also strongly recommend heat detectors in garages and CO detectors near all fuel-burning appliances."
  },
  {
    question: "What is the difference between ionization and photoelectric sensors?",
    answer: "Ionization sensors are generally more responsive to flaming fires, while photoelectric sensors are better at detecting smoldering fires. For the best protection, we install dual-sensor technology that combines both types of detection in every hardwired unit."
  },
  {
    question: "Where should Carbon Monoxide detectors be installed?",
    answer: "CO detectors should be installed on every level of the home and specifically near sleeping areas. CO is nearly the same weight as air and mixes evenly, so they should be mounted where they won't be blocked by furniture or curtains."
  },
  {
    question: "Why is my hardwired smoke detector chirping?",
    answer: "Chirping usually indicates a low backup battery, a power surge/interruption, or that the unit has reached the end of its 10-year lifespan. If replacing the battery doesn't stop the chirping, the unit likely needs to be replaced by a professional to ensure the hardwired circuit is still intact."
  },
  {
    question: "Can you interconnect old smoke detectors with new ones?",
    answer: "It is generally not recommended to mix brands or significantly different generations of alarms, as they may not communicate properly during an emergency. We recommend replacing all units at once to ensure a fully compatible, synchronized system."
  },
  {
    question: "Will my hardwired alarms work during a power outage?",
    answer: "Yes, provided they have a working backup battery. We install detectors with 10-year sealed lithium battery backups that automatically take over if the main electrical power is lost during a mountain storm or grid failure."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Life Safety & Smoke Alarm FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about keeping your Signal Mountain home safe with professional fire detection.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-red-600">
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
