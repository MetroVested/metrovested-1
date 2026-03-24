import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                MVP
              </span>
              <span className="hidden sm:block ml-2 text-xs font-body text-muted-foreground leading-tight">
                Metro Vested<br />Properties
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-body font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5672045618"
              className="flex items-center gap-2 text-sm font-body text-[#A3A3A3] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              567-204-5618
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white text-sm font-heading font-semibold px-5 py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-[#262626]"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-base font-body font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#262626] flex flex-col gap-3">
                <a
                  href="tel:5672045618"
                  className="flex items-center gap-2 px-4 py-2 text-white font-body"
                >
                  <Phone className="w-4 h-4" /> 567-204-5618
                </a>
                <Link
                  to="/contact"
                  className="bg-primary text-white text-center font-heading font-semibold px-5 py-3"
                >
                  GET A QUOTE
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}