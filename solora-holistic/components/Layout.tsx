import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-text-main dark:text-gray-200 hover:text-primary dark:hover:text-primary";
  };

  // Reusable Text Logo Component
  const TextLogo = () => (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
        <span className="material-symbols-outlined text-2xl">spa</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black text-text-main dark:text-white tracking-tight leading-none">Solora</span>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary leading-tight mt-0.5">Holistic Medicine</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="group" aria-label="Solora Holistic Medicine Home">
             <TextLogo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about')}`}>About</Link>
            <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services')}`}>Services</Link>
            <Link to="/process" className={`text-sm font-medium transition-colors ${isActive('/process')}`}>Process</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact')}`}>Contact</Link>
            <Link to="/patient-portal" className={`text-sm font-medium flex items-center gap-1 transition-colors ${isActive('/patient-portal')}`}>
              <span className="material-symbols-outlined text-[18px]">lock</span>
              Portal
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-sm shadow-primary/20">
              Book Now
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-main dark:text-white"
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark shadow-xl py-4 px-4 flex flex-col gap-4 z-40">
             <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium ${isActive('/')}`}>Home</Link>
             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium ${isActive('/about')}`}>About</Link>
             <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium ${isActive('/services')}`}>Services</Link>
             <Link to="/process" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium ${isActive('/process')}`}>Process</Link>
             <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium ${isActive('/contact')}`}>Contact</Link>
             <Link to="/patient-portal" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium flex items-center gap-2 ${isActive('/patient-portal')}`}>
               <span className="material-symbols-outlined text-lg">lock</span>
               Patient Portal
             </Link>
             <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center rounded-lg h-12 w-full bg-primary text-white font-bold">Book Now</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark pt-16 pb-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-6">
              <TextLogo />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Empowering your journey to wellness through science and nature. Functional medicine for the modern world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="sr-only">Facebook</span>FB</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="sr-only">Instagram</span>IG</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="sr-only">Twitter</span>TW</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Nutritional Therapy</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Bioresonance Scanning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Lifestyle Coaching</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Functional Testing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Solora</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/patient-portal" className="hover:text-primary transition-colors">Patient Portal</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Subscribe for wellness tips and updates.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email address" className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              <button type="button" className="w-full h-10 rounded-lg bg-text-main dark:bg-white text-white dark:text-background-dark font-bold text-sm hover:opacity-90 transition-opacity">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-border-light dark:border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2023 Solora Holistic Medicine. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;