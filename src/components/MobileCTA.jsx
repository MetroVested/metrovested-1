import { Phone, MessageSquare } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-primary flex items-center justify-around lg:hidden z-50 shadow-lg shadow-primary/30">
      <a
        href="tel:5672045618"
        className="flex items-center gap-2 text-white font-heading font-bold text-sm"
      >
        <Phone className="w-4 h-4" />
        CALL NOW
      </a>
      <div className="w-px h-6 bg-white/20" />
      <a
        href="sms:5672045618"
        className="flex items-center gap-2 text-white font-heading font-bold text-sm"
      >
        <MessageSquare className="w-4 h-4" />
        TEXT US
      </a>
    </div>
  );
}