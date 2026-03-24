import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ name, location, text, service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-6 lg:p-8 bg-[#262626]/40 border border-[#262626] hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-[#FAFAFA] text-sm leading-relaxed mb-6 font-body">
        "{text}"
      </p>
      <div className="border-t border-[#262626] pt-4">
        <p className="font-heading font-semibold text-white text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{location} · {service}</p>
      </div>
    </motion.div>
  );
}