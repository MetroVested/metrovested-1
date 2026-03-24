import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

/* PLACEHOLDER PROJECTS — Replace images with real project photos later */
const PROJECTS = [
  { title: 'Modern Kitchen Transformation', category: 'Kitchen', location: 'Lima, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/d265410eb_generated_464cf13c.png' },
  { title: 'Luxury Bathroom Suite', category: 'Bathroom', location: 'Wapakoneta, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/52b9b9ebc_generated_5ca65884.png' },
  { title: 'Custom Home Build', category: 'New Build', location: 'Findlay, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/c1e1a9c15_generated_02757fb6.png' },
  { title: 'Full Basement Conversion', category: 'Basement', location: 'Sidney, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/1d85eed0d_generated_52308a45.png' },
  { title: 'Premium Roofing Installation', category: 'Roofing', location: 'Delphos, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/3c4572052_generated_c8d55b06.png' },
  { title: 'Outdoor Living Deck Build', category: 'Deck', location: 'Lima, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/f1665fffc_generated_96584e98.png' },
  { title: 'Hardwood Flooring Install', category: 'Flooring', location: 'Bluffton, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/9c3437e89_generated_799f55f1.png' },
  { title: 'Whole Home Renovation', category: 'Full Remodel', location: 'Kenton, OH', image: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/d265410eb_generated_464cf13c.png' },
];

const CATEGORIES = ['All', ...new Set(PROJECTS.map(p => p.category))];

/* PLACEHOLDER BEFORE/AFTER DATA */
const BEFORE_AFTER = [
  {
    title: 'Kitchen Before & After',
    before: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/1d85eed0d_generated_52308a45.png',
    after: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/d265410eb_generated_464cf13c.png',
    location: 'Lima, OH',
  },
  {
    title: 'Bathroom Before & After',
    before: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/9c3437e89_generated_799f55f1.png',
    after: 'https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/52b9b9ebc_generated_5ca65884.png',
    location: 'Findlay, OH',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-background border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Projects Built With Pride"
            description="Every project tells a story of craftsmanship, communication, and care. Browse our portfolio to see the quality MVP delivers to homeowners across the Lima, Ohio region."
          />
        </div>
      </section>

      {/* ============================================================
          MVP GALLERY SECTION
          DEVELOPER NOTE: To disable the gallery, add 'hidden' to the
          section className below, or comment out this entire section.
          ============================================================ */}
      <section id="mvp-gallery-section" className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-heading font-semibold transition-all duration-200 border ${
                  filter === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-[#A3A3A3] border-[#262626] hover:border-primary/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative overflow-hidden aspect-square bg-[#262626]"
              >
                {/* PLACEHOLDER IMAGE — Replace with real project photos */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-primary font-heading font-semibold uppercase">{project.category}</p>
                  <p className="text-white font-heading font-semibold text-sm">{project.title}</p>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* END MVP GALLERY SECTION */}

      {/* ============================================================
          BEFORE & AFTER SECTION
          DEVELOPER NOTE: To disable this section, add 'hidden' to the
          section className below, or comment out this entire section.
          ============================================================ */}
      <section id="mvp-before-after-section" className="py-20 lg:py-28 bg-background border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Transformations"
            title="Before & After"
            description="See the difference quality craftsmanship makes. These transformations showcase the impact of a well-executed remodel."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BEFORE_AFTER.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#262626]/30 border border-[#262626] overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    {/* PLACEHOLDER — Replace with real before photo */}
                    <img src={item.before} alt="Before" className="w-full h-48 sm:h-64 object-cover" />
                    <span className="absolute top-3 left-3 bg-[#0A0A0A]/80 text-white text-xs font-heading font-semibold px-3 py-1">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative">
                    {/* PLACEHOLDER — Replace with real after photo */}
                    <img src={item.after} alt="After" className="w-full h-48 sm:h-64 object-cover" />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-heading font-semibold px-3 py-1">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* END BEFORE & AFTER SECTION */}

      <CTASection
        headline="Want Results Like These?"
        subtext="Contact MVP for a free estimate and let's discuss how we can transform your home."
      />
    </div>
  );
}