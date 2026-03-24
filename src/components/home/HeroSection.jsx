import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/d265410eb_generated_464cf13c.png"
          alt="Luxury kitchen remodel by Metro Vested Properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
              Lima, Ohio's Trusted Builder
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
          >
            We Build the{' '}
            <span className="text-primary">Future</span>
            <br />
            of Your Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#A3A3A3] leading-relaxed mb-10 max-w-lg font-body"
          >
            Premier home construction and remodeling in Lima, Ohio and surrounding
            communities. Craftsmanship you can trust, results you can see.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              REQUEST A FREE QUOTE <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="tel:5672045618"
                className="inline-flex items-center gap-2 border border-[#262626] hover:border-primary/50 text-white font-heading font-semibold px-6 py-4 text-sm transition-all duration-200 bg-[#0A0A0A]/50 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-primary" /> CALL NOW
              </a>
              <a
                href="sms:5672045618"
                className="inline-flex items-center gap-2 border border-[#262626] hover:border-primary/50 text-white font-heading font-semibold px-6 py-4 text-sm transition-all duration-200 bg-[#0A0A0A]/50 backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-primary" /> TEXT US
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}