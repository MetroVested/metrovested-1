import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChefHat, Bath, Sofa, Home, Hammer, Layers, Square, PaintBucket,
  Fence, TreePine, DoorOpen, Warehouse, ArrowRight, ArrowLeft, CheckCircle, Phone
} from 'lucide-react';

const SERVICE_OPTIONS = [
  { id: 'kitchen', label: 'Kitchen Remodel', icon: ChefHat },
  { id: 'bathroom', label: 'Bathroom Remodel', icon: Bath },
  { id: 'basement', label: 'Basement Remodel', icon: Sofa },
  { id: 'full-remodel', label: 'Full Home Remodel', icon: Home },
  { id: 'new-build', label: 'New Home Build', icon: Hammer },
  { id: 'addition', label: 'Home Addition', icon: Home },
  { id: 'roofing', label: 'Roofing', icon: Layers },
  { id: 'flooring', label: 'Flooring', icon: Square },
  { id: 'painting', label: 'Drywall & Painting', icon: PaintBucket },
  { id: 'concrete', label: 'Concrete Work', icon: Square },
  { id: 'siding', label: 'Siding', icon: Fence },
  { id: 'deck', label: 'Decks & Porches', icon: TreePine },
  { id: 'windows-doors', label: 'Windows & Doors', icon: DoorOpen },
  { id: 'garage', label: 'Garages & Outbuildings', icon: Warehouse },
  { id: 'other', label: 'Other / Not Sure', icon: Hammer },
];

const BUDGET_OPTIONS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet',
];

