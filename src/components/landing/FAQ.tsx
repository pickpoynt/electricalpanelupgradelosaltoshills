import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly do you respond to basement flooding in Vail?",
    answer: "We provide 24/7 emergency response and typically arrive at properties in Vail and helping Eagle County areas within 45 minutes. We understand that mountain weather can be unpredictable, so our vehicles are equipped for severe winter conditions."
  },
  {
    question: "Do you work with homeowners insurance?",
    answer: "Yes, we work with all major insurance carriers. We provide detailed documentation, moisture mapping, and photos of the damage to support your claim. We can communicate directly with your adjuster to expedite the approval process."
  },
  {
    question: "Can you remove water from a finished basement without ruining it?",
    answer: "Our goal is to save as much of your property as possible. We use advanced water extraction mats and weighted systems to pull water from carpets and pads. For hardwood, we have specialized drying mats. However, in cases of severe damage or category 3 water (sewage), some materials may need to be removed for safety."
  },
  {
    question: "What causes basement flooding in Vail?",
    answer: "The most common causes we see in Vail are frozen pipe bursts during winter, rapid snowmelt in spring overwhelming foundation drains, and sump pump failures during power outages. We also handle flooding from appliance malfunctions like water heaters and washing machines."
  },
  {
    question: "How do you prevent mold growth after water removal?",
    answer: "Speed is key. We extract the standing water immediately and then set up industrial dehumidifiers and air movers to dry the structure. We also treat affected surfaces with antimicrobial agents to kill any existing bacteria and prevent mold spores from taking root."
  },
  {
    question: "My basement smells musty after a leak. can you help?",
    answer: "Yes, a musty odor indicates hidden moisture or mold growth. We use thermal imaging cameras and moisture meters to find the source. We also offer professional odor removal services using hydroxyl generators and ozone treatments (in unoccupied spaces) to neutralize smells at the molecular level."
  },
  {
    question: "Are your technicians certified?",
    answer: "Absolutely. Our team is IICRC certified in Water Damage Restoration (WRT) and Applied Structural Drying (ASD). We undergo regular training to stay updated on the latest restoration techniques and equipment, specifically for high-altitude mountain environments."
  },
  {
    question: "What should I do while waiting for you to arrive?",
    answer: "If safe, turn off the main water valve to stop the flow. Do not enter standing water if there is any risk of electrical shock. Move valuable items to a higher level if possible. Take photos of the damage for your insurance records. Stay clear of the affected area to avoid spreading contaminants."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Basement Water Removal FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about our emergency water extraction and restoration services in Vail, CO.
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
