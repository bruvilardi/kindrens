import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

type View = 'home' | 'product-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<number>(1);

  const handleNavigate = (view: View, productId?: number) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans text-primary-text bg-cream selection:bg-accent-salmon selection:text-white">
      <Navbar onNavigateHome={() => handleNavigate('home')} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Products onProductClick={(id) => handleNavigate('product-detail', id)} />
            <WhyUs />
          </>
        ) : (
          <ProductDetail 
            productId={selectedProductId} 
            onBack={() => handleNavigate('home')} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;