const TIMELINE_OPTIONS = [
  'As soon as possible',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just exploring options',
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    services: [],
    name: '',
    phone: '',
    email: '',
    city: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
  });

  const toggleService = (id) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const getServiceLabels = () =>
    form.services.map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label).filter(Boolean).join(', ');

  const handleSubmit = () => {
    const serviceLabels = getServiceLabels() || 'General Inquiry';
    const cityText = form.city || 'Not specified';

    const subject = `New Project Inquiry: ${serviceLabels} – ${cityText}`;

    const body = `Hello MVP Team,

I am reaching out to request a quote for a home construction / remodeling project.

--- PROJECT DETAILS ---

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
City: ${cityText}

Services Needed: ${serviceLabels}
Project Type: ${form.projectType || 'Not specified'}
Budget Range: ${form.budget || 'Not specified'}
Preferred Timeline: ${form.timeline || 'Not specified'}

Project Description:
${form.description || 'No additional details provided.'}

--- END ---

I look forward to hearing from you. Please feel free to call or text me at ${form.phone || 'the number above'} for the fastest response.

Thank you,
${form.name}`;

    window.location.href = `mailto:sales@mvphomeconstruction.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 lg:p-12 bg-[#262626]/30 border-2 border-primary/30 text-center"
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-heading font-bold text-white mb-4">
          Your Quote Request is Ready to Send
        </h2>
        <p className="text-muted-foreground mb-3 max-w-lg mx-auto">
          Your email client has been opened with your project details pre-filled.
          Please hit <span className="text-white font-semibold">"Send"</span> in your
          email application to complete your request.
        </p>
        <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
          If your email client didn't open, you can reach us directly at{' '}
          <a href="mailto:sales@mvphomeconstruction.com" className="text-primary hover:underline">
            sales@mvphomeconstruction.com
          </a>
        </p>
        <div className="p-4 bg-[#0A0A0A]/50 border border-[#262626] inline-block">
          <p className="text-primary font-heading font-semibold text-sm mb-1">
            <Phone className="w-4 h-4 inline-block mr-1 -mt-0.5" />
            WANT A FASTER RESPONSE?
          </p>
          <p className="text-sm text-muted-foreground">
            Call or text us at <a href="tel:5672045618" className="text-white font-semibold">567-204-5618</a>
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => { setSubmitted(false); setStep(1); setForm({ services: [], name: '', phone: '', email: '', city: '', projectType: '', description: '', budget: '', timeline: '' }); }}
            className="text-sm text-muted-foreground hover:text-white transition-colors"
          >
            Submit another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-[#262626]/20 border border-[#262626] p-6 lg:p-8">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-white text-xl mb-2">Request a Free Quote</h3>
        <p className="text-sm text-muted-foreground">Step {step} of 3</p>
        {/* Progress bar */}
        <div className="mt-4 h-1 bg-[#262626] overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-white font-heading font-semibold mb-4">What services do you need?</p>
            <p className="text-xs text-muted-foreground mb-6">Select one or more — we'll tailor your quote accordingly.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_OPTIONS.map((service) => {
                const selected = form.services.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`flex flex-col items-center gap-2 p-4 border transition-all duration-200 text-center ${
                      selected
                        ? 'border-primary bg-primary/10 text-white'
                        : 'border-[#262626] bg-[#262626]/20 text-[#A3A3A3] hover:border-primary/30 hover:text-white'
                    }`}
                  >
                    <service.icon className={`w-6 h-6 ${selected ? 'text-primary' : ''}`} />
                    <span className="text-xs font-heading font-semibold">{service.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={form.services.length === 0}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-semibold px-6 py-3 text-sm transition-all"
                style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
              >
                NEXT <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-white font-heading font-semibold mb-6">Tell us about yourself</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Full Name *" value={form.name} onChange={(v) => updateField('name', v)} placeholder="John Smith" />
              <InputField label="Phone Number *" value={form.phone} onChange={(v) => updateField('phone', v)} placeholder="567-000-0000" type="tel" />
              <InputField label="Email Address" value={form.email} onChange={(v) => updateField('email', v)} placeholder="you@email.com" type="email" />
              <InputField label="City" value={form.city} onChange={(v) => updateField('city', v)} placeholder="Lima, OH" />
            </div>
            <div className="mt-4">
              <InputField label="Project Type" value={form.projectType} onChange={(v) => updateField('projectType', v)} placeholder="e.g., Residential remodel, New construction" />
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 text-[#A3A3A3] hover:text-white font-heading font-semibold text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!form.name || !form.phone}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-semibold px-6 py-3 text-sm transition-all"
                style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
              >
                NEXT <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-white font-heading font-semibold mb-6">Project details</p>

            <div className="mb-4">
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Budget Range</label>
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => updateField('budget', opt)}
                    className={`px-4 py-2 text-xs font-heading font-semibold border transition-all ${
                      form.budget === opt
                        ? 'border-primary bg-primary/10 text-white'
                        : 'border-[#262626] text-[#A3A3A3] hover:border-primary/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Preferred Timeline</label>
              <div className="flex flex-wrap gap-2">
                {TIMELINE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => updateField('timeline', opt)}
                    className={`px-4 py-2 text-xs font-heading font-semibold border transition-all ${
                      form.timeline === opt
                        ? 'border-primary bg-primary/10 text-white'
                        : 'border-[#262626] text-[#A3A3A3] hover:border-primary/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Short Description</label>
              <textarea
                value={form.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Tell us a bit about your project — what you're looking for, any specific ideas, or questions you have..."
                rows={4}
                className="w-full bg-[#262626]/50 border border-[#262626] text-white text-sm px-4 py-3 focus:outline-none focus:border-primary/50 placeholder:text-[#555] resize-none transition-colors"
              />
            </div>

            {/* Summary */}
            <div className="p-4 bg-[#0A0A0A]/50 border border-[#262626] mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Request Summary</p>
              <p className="text-sm text-white">
                <span className="text-primary font-semibold">{getServiceLabels() || 'No services selected'}</span>
                {form.city && <span> in <span className="text-primary">{form.city}</span></span>}
                {form.budget && <span> · Budget: {form.budget}</span>}
                {form.timeline && <span> · Timeline: {form.timeline}</span>}
              </p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 text-[#A3A3A3] hover:text-white font-heading font-semibold text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
                style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
              >
                SUBMIT QUOTE REQUEST <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#262626]/50 border border-[#262626] text-white text-sm px-4 py-3 focus:outline-none focus:border-primary/50 placeholder:text-[#555] transition-colors"
      />
    </div>
  );
}