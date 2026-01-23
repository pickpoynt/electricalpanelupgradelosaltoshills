import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you respond to a toilet overflow emergency in Timnath?",
    answer: "We guarantee a 30-minute response time for all toilet overflow emergencies in Timnath and surrounding Larimer County areas. Our team is on call 24/7, including weekends and holidays. We understand that sewage emergencies can't wait, and every minute counts in preventing further damage and health risks."
  },
  {
    question: "Is toilet overflow water really that dangerous?",
    answer: "Yes. Toilet overflow water is classified as Category 3 'Black Water'—the most contaminated water category. It contains harmful bacteria like E. coli, viruses, parasites, and other pathogens that can cause serious illness. This is why professional cleanup with EPA-approved antimicrobial treatments is essential, not optional. DIY cleanup puts your family's health at risk."
  },
  {
    question: "Will my homeowner's insurance cover toilet overflow damage?",
    answer: "Most homeowner's insurance policies cover sudden and accidental toilet overflow damage, including water extraction, structural drying, and restoration. We work directly with all major insurance companies and can help you navigate the claims process. We'll document everything with photos and moisture readings to support your claim."
  },
  {
    question: "How long does the toilet overflow restoration process take?",
    answer: "The timeline depends on the extent of damage, but most residential toilet overflow restorations take 3-7 days. Emergency extraction happens immediately (within 30 minutes). Structural drying typically takes 2-4 days with our commercial equipment. Final restoration (flooring, drywall, paint) takes another 2-3 days. We monitor moisture levels daily to ensure complete drying before restoration begins."
  },
  {
    question: "Can I just clean up a toilet overflow myself?",
    answer: "We strongly advise against DIY cleanup for toilet overflows. Sewage water contains dangerous pathogens that require professional-grade disinfection. Additionally, water seeps into subfloors, wall cavities, and behind baseboards within minutes—areas you can't reach with household equipment. Our thermal imaging cameras and truck-mounted extractors find and remove water that DIY methods miss, preventing mold growth and structural damage."
  },
  {
    question: "What's the difference between your service and a regular plumber?",
    answer: "Plumbers fix the toilet and stop the overflow. We handle everything that happens after—the water damage restoration. We extract contaminated water, dry structural materials, apply antimicrobial treatments, remove damaged flooring and drywall, and restore your bathroom to pre-loss condition. Many plumbers will refer you to us for the cleanup and restoration portion."
  },
  {
    question: "Do you handle sewage cleanup from main line backups too?",
    answer: "Absolutely. We're certified for all Category 3 water cleanup, including main sewer line backups, septic system overflows, and toilet malfunctions. Our team has specialized training in biohazard handling and uses hospital-grade disinfectants to ensure your home is safe after any sewage event."
  },
  {
    question: "How do you prevent mold after a toilet overflow?",
    answer: "Mold prevention starts with rapid response and thorough drying. We arrive within 30 minutes to extract water before it spreads. Our commercial dehumidifiers and air movers create optimal drying conditions, and we monitor moisture levels every 24 hours with professional meters. Once dry, we apply EPA-approved antimicrobial treatments to all affected surfaces. We also use HEPA air filtration during the entire process to capture mold spores."
  },
  {
    question: "What areas of Larimer County do you serve?",
    answer: "We're based in Timnath and serve all of Larimer County, including Fort Collins, Windsor, Loveland, Wellington, and surrounding areas. Our 30-minute response time guarantee applies to Timnath and immediate surrounding communities. For other Larimer County locations, we typically arrive within 45-60 minutes."
  },
  {
    question: "What should I do immediately after a toilet overflow while waiting for you?",
    answer: "First, stop the water source if possible (turn off the toilet's water supply valve). Keep people and pets away from the contaminated area. Don't walk through sewage water as it spreads contamination. If safe to do so, remove valuable items from the affected area. Don't attempt to clean it yourself—you'll need professional disinfection. Call us immediately at (380) 266-0944, and we'll walk you through any additional steps while we're en route."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Toilet Overflow Emergency FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about toilet overflow damage, sewage cleanup, and our emergency restoration process in Timnath.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-copper">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
