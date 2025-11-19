import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.webp";
import heroMobileImage from "@/assets/hero-mobile.webp";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image for Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={heroImage}
          alt="Beautiful Foldäbl modular home interior"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            filter: 'brightness(1.05) saturate(1.08)'
          }}
        />
        {/* Enhanced layered overlay for desktop - Payrot-inspired depth */}
        <div 
          className="absolute inset-0 gradient-hero-overlay"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full py-8 safe-area-inset flex items-center justify-center container mx-auto">
        {/* Mobile Layout: Image as visible element */}
        <div className="w-full md:hidden flex flex-col gap-6">
          {/* Mobile Image - displayed as an element */}
          <img
            src={heroMobileImage}
            alt="Foldäbl modular home"
            className="w-full h-auto rounded-2xl shadow-2xl"
            loading="eager"
            style={{
              filter: 'brightness(1.02) saturate(1.05)'
            }}
          />
          
          {/* Mobile Content Box - Enhanced with Payrot-style depth */}
          <div 
            className="rounded-2xl p-9 sm:p-10 shadow-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
            }}
          >
          {/* Headline */}
          <h1 
            className="mb-4 sm:mb-5 leading-[1.15] sm:leading-tight font-bold text-center md:text-left"
            style={{
              fontSize: 'clamp(32px, 7vw, 52px)',
              fontWeight: 700,
              color: '#5F6B7B'
            }}
          >
            Move Into Your New Home In Just 8–10 Weeks
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-5 sm:mb-6 text-center md:text-left"
            style={{
              fontSize: 'clamp(18px, 3.5vw, 20px)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#5F6B7B'
            }}
          >
            Quality modular homes from $39,950 with fixed pricing. We take care of council approvals, arrange finance, and coordinate installation—so you skip the usual building headaches.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent w-full md:w-auto touch-manipulation"
              style={{
                backgroundColor: '#CE9E7A',
                color: '#FFFFFF',
                fontWeight: 600,
                padding: '18px 32px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(206, 158, 122, 0.35), 0 2px 8px rgba(0,0,0,0.15)',
                fontSize: 'clamp(16px, 3vw, 18px)',
                minHeight: '54px',
                willChange: 'transform',
                WebkitTapHighlightColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
              onTouchStart={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onTouchEnd={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </button>
          </div>

          {/* Secondary CTA */}
          <p 
            className="text-center md:text-left mb-3"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 15px)',
              lineHeight: 1.5,
              color: '#5F6B7B',
              opacity: 0.85
            }}
          >
            Prefer to talk? Call us on <a href="tel:1300787958" className="font-semibold hover:text-accent transition-colors">1300 787 958</a>
          </p>

          {/* Micro-trust line */}
          <p 
            className="text-center md:text-left text-xs sm:text-sm"
            style={{
              lineHeight: 1.5,
              color: '#5F6B7B',
              opacity: 0.75
            }}
          >
            Australian building standards • Finance options available • Council approval assistance
          </p>
          </div>
        </div>

        {/* Desktop Content Box - Enhanced with Payrot-style depth */}
        <div 
          className="hidden md:block w-full max-w-[560px] rounded-2xl p-12 shadow-2xl"
          style={{
            background: 'rgba(95, 107, 123, 0.28)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {/* Headline */}
          <h1 
            className="mb-4 sm:mb-5 leading-[1.15] sm:leading-tight font-bold text-left"
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)'
            }}
          >
            Move Into Your New Home In Just 8–10 Weeks
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-5 sm:mb-6 text-left"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.97)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Quality modular homes from $39,950 with fixed pricing. We take care of council approvals, arrange finance, and coordinate installation—so you skip the usual building headaches.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start mb-3 sm:mb-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent touch-manipulation"
              style={{
                backgroundColor: '#CE9E7A',
                color: '#FFFFFF',
                fontWeight: 600,
                padding: '18px 32px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(206, 158, 122, 0.35), 0 2px 8px rgba(0,0,0,0.15)',
                fontSize: '18px',
                minHeight: '54px',
                willChange: 'transform',
                WebkitTapHighlightColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
              onTouchStart={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onTouchEnd={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </button>
          </div>

          {/* Secondary CTA */}
          <p 
            className="text-left px-2 sm:px-0 mb-3"
            style={{
              fontSize: '15px',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Prefer to talk? Call us on <a href="tel:1300787958" className="font-semibold hover:text-accent transition-colors underline">1300 787 958</a>
          </p>

          {/* Micro-trust line */}
          <p 
            className="text-left px-2 sm:px-0 text-xs sm:text-sm"
            style={{
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Australian building standards • Finance options available • Council approval assistance
          </p>
        </div>
      </div>
    </section>
  );
};
