import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileCTA from './MobileCTA';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
      {/* Spacer for mobile sticky CTA */}
      <div className="h-14 lg:hidden" />
    </div>
  );
}