import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you really cheaper than other electricians in Brevard?",
    answer: "Yes! We offer genuinely competitive pricing by operating efficiently and passing savings directly to customers. We publish our base rates, provide detailed written quotes, and avoid hidden fees. Our overhead is lower because we're local and focused on volume rather than premium pricing."
  },
  {
    question: "Does affordable mean lower quality work?",
    answer: "Absolutely not. Our electricians are fully licensed North Carolina professionals with proper insurance coverage. Affordable pricing comes from operational efficiency, not cutting corners. We follow all state codes and safety standards while keeping costs reasonable for Brevard families."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Brevard and all of Transylvania County, including Rosman, Cedar Mountain, Sapphire, and Lake Toxaway. We also serve parts of Jackson County and Henderson County when schedules permit. Being local helps us keep travel costs—and your prices—lower."
  },
  {
    question: "Do you charge for estimates?",
    answer: "Basic consultations and phone estimates are free. For complex projects requiring on-site assessment, we charge a small consultation fee that's credited toward your project if you hire us. This ensures serious inquiries while respecting your time and budget."
  },
  {
    question: "What's included in your pricing?",
    answer: "Our quotes include all materials, labor, permits (when required), and cleanup. No hidden trip charges, service fees, or overtime premiums during standard business hours. Emergency after-hours work is clearly priced upfront with no surprises."
  },
  {
    question: "How do you handle small jobs?",
    answer: "We don't penalize customers with minimum charges for small jobs. Whether it's replacing one outlet or upgrading an entire panel, you pay only for the work performed. This makes us ideal for Brevard residents who need occasional electrical work without breaking their budget."
  },
  {
    question: "Do you offer financing or payment plans?",
    answer: "Yes, we work with local financing partners to offer flexible payment options for larger projects. We also accept major credit cards and can structure payments for qualifying customers. Our goal is making quality electrical work accessible to every Brevard family."
  },
  {
    question: "What makes you different from big electrical companies?",
    answer: "We're locally owned and operated with deep roots in the Brevard community. We understand local housing challenges, work with local suppliers to reduce costs, and reinvest in our neighbors. Big companies have higher overhead and franchise fees that ultimately come out of your pocket."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Affordable Electrical Services FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about budget-friendly electrical work in Brevard, NC.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-green-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
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
