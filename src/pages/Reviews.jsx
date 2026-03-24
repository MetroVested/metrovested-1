import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

/* PLACEHOLDER TESTIMONIALS — Replace with real customer reviews */
const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Lima, OH',
    service: 'Kitchen Remodel',
    text: 'MVP completely transformed our outdated kitchen into something we never thought possible. The attention to detail was incredible, and they finished right on schedule. We couldn\'t be happier with the result.',
  },
  {
    name: 'James & Linda R.',
    location: 'Wapakoneta, OH',
    service: 'New Home Build',
    text: 'Building a home is stressful, but working with MVP made the process smooth. They communicated every step, stayed within budget, and delivered a home that exceeded our expectations. Truly a first-class experience.',
  },
  {
    name: 'David K.',
    location: 'Findlay, OH',
    service: 'Basement Remodel',
    text: 'Turned our cold, unfinished basement into a space the whole family uses every day. Great craftsmanship, fair pricing, and genuinely good people to work with. Highly recommend.',
  },
  {
    name: 'Michelle T.',
    location: 'Sidney, OH',
    service: 'Bathroom Remodel',
    text: 'From the initial consultation to the final walkthrough, MVP was professional and thorough. Our master bathroom is now the best room in the house. The tile work alone is worth the investment.',
  },
  {
    name: 'Tom & Karen B.',
    location: 'Delphos, OH',
    service: 'Roofing',
    text: 'Had our entire roof replaced and the crew was outstanding. Clean, efficient, respectful of our property. The new roof looks fantastic and the price was very fair compared to other bids we received.',
  },
  {
    name: 'Robert H.',
    location: 'Kenton, OH',
    service: 'Deck & Porch',
    text: 'We wanted a custom deck that would last for years and look great doing it. MVP delivered exactly that. The design, the materials, the build quality — everything was top notch. Our backyard is completely transformed.',
  },
  {
    name: 'Jessica W.',
    location: 'Bluffton, OH',
    service: 'Full Home Remodel',
    text: 'We bought a fixer-upper and MVP turned it into our dream home. They handled everything — flooring, drywall, painting, kitchen, bathrooms — and the result is incredible. It feels like a brand new house.',
  },
  {
    name: 'Paul & Amy S.',
    location: 'Van Wert, OH',
    service: 'Home Addition',
    text: 'Added a master suite to our home and it blends seamlessly with the existing structure. You can\'t even tell where the old house ends and the new addition begins. That kind of quality is hard to find.',
  },
  {
    name: 'Mark D.',
    location: 'Lima, OH',
    service: 'Concrete Work',
    text: 'Had a new driveway and back patio poured. The crew was professional, the work was done quickly, and the finished product looks excellent. MVP made a concrete job feel like a premium experience.',
  },
];

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-background border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Reviews"
            title="What Our Customers Are Saying"
            description="We earn our reputation one project at a time. Here's what homeowners across the region have to say about working with Metro Vested Properties."
          />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <TestimonialCard key={review.name} {...review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-[#262626]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-white text-2xl mb-3">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join the growing list of homeowners who trust MVP for their construction and
              remodeling projects. Your free estimate is just a click or call away.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Start Your Project Today"
        subtext="Request a free, no-obligation estimate and experience the MVP difference for yourself."
      />
    </div>
  );
}