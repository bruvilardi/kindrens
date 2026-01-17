import React from 'react';
import { Heart, ThumbsUp, Smile } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-text mb-16">
          Why Parents Love Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4">
                <img 
                  src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768626910/Ativo_30_2x_x2ew0l.png" 
                  alt="Deliciously Healthy" 
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-lg font-bold text-primary-text">
              Deliciously Healthy
            </h3>
            <p className="text-primary-text text-sm max-w-[200px] mx-auto leading-relaxed">
              The perfect balance between the taste kids love and the nutrition parents trust.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4 relative">
                <img 
                  src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768626909/Ativo_29_2x_ne2d5l.png" 
                  alt="Daily Immunity" 
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-lg font-bold text-primary-text">
              Daily Immunity
            </h3>
            <p className="text-primary-text text-sm max-w-[200px] mx-auto leading-relaxed">
              A daily dose of protection so they can play, explore, and grow strong.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4">
                <img 
                  src="https://res.cloudinary.com/drvtrbeky/image/upload/v1768626909/Ativo_28_2x_g1bew7.png" 
                  alt="Pure Care" 
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-lg font-bold text-primary-text">
              Pure Care
            </h3>
            <p className="text-primary-text text-sm max-w-[200px] mx-auto leading-relaxed">
              100% natural formula. No nasty additives, just the best of nature in every jar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;