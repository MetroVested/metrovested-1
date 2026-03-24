import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import QuoteForm from '../components/QuoteForm';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-background border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Get In Touch"
            title="Let's Talk About Your Project"
            description="Whether you're ready to start or just exploring your options, we're here to help. Reach out by phone, text, email, or use the form below to request a free quote."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-white text-xl mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <a href="tel:5672045618" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-white font-heading font-semibold group-hover:text-primary transition-colors">567-204-5618</p>
                    </div>
                  </a>

                  <a href="sms:5672045618" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Text Us</p>
                      <p className="text-white font-heading font-semibold group-hover:text-primary transition-colors">567-204-5618</p>
                    </div>
                  </a>

                  <a href="mailto:sales@mvphomeconstruction.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white font-heading font-semibold group-hover:text-primary transition-colors text-sm">sales@mvphomeconstruction.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Service Area</p>
                      <p className="text-white font-heading font-semibold">Lima, Ohio & Surrounding Areas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-[#262626]/30 border border-[#262626]">
                  <p className="text-primary font-heading font-semibold text-sm mb-2">FASTER RESPONSE?</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Call or text us directly at <span className="text-white">567-204-5618</span> for
                    the quickest response. We typically respond to texts and calls within a few hours
                    during business days.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}