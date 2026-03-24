import { Shield, DollarSign, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const BADGES = [
  { icon: Shield, label: 'Fully Insured', desc: 'Your home is protected' },
  { icon: DollarSign, label: 'Free Estimates', desc: 'No obligation quotes' },
  { icon: MapPin, label: 'Locally Owned', desc: 'Lima, Ohio based' },
  { icon: Award, label: 'Workmanship Guarantee', desc: 'Built to last' },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {BADGES.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-center gap-3 p-4 bg-[#262626]/50 border border-[#262626] hover:border-primary/30 transition-colors duration-300"
        >
          <badge.icon className="w-8 h-8 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-heading font-semibold text-white">{badge.label}</p>
            <p className="text-xs text-muted-foreground">{badge.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}