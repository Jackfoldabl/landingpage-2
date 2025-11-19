import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Footer intro line */}
          <p className="text-sm sm:text-base text-primary-foreground/80 mb-6">
            Quality modular homes for Australian properties. We help with finance, council approvals, and installation.
          </p>

          {/* Logo */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">fold</span>
              <span className="text-accent">ä</span>
              <span className="text-white">bl</span>
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] mt-3 font-medium text-white/90">
              DESIGN | BUILD | DELIVER
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 mb-10 sm:mb-12">
            <a 
              href="tel:1300787958" 
              className="flex items-center gap-3 text-white hover:text-accent transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center 
                            group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-lg sm:text-xl font-semibold">1300 787 958</span>
            </a>

            <a 
              href="mailto:sales@foldabl.com" 
              className="flex items-center gap-3 text-white hover:text-accent transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center 
                            group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-base sm:text-lg">sales@foldabl.com</span>
            </a>
          </div>

          {/* Bottom Text */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm sm:text-base text-white/80 font-medium">
              © {new Date().getFullYear()} Foldäbl Homes. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-3">
              Australian-made modular homes built to national standards
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

