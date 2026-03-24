import { Shield, DollarSign, Award, MapPin, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const VALUES = [
  {
    icon: Wrench,
    title: 'Craftsmanship',
    desc: 'We don\'t cut corners. Every nail, every joint, every finish is done with the care and precision your home deserves. We build things right because we take pride in our work.',
  },
  {
    icon: Heart,
    title: 'Communication',
    desc: 'We believe a great project starts with great communication. You\'ll always know where things stand, what\'s coming next, and how your investment is being handled.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    desc: 'When we say we\'ll be there, we\'re there. When we give you a timeline, we stick to it. You can count on MVP to show up and deliver — every single time.',
  },
  {
    icon: MapPin,
    title: 'Local Service',
    desc: 'We live and work right here in the Lima, Ohio area. This isn\'t just a market for us — it\'s our home. Your neighbor is our neighbor, and that matters.',
  },
];

const COMMITMENTS = [
  {
    icon: Award,
    title: 'Workmanship Guarantee',
    desc: 'Every project we complete is backed by our workmanship guarantee. If something isn\'t right, we make it right. That\'s the standard we hold ourselves to, and it\'s the assurance you deserve when investing in your home.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    desc: 'MVP carries full insurance coverage so your home and your investment are protected throughout the entire project. From the first day of work to the final walkthrough, you\'re covered.',
  },
  {
    icon: DollarSign,
    title: 'Free Estimates',
    desc: 'We believe you should know exactly what you\'re getting before you commit. That\'s why every estimate is free, detailed, and transparent. No surprises, no hidden fees, no obligation.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-background border-b border-[#262626] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69c302f45ae904f8ebd7fe1f/f2c389ad9_generated_9fffb3f8.png"
            alt="Lima Ohio community"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="About MVP"
            title="Locally Owned. Locally Trusted."
            description="Metro Vested Properties is a home construction and remodeling company built on the belief that every homeowner deserves honest work, fair pricing, and results they can be proud of."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading font-bold text-white text-2xl">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Metro Vested Properties — MVP — is a residential construction and remodeling company
              based in Lima, Ohio. We serve homeowners throughout western and central Ohio who are
              looking for a builder they can actually trust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's a full kitchen transformation, a new custom home, a roof replacement,
              or even a barndominium build, we bring the same level of dedication, communication,
              and craftsmanship to every project. We don't believe in one-size-fits-all construction.
              Every home is different, every family has different needs, and every project deserves
              individual attention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not a massive corporation with layers of management. We're a local team that
              takes personal responsibility for the work we do. When you hire MVP, you're working
              with people who care about the outcome — because our reputation is built one project
              at a time, right here in the communities where we live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Everything We Build"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-[#262626]/30 border border-[#262626] hover:border-primary/20 transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Commitments"
            title="The Promises That Back Every Project"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COMMITMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 bg-[#262626]/30 border border-[#262626] hover:border-primary/20 transition-all duration-300 text-center"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 lg:py-28 bg-background border-t border-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Where We Work"
            title="Serving Lima, Ohio & Surrounding Communities"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto"
          >
            MVP is based in Lima, Ohio and provides home construction and remodeling services
            throughout the surrounding region — including Wapakoneta, Findlay, Sidney, Van Wert,
            Delphos, Kenton, Celina, St. Marys, and communities extending toward Dayton, Columbus,
            Toledo, and Springfield. No matter where you are in western or central Ohio, we're ready
            to bring MVP-quality work to your doorstep.
          </motion.p>
        </div>
      </section>

      <CTASection
        headline="Ready to Work With a Builder You Can Trust?"
        subtext="Contact MVP today for a free estimate. Let's talk about what your home needs."
      />
    </div>
  );
}