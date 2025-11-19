import { useEffect } from "react";

export const LeadForm = () => {
  useEffect(() => {
    // Load GHL auto-resize script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="lead-form" className="py-20 sm:py-24 md:py-28 lg:py-32 gradient-form scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-[960px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-14 sm:mb-16 md:mb-20">
            <p className="text-[16px] leading-[1.6] sm:text-lg md:text-xl text-primary-foreground/90 mb-4">
              Ready to explore what's possible?
            </p>
            <h2 className="mb-5 sm:mb-7 text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Get Your Free Quote
            </h2>
            <p className="text-[16px] leading-[1.6] sm:text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              Tell us about your property and what you're looking for. We'll review your details and get back to you within 24 hours with pricing and next steps.
            </p>
          </div>

          {/* GHL Form Embed - Direct styling without extra wrapper */}
          <div className="relative">
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/a3zh6FUCJAxCFbG7UEo0"
              id="a3zh6FUCJAxCFbG7UEo0"
              title="Foldäbl Enquiry"
              scrolling="no"
              className="w-full border-0 rounded-xl shadow-2xl"
              style={{
                minHeight: '780px',
                background: 'transparent'
              }}
            />

            {/* Notes under form */}
            <div className="mt-6 sm:mt-8 md:mt-10 text-center space-y-3 px-4">
              <p className="text-[15px] leading-relaxed sm:text-base text-primary-foreground/80">
                Your information is safe with us. We never spam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile adjustments */}
      <style>{`
        #a3zh6FUCJAxCFbG7UEo0 {
          display: block;
        }
        
        @media (max-width: 640px) {
          #a3zh6FUCJAxCFbG7UEo0 {
            min-height: 950px !important;
            border-radius: 12px !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          #a3zh6FUCJAxCFbG7UEo0 {
            min-height: 900px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
