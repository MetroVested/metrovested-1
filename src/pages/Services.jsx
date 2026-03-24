import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChefHat, Bath, Sofa, Home, Hammer, Layers, PaintBucket,
  Fence, TreePine, DoorOpen, Square, Warehouse, ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const SERVICES = [
  {
    id: 'kitchen-remodels',
    icon: ChefHat,
    title: 'Kitchen Remodels',
    desc: 'Custom cabinetry, stone countertops, modern appliance integration, and layouts designed around the way your family lives. Your kitchen should be as functional as it is beautiful.',
    image: '/__generating__/img_ade5e3330058.png',
  },
  {
    id: 'bathroom-remodels',
    icon: Bath,
    title: 'Bathroom Remodels',
    desc: 'Walk-in showers, soaking tubs, floating vanities, and elegant tile work that turns your bathroom into a retreat you look forward to using every day.',
    image: '/__generating__/img_a6d66a0c45ee.png',
  },
  {
    id: 'basement-remodels',
    icon: Sofa,
    title: 'Basement Remodels',
    desc: 'Convert your basement into usable, livable space — home theaters, family rooms, home offices, or guest suites that add real value to your home.',
    image: '/__generating__/img_f43b167aa598.png',
  },
  {
    id: 'full-home-remodels',
    icon: Home,
    title: 'Full Home Remodels',
    desc: 'A whole-home transformation, room by room. We coordinate every trade and detail so you get a cohesive result without the chaos.',
  },
  {
    id: 'new-home-builds',
    icon: Hammer,
    title: 'New Home Builds',
    desc: 'Build your dream home from the foundation up. We manage the entire process — from site prep to the final walkthrough — with quality you can trust.',
    image: '/__generating__/img_05304d25d78a.png',
  },
  {
    id: 'home-additions',
    icon: Home,
    title: 'Home Additions',
    desc: 'More bedrooms, a bigger living area, or a sunroom — we seamlessly extend your home to fit your growing needs.',
  },
  {
    id: 'roofing',
    icon: Layers,
    title: 'Roofing',
    desc: 'New roof installations, tear-offs, and repairs. We use quality materials and proven techniques to protect your biggest investment.',
    image: '/__generating__/img_7cda59916be7.png',
  },
  {
    id: 'flooring',
    icon: Square,
    title: 'Flooring',
    desc: 'Hardwood, tile, luxury vinyl, laminate — expertly installed flooring that sets the foundation for every room.',
    image: '/__generating__/img_471f16f8e1e5.png',
  },
  {
    id: 'drywall-painting',
    icon: PaintBucket,
    title: 'Drywall & Painting',
    desc: 'Seamless drywall installation and professional paint finishes that bring clean, crisp walls to every space.',
  },
  {
    id: 'concrete-work',
    icon: Square,
    title: 'Concrete Work',
    desc: 'Driveways, patios, foundations, and flatwork — poured and finished with the precision that makes it last.',
  },
  {
    id: 'siding',
    icon: Fence,
    title: 'Siding',
    desc: 'Refresh your home\'s exterior with durable, modern siding that protects against the elements and enhances curb appeal.',
  },
  {
    id: 'decks-porches',
    icon: TreePine,
    title: 'Decks & Porches',
    desc: 'Custom-built outdoor living spaces — composite or wood decking, covered porches, and pergolas built for years of enjoyment.',
    image: '/__generating__/img_a8d7608c0ce1.png',
  },
  {
    id: 'windows-doors',
    icon: DoorOpen,
    title: 'Windows & Doors',
    desc: 'Energy-efficient windows and quality door installations that improve comfort, security, and the look of your home.',
  },
  {
    id: 'garages-outbuildings',
    icon: Warehouse,
    title: 'Garages & Outbuildings',
    desc: 'Detached garages, barns, barndominiums, and outbuildings — built to the same standard as your home.',
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-background border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Everything Your Home Needs, Under One Roof"
            description="MVP handles residential construction and remodeling projects of every size — from a single room refresh to a full custom build. If it involves building or improving homes, chances are we do it."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="group flex flex-col sm:flex-row bg-[#262626]/30 border border-[#262626] hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                {service.image && (
                  <div className="sm:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="font-heading font-semibold text-white text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-primary text-xs font-heading font-semibold hover:text-white transition-colors"
                  >
                    GET A QUOTE <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General services note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-[#262626]/30 border border-[#262626] text-center"
          >
            <h3 className="font-heading font-bold text-white text-xl mb-3">
              Don't See Your Project Listed?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              MVP provides comprehensive home improvement and construction services across
              Lima, Ohio and the surrounding region. If it involves building, repairing, or
              improving your home — give us a call. We likely do it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 text-sm transition-all duration-200"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              CONTACT US <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Let's Talk About Your Project"
        subtext="No project is too big or too small. Tell us what you need, and we'll provide a free, no-obligation estimate."
      />
    </div>
  );
}