import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

const CITIES = [
  'Lima', 'Wapakoneta', 'Delphos', 'Bluffton', 'Findlay',
  'Ottawa', 'Kenton', 'Celina', 'St. Marys', 'Sidney',
  'Bellefontaine', 'Van Wert', 'Troy', 'Piqua', 'Greenville',
  'Urbana', 'Marysville', 'Tiffin', 'Defiance', 'Bryan',
  'Paulding', 'Napoleon', 'Bucyrus', 'Upper Sandusky', 'Marion',
  'Springfield', 'Dayton', 'Columbus', 'Toledo',
];

export default function ServiceAreaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-[#262626] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/f2c389ad9_generated_9fffb3f8.png"
          alt="Lima Ohio area"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Service Area"
          title="Proudly Serving Lima, Ohio & Beyond"
          description="Metro Vested Properties provides home construction and remodeling services throughout western and central Ohio. Our team travels to wherever the project takes us."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {CITIES.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 px-4 py-3 bg-[#262626]/30 border border-[#262626] hover:border-primary/20 transition-colors"
            >
              <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
              <span className="text-sm text-[#A3A3A3] font-body">{city}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 border border-primary/20">
            <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
            <span className="text-sm text-primary font-body font-medium">& Surrounding Areas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}