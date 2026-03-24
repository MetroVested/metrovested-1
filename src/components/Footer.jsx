import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

const SERVICE_AREAS = [
  'Lima', 'Wapakoneta', 'Delphos', 'Bluffton', 'Findlay',
  'Ottawa', 'Kenton', 'Celina', 'St. Marys', 'Sidney',
  'Bellefontaine', 'Van Wert', 'Troy', 'Piqua', 'Greenville',
  'Urbana', 'Marysville', 'Tiffin', 'Defiance', 'Bryan',
  'Paulding', 'Napoleon', 'Bucyrus', 'Upper Sandusky', 'Marion',
  'Springfield', 'Dayton', 'Columbus', 'Toledo',
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-3xl font-heading font-bold text-white">MVP</span>
              <p className="text-sm text-muted-foreground mt-1">Metro Vested Properties</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Lima, Ohio's trusted home construction and remodeling company. From kitchen remodels
              to new home builds, we bring craftsmanship and reliability to every project.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:5672045618" className="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 567-204-5618
              </a>
              <a href="sms:5672045618" className="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" /> Text: 567-204-5618
              </a>
              <a href="mailto:sales@mvphomeconstruction.com" className="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary" /> sales@mvphomeconstruction.com
              </a>
              <span className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                <MapPin className="w-4 h-4 text-primary" /> Lima, Ohio &amp; Surrounding Areas
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-[#A3A3A3] hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Kitchen Remodels', id: 'kitchen-remodels' },
                { label: 'Bathroom Remodels', id: 'bathroom-remodels' },
                { label: 'Basement Remodels', id: 'basement-remodels' },
                { label: 'New Home Builds', id: 'new-home-builds' },
                { label: 'Roofing', id: 'roofing' },
                { label: 'Flooring', id: 'flooring' },
                { label: 'Decks & Porches', id: 'decks-porches' },
                { label: 'Siding', id: 'siding' },
              ].map((s) => (
                <li key={s.id}>
                  <a href={`/services#${s.id}`} className="text-sm text-[#A3A3A3] hover:text-primary transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {SERVICE_AREAS.map((city, i) => (
                <span key={city} className="text-xs text-[#A3A3A3]">
                  {city}{i < SERVICE_AREAS.length - 1 ? ',' : ''}
                </span>
              ))}
              <span className="text-xs text-[#A3A3A3]">& surrounding areas</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Metro Vested Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-primary font-heading font-semibold">Insured</span>
            <span className="w-1 h-1 bg-[#262626] rounded-full"></span>
            <span className="text-xs text-primary font-heading font-semibold">Free Estimates</span>
            <span className="w-1 h-1 bg-[#262626] rounded-full"></span>
            <span className="text-xs text-primary font-heading font-semibold">Workmanship Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}