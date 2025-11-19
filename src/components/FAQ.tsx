import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator, Home, Handshake, DollarSign, Clipboard } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      icon: Calculator,
      question: "What's the total cost including installation?",
      answer:
        "Homes start at $39,950 for the structure. Installation, delivery, and site preparation are quoted separately based on your location and site conditions. We'll provide a complete cost estimate for your property.",
    },
    {
      icon: Home,
      question: "Are these homes built for permanent living?",
      answer:
        "Yes. Every Foldäbl home is built to Australian building standards using quality materials. These are permanent structures designed for long-term living, not temporary dwellings.",
    },
    {
      icon: Handshake,
      question: "What happens after installation?",
      answer:
        "You'll receive full warranty details and documentation at handover. Our team and installation partners remain available to answer questions and help with any post-installation needs.",
    },
    {
      icon: DollarSign,
      question: "Can I finance my Foldäbl home?",
      answer:
        "Yes. We work with finance partners who offer payment plans from approximately $82/week to approved buyers. We can connect you with the right financing option for your situation.",
    },
    {
      icon: Clipboard,
      question: "Will councils approve these homes?",
      answer:
        "Foldäbl homes meet Australian building standards and look like quality modern homes. When applications are prepared properly, councils are typically supportive. We guide you through the approval process and help with positioning, setbacks, and design choices.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-section-6">
      <div className="container mx-auto">
        <div className="max-w-[1100px] mx-auto">
          {/* Heading block */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            {/* Intro line */}
            <p className="text-muted-foreground text-[16px] leading-[1.6] sm:text-lg md:text-xl mb-4 max-w-[700px] mx-auto">
              Got questions? We've got answers.
            </p>
            
            {/* Headline */}
            <h2 className="text-primary font-bold text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion cards */}
          <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="touch-manipulation bg-card rounded-xl shadow-md hover:shadow-lg 
                           transition-all duration-300 p-6 border border-gray-100"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-0 [&>svg]:text-accent [&>svg]:min-w-[20px]
                               text-primary font-semibold text-[19px] leading-[1.3] sm:text-xl md:text-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <faq.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="pt-3 sm:pt-4 pl-13 text-muted-foreground text-[15px] leading-relaxed sm:text-base"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
        </div>
      </div>
    </section>
  );
};
