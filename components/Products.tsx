import React from 'react';
import Bottle from './illustration/Bottle';

interface ProductData {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  image?: string;
  hoverImage?: string;
}

interface ProductsProps {
  onProductClick?: (id: number) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  const products: ProductData[] = [
    {
      id: 1,
      title: "Strawberry",
      subtitle: "GUMMIES",
      color: "#F28C8C", // Red
      bgColor: "bg-[#f4b1a8]",
      image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604621/frascomorando_avmnvi.png",
      hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604620/Gemini_Generated_Image_igfey3igfey3igfe_u7gk6n.png"
    },
    {
      id: 2,
      title: "Grape",
      subtitle: "GUMMIES",
      color: "#BFA6D9", // Purple
      bgColor: "bg-[#bf9eb8]",
      image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604620/frascouva_f9z51t.png",
      hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604620/Gemini_Generated_Image_g4uj2gg4uj2gg4uj_w3zedt.png"
    },
    {
      id: 3,
      title: "Lemon",
      subtitle: "GUMMIES",
      color: "#F4E87C", // Lemon
      bgColor: "bg-[#fde67a]",
      image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624625/frascolimao_icj9to.png",
      hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624625/Gemini_Generated_Image_lahrmklahrmklahr_kxzarv.png"
    },
    {
      id: 4,
      title: "Orange",
      subtitle: "GUMMIES",
      color: "#F4B084", // Orange
      bgColor: "bg-[#ebb381]",
      image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768603848/frascolaranja_rtiyc7.png",
      hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768603848/Gemini_Generated_Image_35kw1m35kw1m35kw_su6d3b.png"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-32 px-6 bg-cream-medium">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-text mb-8 md:mb-12">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              {/* Product Card */}
              <div className={`relative w-full ${product.bgColor} border-[3px] border-primary-text rounded-2xl p-6 flex flex-col items-center justify-between aspect-[3/4] shadow-sm hover:shadow-md transition-shadow`}>
                
                {/* Bottle Illustration or Image */}
                <div className="flex-grow w-full flex items-center justify-center relative">
                  {product.image ? (
                     <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className={`max-h-[180px] md:max-h-[230px] object-contain transition-opacity duration-300 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
                        />
                        {product.hoverImage && (
                          <img 
                            src={product.hoverImage} 
                            alt={`${product.title} Hover`}
                            className="absolute inset-0 m-auto max-h-[180px] md:max-h-[230px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        )}
                     </div>
                  ) : (
                    <div className="transform group-hover:scale-105 transition-transform duration-300">
                      <Bottle labelColor={product.color} />
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center w-full mt-4 mb-4">
                  <h3 className="text-xl font-bold text-primary-text leading-tight">
                    {product.title}
                  </h3>
                  <h4 className="text-lg text-primary-text uppercase font-semibold">
                    {product.subtitle}
                  </h4>
                </div>

                {/* Button */}
                <button 
                  onClick={() => onProductClick && onProductClick(product.id)}
                  className="w-full bg-accent-yellow border-[3px] border-primary-text text-primary-text font-bold py-2 px-4 rounded-full transition-all hover:bg-yellow-300 text-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;