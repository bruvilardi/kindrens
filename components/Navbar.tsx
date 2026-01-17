import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
    // If we are already on home (no onNavigateHome needed or it just resets state), 
    // the default href anchor might work, but this ensures smooth scroll logic consistent with SPA
  };

  return (
    <nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-cream/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex-shrink-0 cursor-pointer" onClick={onNavigateHome}>
        <img 
          src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533938/logo_kqtanf.svg" 
          alt="Kildren's Logo" 
          className="h-[50px] w-auto transition-all duration-300" 
        />
      </div>
      
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a 
          href="#products" 
          onClick={(e) => handleScroll(e, 'products')} 
          className="hover:text-accent-salmon transition-colors"
        >
          Products
        </a>
        <a 
          href="#why-us" 
          onClick={(e) => handleScroll(e, 'why-us')} 
          className="hover:text-accent-salmon transition-colors"
        >
          Why Us
        </a>
        <a 
          href="#faq" 
          onClick={(e) => handleScroll(e, 'faq')} 
          className="hover:text-accent-salmon transition-colors"
        >
          FAQ
        </a>
        <a 
          href="#subscribe" 
          onClick={(e) => handleScroll(e, 'subscribe')} 
          className="hover:text-accent-salmon transition-colors"
        >
          Subscribe
        </a>
      </div>

      <div className="flex items-center">
        <button className="relative p-2 bg-transparent border-[3px] border-primary-text hover:bg-black/5 rounded-full transition-colors" aria-label="Cart">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-accent-salmon border-2 border-primary-text text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;