import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection({
  headline = "Ready to Start Your Project?",
  subtext = "From initial consultation to final walkthrough, we're with you every step of the way. Get your free estimate today.",
  showPhone = true,
}) {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
          >
            REQUEST A FREE QUOTE <ArrowRight className="w-4 h-4" />
          </Link>
          {showPhone && (
            <div className="flex items-center gap-4">
              <a
                href="tel:5672045618"
                className="inline-flex items-center gap-2 border border-[#262626] hover:border-primary/50 text-white font-heading font-semibold px-6 py-4 text-sm transition-all duration-200"
              >
                <Phone className="w-4 h-4" /> CALL NOW
              </a>
              <a
                href="sms:5672045618"
                className="inline-flex items-center gap-2 border border-[#262626] hover:border-primary/50 text-white font-heading font-semibold px-6 py-4 text-sm transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" /> TEXT US
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}