import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you find a cut wire without digging up my yard?",
    answer: "We use specialized underground wire locators that send a frequency through the line. By following the signal with a handheld receiver, we can pinpoint the exact 'break' or 'nick' in the cable, allowing us to perform a surgical repair with minimal disruption to your landscape."
  },
  {
    question: "My lights are dim or flickering. What's wrong?",
    answer: "This is often a sign of 'voltage drop' or a poor connection. As systems age, connections can corrode, or the transformer might be overloaded. We test the voltage at each fixture and the transformer taps to identify and resolve the bottleneck."
  },
  {
    question: "Can you fix a landscape lighting system installed by another company?",
    answer: "Absolutely. We repair all major brands and types of low-voltage landscape lighting. Whether it was installed by a previous owner or another contractor, we can troubleshoot, repair, and optimize it."
  },
  {
    question: "Is it worth upgrading my old system to LED?",
    answer: "Yes, almost always. LED bulbs use 80% less energy and last years longer than halogen. Modern LEDs also provide much better color consistency. We can often retrofit your existing high-quality fixtures with high-performance LED 'drop-in' lamps."
  },
  {
    question: "Why do my landscape lights keep burning out?",
    answer: "This is usually caused by moisture entering the fixture or over-voltage issues from the transformer. Our repair process includes cleaning sockets, applying dielectric grease, and checking the transformer settings to ensure your bulbs reach their full rated lifespan."
  },
  {
    question: "What is preventative maintenance for landscape lighting?",
    answer: "Our maintenance service includes cleaning lenses, buried wire checks, tightening terminals, clearing debris around fixtures, and adjusting timers. This prevents small issues from becoming expensive repairs."
  },
  {
    question: "How often should I have my outdoor lighting serviced?",
    answer: "In Fair Haven's coastal environment, we recommend a professional tune-up at least once a year. The salt air and seasonal shifts can cause wires to move and connections to oxidize faster than inland areas."
  },
  {
    question: "Are your repairs warrantied?",
    answer: "Yes, we stand behind our workmanship. All our wiring repairs and new component installations come with a full satisfaction guarantee and comprehensive warranty."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Landscape Lighting Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about troubleshooting and fixing outdoor lighting systems in Fair Haven, NJ.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-green-600">
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

