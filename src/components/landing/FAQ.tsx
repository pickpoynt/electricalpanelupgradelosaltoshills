import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a neutral wire for smart switches?",
    answer: "Historically, most smart switches required a neutral wire to power their Wi-Fi or Zigbee radio. However, many Signal Mountain homes built before the 1980s lack neutrals at the switch box. We offer specialized solutions like Lutron Caséta that work perfectly without a neutral wire, or we can retrofit a neutral wire if desired."
  },
  {
    question: "Will smart switches work with my existing light bulbs?",
    answer: "Most smart switches are compatible with modern dimmable LEDs, incandescents, and halogens. However, low-quality LEDs may flicker when dimmed by certain smart switches. We recommend using high-quality dimmable LED bulbs and can provide advice on the best brands for your specific setup."
  },
  {
    question: "Can I control my lights when I'm away from home?",
    answer: "Absolutely. One of the primary benefits of smart switches is remote access. Once integrated with your home's Wi-Fi or a bridge, you can use a smartphone app to check status, turn lights on/off, or adjust brightness from anywhere with an internet connection."
  },
  {
    question: "Do smart switches work if the Wi-Fi goes down?",
    answer: "Yes. Smart switches still function as regular physical switches. If your Wi-Fi is down, you can still walk to the wall and press the button to control the lights manually. Only remote app control and voice commands will be temporarily unavailable."
  },
  {
    question: "What is the difference between a smart bulb and a smart switch?",
    answer: "Smart bulbs are best for single lamps or specific color-changing needs. Smart switches are superior for general room lighting because they control the electrical circuit. This means you can still use the physical switch on the wall without 'killing' the smart functionality, which is a common frustration with smart bulbs."
  },
  {
    question: "Can you help set up voice control with Alexa or Google Home?",
    answer: "Yes! Part of our professional installation service is ensuring your new switches are properly paired with your preferred voice assistant and that your initial lighting 'scenes' and groups are configured for effortless voice control."
  },
  {
    question: "Are smart switches more secure than standard switches?",
    answer: "From a security standpoint, they allow for 'Vacation Mode' scheduling that makes your home look occupied even when you're away. From an electrical standpoint, they are high-quality UL-listed devices that meet all modern safety standards when installed by a professional electrician."
  },
  {
    question: "Can I automate my ceiling fans with smart switches?",
    answer: "Yes! There are dedicated smart switches designed specifically to control fan speeds. We can install these to provide app and voice control over your fans, separate from your lighting control."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Smart Home Lighting FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about modernizing your home lighting on Signal Mountain, TN.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-indigo-600">
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
