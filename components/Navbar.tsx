import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // If we are on a different view (like product detail), we need to navigate home first
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      // Small timeout to allow the view to switch before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Products', id: 'products' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Subscribe', id: 'subscribe' },
  ];

  return (
    <nav className="w-full px-6 py-4 md:py-6 md:px-12 sticky top-0 z-50 bg-cream/95 backdrop-blur-sm transition-all duration-300 border-b border-primary-text/5 md:border-none">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer z-50" onClick={onNavigateHome}>
          <img 
            src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533938/logo_kqtanf.svg" 
            alt="Kildren's Logo" 
            className="h-[40px] md:h-[50px] w-auto transition-all duration-300" 
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)} 
              className="hover:text-accent-salmon transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <button className="relative p-2 bg-transparent border-[3px] border-primary-text hover:bg-black/5 rounded-full transition-colors" aria-label="Cart">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-1 -right-1 bg-accent-salmon border-2 border-primary-text text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 text-center text-2xl font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => handleScroll(e, link.id)} 
              className="text-primary-text hover:text-accent-salmon transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;