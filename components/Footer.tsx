import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF9EE] pt-32 pb-16 px-6 border-t-[3px] border-[#FFF0D0]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subscribe Section */}
        <div className="mb-12 w-full">
          <h2 className="text-3xl font-bold text-primary-text mb-2">
            Subscribe & Save
          </h2>
          <p className="text-primary-text/80 mb-6 text-sm font-medium">
            Enter your email address, subscribe and save.
          </p>
          
          <form className="max-w-md mx-auto relative flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-6 py-2.5 rounded-full border-[3px] border-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-text text-primary-text placeholder-primary-text/40 shadow-sm"
            />
          </form>
        </div>

        <div className="w-full max-w-2xl h-px bg-primary-text/20 mb-8"></div>

        {/* Socials & Links */}
        <div className="flex flex-col items-center gap-6 w-full">
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-transparent border-[3px] border-primary-text text-primary-text rounded-full hover:bg-accent-salmon hover:text-white transition-colors">
              <Facebook size={18} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="p-2 bg-transparent border-[3px] border-primary-text text-primary-text rounded-full hover:bg-accent-salmon hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-transparent border-[3px] border-primary-text text-primary-text rounded-full hover:bg-accent-salmon hover:text-white transition-colors">
              <Youtube size={18} fill="currentColor" strokeWidth={0} />
            </a>
             <a href="#" className="p-2 bg-transparent border-[3px] border-primary-text text-primary-text rounded-full hover:bg-accent-salmon hover:text-white transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
               </svg>
            </a>
          </div>

          <div className="w-full flex justify-between items-end border-t border-transparent pt-4 px-4 md:px-0">
             <div className="flex space-x-6 text-xs font-bold text-primary-text">
                <a href="#" className="hover:text-accent-salmon">Legal</a>
                <a href="#" className="hover:text-accent-salmon">Terms</a>
                <a href="#" className="hover:text-accent-salmon">Help</a>
             </div>
             
             <div className="text-xs text-primary-text font-medium">
                © 2022 Cahivaners Privacy
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;