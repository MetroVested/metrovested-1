import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import TestimonialCard from '../TestimonialCard';

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'Lima, OH',
    service: 'Kitchen Remodel',
    text: 'MVP completely transformed our outdated kitchen into something we never thought possible. The attention to detail was incredible, and they finished right on schedule. We couldn\'t be happier.',
  },
  {
    name: 'James & Linda R.',
    location: 'Wapakoneta, OH',
    service: 'New Home Build',
    text: 'Building a home is stressful, but working with MVP made the process smooth. They communicated every step, stayed within budget, and delivered a home that exceeded our expectations.',
  },
  {
    name: 'David K.',
    location: 'Findlay, OH',
    service: 'Basement Remodel',
    text: 'Turned our cold, unfinished basement into a space the whole family uses every day. Great craftsmanship, fair pricing, and genuinely good people to work with.',
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What Homeowners Say"
          title="Trusted by Families Across the Region"
          description="Don't just take our word for it — hear from the homeowners we've had the privilege to work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-primary hover:text-white font-heading font-semibold text-sm transition-colors"
          >
            READ MORE REVIEWS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}