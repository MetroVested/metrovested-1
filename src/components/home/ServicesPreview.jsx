import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

const SERVICES = [
  {
    title: 'Kitchen Remodels',
    desc: 'Transform the heart of your home with custom cabinetry, modern countertops, and thoughtful layouts.',
    image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/d265410eb_generated_464cf13c.png',
  },
  {
    title: 'Bathroom Remodels',
    desc: 'Upgrade your daily routine with elegant tile, custom vanities, and spa-inspired finishes.',
    image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/52b9b9ebc_generated_5ca65884.png',
  },
  {
    title: 'Basement Remodels',
    desc: 'Turn unused space into your family\'s favorite room — entertainment areas, home offices, or guest suites.',
    image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/1d85eed0d_generated_52308a45.png',
  },
  {
    title: 'New Home Builds',
    desc: 'Build your dream home from the ground up with a team that values quality at every stage.',
    image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/c1e1a9c15_generated_02757fb6.png',
  },
  {
    title: 'Roofing & Exteriors',
    desc: 'Protect your investment with durable roofing, premium siding, and expert exterior work.',
    image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/3c4572052_generated_c8d55b06.png',
  },
  {
    title: 'Decks & Outdoor Living',
    desc: 'Extend your living space outdoors with custom decks, porches, and outdoor structures.',
    image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/f1665fffc_generated_96584e98.png',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Comprehensive Home Construction & Remodeling"
          description="From small updates to full-scale builds, MVP handles residential projects of every size across Lima, Ohio and the surrounding region."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to="/services"
                className="group block bg-[#262626]/30 border border-[#262626] hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-white font-heading font-semibold text-sm transition-colors"
          >
            VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}