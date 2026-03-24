import { Wrench, MessageCircle, Clock, ShieldCheck, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

const REASONS = [
  {
    icon: Wrench,
    title: 'Skilled Craftsmanship',
    desc: 'Every cut, every joint, every finish — built with the precision and care your home deserves.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    desc: 'You\'ll always know where your project stands. We keep you informed every step of the way.',
  },
  {
    icon: Clock,
    title: 'On Time, On Budget',
    desc: 'We respect your schedule and your investment. No surprises, no excuses — just results.',
  },
  {
    icon: ShieldCheck,
    title: 'Insured & Guaranteed',
    desc: 'Your home is protected. Every project is backed by our workmanship guarantee and full insurance.',
  },
  {
    icon: Home,
    title: 'Full-Service Builder',
    desc: 'From remodels to new builds, roofing to concrete — one trusted team for all your construction needs.',
  },
  {
    icon: Users,
    title: 'Locally Owned & Operated',
    desc: 'We live and work right here in the Lima area. Your community is our community.',
  },
];

export default function WhyChooseMVP() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why MVP"
          title="Built on Trust, Delivered with Pride"
          description="We've earned our reputation the old-fashioned way — one well-built project at a time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 border border-[#262626] hover:border-primary/20 transition-all duration-300"
            >
              <reason.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}