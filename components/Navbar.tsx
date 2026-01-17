import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  return (
    <nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-cream/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex-shrink-0 cursor-pointer" onClick={onNavigateHome}>
        <img 
          src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768533938/logo_kqtanf.svg" 
          alt="Kildren's Logo" 
          className="h-14 w-auto transition-all duration-300" 
        />
      </div>
      
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a href="#products" onClick={(e) => { if(onNavigateHome) { e.preventDefault(); onNavigateHome(); setTimeout(()=> { const el = document.getElementById('products'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 100); } }} className="hover:text-accent-salmon transition-colors">Products</a>
        <a href="#about" className="hover:text-accent-salmon transition-colors">About Us</a>
        <a href="#blog" className="hover:text-accent-salmon transition-colors">Blog</a>
        <a href="#contact" className="hover:text-accent-salmon transition-colors">Contact</a>
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