import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you handle charred logs without compromising the cabin's structure?",
    answer: "We use a combination of media blasting (typically crushed glass or corn cob) and careful hand-sanding to remove charred layers while preserving the healthy wood beneath. Our structural engineers then assess each log to determine if it needs reinforcement or replacement with a matching timber species."
  },
  {
    question: "Can you actually get the smoke smell out of porous log walls?",
    answer: "Yes. Logs are highly porous and soak up smoke like a sponge. We use a multi-step detoxification process including HEPA vacuuming, thermal fogging to open wood pores and neutralize odors, and deep-penetrating encapsulates that seal any remaining microscopic scent particles."
  },
  {
    question: "Do you repair the chinking between the logs after a fire?",
    answer: "Absolutely. Fire and high heat often cause chinking and caulking to crack or melt. Part of our restoration process is removing damaged seals and re-applying high-performance chinking that restores the cabin's thermal envelope and aesthetic appeal."
  },
  {
    question: "Is it safe to live in a log cabin immediately after fire cleanup?",
    answer: "We don't recommend occupancy until all soot is removed and air quality testing is completed. Soot contains toxic compounds that can be harmful if inhaled. We use industrial air scrubbers to ensure the indoor air is safe before cleared for re-entry."
  },
  {
    question: "Will my insurance cover the cost of log cabin restoration?",
    answer: "Most homeowner policies cover fire damage. However, log home claims can be complex due to the specialized nature of the repairs. We provide detailed, line-item estimates and photo documentation to help your insurance adjuster understand the unique costs associated with log restoration."
  },
  {
    question: "What is media blasting and why is it used for cabins?",
    answer: "Media blasting is a process where compressed air is used to propel biodegradable materials against the logs. It's the most effective way to remove fire damage, old stain, and soot from the irregular surfaces of log walls without causing the pitting or damage that high-pressure water might cause."
  },
  {
    question: "Do you restore log homes affected by Montana wildfires?",
    answer: "Yes. Wildfire damage often involves lower heat but heavy soot and ash accumulation. We specialize in deep-cleaning logs exposed to prolonged wildfire smoke, ensuring that the acrid smell is completely removed from the wood fibers."
  },
  {
    question: "How long does a typical log cabin fire restoration take?",
    answer: "Timelines vary based on damage, but a typical restoration ranges from 3 to 8 weeks. This allows for proper cleaning, structural repairs, drying after media blasting, and the re-application of protective stains and chinking."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Log Cabin Fire Restoration FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about restoring fire-damaged log homes in Whitefish and the surrounding mountain areas.
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
