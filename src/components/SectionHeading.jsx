import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${light ? 'text-[#0A0A0A]' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-[#555]' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}