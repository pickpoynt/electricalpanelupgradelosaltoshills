import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ozone treatment remove smoke odor from upholstery?",
    answer: "Ozone (O₃) is a powerful oxidizing agent that chemically bonds with smoke particles at the molecular level, breaking them down completely. We seal the treatment area, run industrial ozone generators for calculated cycles, and the O₃ molecules penetrate deep into upholstery fibers, cushion foam, and wooden frames—destroying odor-causing compounds rather than just masking them. This is the most effective method for permanent smoke odor elimination."
  },
  {
    question: "Can you remove wildfire smoke smell from my furniture?",
    answer: "Absolutely. Wildfire smoke is particularly challenging because it contains fine particulate matter that penetrates deeply into fabrics. We use a multi-step process: first, HEPA vacuuming to remove surface particles; second, hot water extraction with specialized smoke-damage cleaning agents; third, thermal fogging to neutralize embedded odors; and finally, ozone treatment for complete molecular-level elimination. We've successfully restored hundreds of homes affected by Montana wildfire seasons."
  },
  {
    question: "How long does the smoke odor removal process take?",
    answer: "For typical upholstered furniture (sofa, loveseat, chairs), the complete process takes 2-4 days. This includes initial cleaning (4-6 hours), drying time (12-24 hours), thermal fogging (2-3 hours), and ozone treatment cycles (24-48 hours depending on severity). We can't rush the process—each step must be completed properly to ensure 100% odor elimination. However, we offer same-day emergency response to begin work immediately."
  },
  {
    question: "Is ozone treatment safe for my upholstery fabrics?",
    answer: "Yes, when performed by trained professionals. Ozone doesn't damage fabrics, leather, or wood when used at proper concentrations and exposure times. We evacuate the space during treatment (no people or pets), carefully calculate the ozone levels based on room size and damage severity, and ventilate thoroughly afterward. Our IICRC-certified technicians follow strict safety protocols to protect both your furniture and your family."
  },
  {
    question: "Will insurance cover smoke odor removal from upholstery?",
    answer: "Most homeowner's insurance policies cover smoke damage restoration if it resulted from a covered event (house fire, fireplace malfunction, etc.). We provide detailed documentation including photos, moisture readings, particle testing, and itemized treatment logs to support your claim. We work directly with adjusters throughout Flathead County and can help you navigate the claims process to maximize your coverage."
  },
  {
    question: "Can you remove smoke smell from leather furniture?",
    answer: "Yes, leather requires specialized treatment. Smoke particles sit on the surface and in the pores of leather. We use pH-balanced leather cleaners to remove surface residue, followed by conditioning to prevent drying and cracking. For embedded odors, we apply thermal fogging and controlled ozone treatment. Leather is actually easier to restore than fabric because it's less porous, but it requires specific products to avoid damage."
  },
  {
    question: "What if the smoke smell comes back after treatment?",
    answer: "When done properly, smoke odor removal is permanent—the ozone destroys odor molecules completely. If smell returns, it usually means there's a hidden source we missed (smoke in HVAC ducts, walls, or subflooring). We offer a satisfaction guarantee: if odor returns within 30 days, we'll return to identify and treat the source at no additional charge. In 15+ years serving Whitefish, we've had a 100% success rate with our complete treatment protocol."
  },
  {
    question: "Do you offer same-day service in Whitefish and Flathead County?",
    answer: "Yes, we provide same-day emergency response throughout Whitefish, Columbia Falls, Kalispell, and all of Flathead County. After a fire, smoke particles continue penetrating deeper into upholstery fibers with each passing hour. The sooner we begin treatment, the easier and more effective the restoration. Call us at (380) 266-0944 and we'll have a certified technician at your property within hours to assess the damage and begin the cleaning process."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Smoke Odor Removal FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about our smoke odor removal and upholstery restoration services in Whitefish, MT.
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
