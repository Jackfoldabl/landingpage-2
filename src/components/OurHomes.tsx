import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import studioPlans from "@/assets/studio-plans.webp";
import twoBedPlans from "@/assets/2bed-plans.avif";
import threeBedPlans from "@/assets/3bed-plans.avif";

export const OurHomes = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const homes = [
    {
      name: "Studio Home",
      size: "27sqm",
      price: "From $39,950",
      image: studioPlans,
      features: [
        "Perfect granny flat or guest suite",
        "Ideal home office or creative studio",
        "Smart, space-efficient layout",
        "Quality finishes included",
      ],
      ctaText: "Get Studio Home Quote",
    },
    {
      name: "2 Bedroom Home",
      size: "40-60sqm",
      price: "From $44,950",
      image: twoBedPlans,
      features: [
        "Open-plan living area",
        "Great for couples or small families",
        "Multiple layout options available",
        "Best value for size and quality",
      ],
      ctaText: "Get 2 Bedroom Quote",
    },
    {
      name: "3 Bedroom Home",
      size: "79sqm",
      price: "From $69,950",
      image: threeBedPlans,
      features: [
        "Complete family home",
        "Three spacious bedrooms",
        "Plenty of living and storage space",
        "Designed for permanent living",
      ],
      ctaText: "Get 3 Bedroom Quote",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-section-2 overflow-hidden">
      <div className="container mx-auto">
        <div className="w-full md:max-w-6xl md:mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-20 animate-fade-in">
            <h2 className="mb-5 text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Choose Your Home
            </h2>
            <p className="text-[16px] leading-[1.6] sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From compact studios to full family homes—every Foldäbl is built to Australian standards.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-hidden">
            {homes.map((home, index) => (
              <div
                key={index}
                className="relative flex flex-col p-5 sm:p-8 md:p-10 rounded-xl
                           shadow-lg
                           hover:shadow-2xl
                           md:hover:-translate-y-1
                           transition-all duration-300 ease-out
                           animate-fade-in
                           w-full"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  backgroundColor: '#5F6B7B',
                  color: '#FFFFFF'
                }}
              >

                {/* Name & Size */}
                <h3 className="text-[19px] leading-[1.3] sm:text-xl md:text-2xl font-bold text-white mb-1">
                  {home.name}
                </h3>
                <p className="text-accent font-medium text-sm sm:text-base mb-4">{home.size}</p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-[28px] sm:text-3xl font-bold text-white">{home.price}</p>
                </div>

                {/* Floor Plan Image */}
                <div className="w-full mb-6 overflow-hidden bg-white">
                  <img 
                    src={home.image} 
                    alt={`${home.name} floor plan`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {home.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] leading-relaxed sm:text-base text-white/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToForm}
                  className="w-full bg-accent hover:bg-accent/90 shadow-md hover:shadow-lg
                             text-white min-h-[52px] text-base rounded-lg transition-all duration-300"
                >
                  {home.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-[15px] leading-relaxed sm:text-base text-muted-foreground max-w-3xl mx-auto">
              Prices shown are for the home only (installation quoted separately). Finance from $82/week available to approved buyers. 
              Every home meets Australian building standards—we help with council approvals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile-specific overrides for this section */}
      <style>{`
        @media (max-width: 768px) {
          .gradient-section-2 .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            max-width: 100vw !important;
            width: 100% !important;
            margin: 0 !important;
          }
          
          .gradient-section-2 .grid {
            margin: 0 !important;
            width: 100% !important;
          }
          
          .gradient-section-2 .grid > div {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

