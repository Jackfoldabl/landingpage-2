import { Quote, ArrowRight, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const testimonials = [
    {
      text: "Foldäbl took care of everything—from approvals to installation. The whole process was smooth and stress-free.",
      author: "Sarah M",
      location: "NSW",
    },
    {
      text: "The finance option made it possible for us to build. We went from first contact to finished home in just a few months.",
      author: "Lisa C",
      location: "VIC",
    },
    {
      text: "They walked us through council approvals and kept us informed every step of the way. No surprises.",
      author: "Mark T",
      location: "QLD",
    },
    {
      text: "Exceptional quality for the price. Our studio looks and feels like a real home, not a shed.",
      author: "Ryan J",
      location: "SA",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-section-5">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header with intro, headline, and star rating */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            {/* Intro line */}
            <p className="text-muted-foreground text-[16px] leading-[1.6] sm:text-lg md:text-xl mb-6">
              What our customers say about their experience
            </p>
            
            {/* Headline */}
            <h2 className="text-primary font-bold text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              Real Stories From Real Families
            </h2>

            {/* Star Rating Strip */}
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm sm:text-base italic">
              "So much easier than traditional building."
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[900px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in touch-manipulation bg-white rounded-xl p-7 sm:p-8
                           shadow-md hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                
                {/* Profile icon and quote */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                
                {/* Quote text */}
                <p className="mb-5 text-primary text-[15px] leading-relaxed sm:text-base">
                  {testimonial.text}
                </p>
                
                {/* Divider line */}
                <div className="w-10 h-0.5 bg-accent/30 rounded-full mb-3" />
                
                {/* Author name and location */}
                <p className="font-semibold text-accent text-[15px] leading-relaxed sm:text-base">
                  {testimonial.author}, {testimonial.location}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button after testimonials */}
          <div className="flex justify-center mt-16 sm:mt-20">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="group bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/90 touch-manipulation 
                         min-h-[56px] text-[16px] sm:text-lg px-8 sm:px-10 rounded-lg
                         shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-[400px]"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
