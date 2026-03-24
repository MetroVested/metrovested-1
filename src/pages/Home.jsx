import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseMVP from '../components/home/WhyChooseMVP';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import ServiceAreaSection from '../components/home/ServiceAreaSection';
import CTASection from '../components/CTASection';
import TrustBadges from '../components/TrustBadges';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-12 lg:py-16 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>
      <ServicesPreview />
      <WhyChooseMVP />
      <TestimonialsPreview />
      <ServiceAreaSection />
      <CTASection
        headline="Let's Build Something Great Together"
        subtext="Whether you're planning a kitchen remodel, a new home build, or anything in between — MVP is ready to deliver. Get your free estimate today."
      />
    </div>
  );
}