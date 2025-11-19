import { DollarSign, Home, FileCheck, Wrench, Clock, Building } from "lucide-react";

export const Starbursts = () => {
  const starbursts = [
    {
      icon: DollarSign,
      title: "Finance From $82/Week",
      description: "Own your home with flexible payment plans. Finance available to approved buyers.",
    },
    {
      icon: Home,
      title: "Studio Homes From $39,950",
      description: "Perfectly sized for granny flats, home offices, or guest accommodation.",
    },
    {
      icon: Building,
      title: "2 Bedroom Homes From $44,950",
      description: "Full family living spaces with flexible layouts to suit your block.",
    },
    {
      icon: FileCheck,
      title: "We Handle Council Approvals",
      description: "We manage the applications and paperwork to get your home approved properly.",
    },
    {
      icon: Wrench,
      title: "Installation Service Available",
      description: "Licensed partners deliver and install your home, ready for you to move in.",
    },
    {
      icon: Clock,
      title: "Ready In 8–10 Weeks",
      description: "One of the fastest ways to add quality living space to your property.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-section-1">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-20 animate-fade-in">
            <h2 className="mb-5 text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Why Families Choose Foldäbl
            </h2>
            <p className="text-[16px] leading-[1.6] sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We've taken care of the things most people worry about when building.
            </p>
          </div>

          {/* Starbursts Grid - Responsive: Mobile 1 col, Tablet 2 cols, Desktop 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
            {starbursts.map((starburst, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center 
                           p-8 md:p-9 lg:p-10 
                           bg-card rounded-xl shadow-md
                           hover:shadow-xl
                           active:shadow-xl
                           hover:-translate-y-2
                           transition-all duration-300 ease-out
                           touch-manipulation
                           animate-fade-in
                           border border-gray-100
                           w-full"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  marginBottom: 'var(--mobile-card-spacing, 0)',
                }}
              >
                {/* Icon - Larger on mobile */}
                <div className="w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 
                                rounded-xl bg-accent/10 flex items-center justify-center mb-6
                                group-hover:bg-accent/15 group-hover:scale-110
                                group-active:bg-accent/15 group-active:scale-110
                                transition-all duration-300 shadow-sm">
                  <starburst.icon className="w-9 h-9 md:w-10 md:h-10 text-accent" />
                </div>

                {/* Title - Consistent size across breakpoints */}
                <h3 className="text-[19px] leading-[1.3] sm:text-xl md:text-2xl font-bold mb-4 text-primary">
                  {starburst.title}
                </h3>

                {/* Description - No shrinking on mobile */}
                <p className="text-[15px] leading-relaxed sm:text-base text-muted-foreground">
                  {starburst.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile-specific spacing adjustments */}
          <style>{`
            @media (max-width: 767px) {
              :root {
                --mobile-card-spacing: 24px;
              }
              
              /* Ensure single column on mobile */
              .grid.grid-cols-1 {
                grid-template-columns: 1fr;
              }
            }
            
            @media (min-width: 768px) and (max-width: 1023px) {
              /* Tablet: 2 columns */
              .grid.md\\:grid-cols-2 {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            
            @media (min-width: 1024px) {
              /* Desktop: 3 columns */
              .grid.lg\\:grid-cols-3 {
                grid-template-columns: repeat(3, 1fr);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

