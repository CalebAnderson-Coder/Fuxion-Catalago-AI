
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { PRODUCTS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [showHero, setShowHero] = useState(true);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      return selectedCategory === 'Todos' || product.category === selectedCategory;
    });
  }, [selectedCategory]);

  const handleHomeClick = () => {
    setSelectedCategory('Todos');
    setShowHero(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (cat: Category | 'Todos') => {
    setSelectedCategory(cat);
    setShowHero(false);
    // Scroll to products
    const productSection = document.getElementById('products');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {showHero && <Hero />}
      
      {/* Sticky Navigation Bar for Catalog Browsing */}
      <div className="sticky top-0 z-50 shadow-md">
        <Header onHomeClick={handleHomeClick} />
      </div>

      <main className="flex-grow">
        
        {/* Filter Section */}
        <div className="bg-white border-b border-gray-100">
           <div className="max-w-6xl mx-auto">
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onSelectCategory={handleCategorySelect} 
              />
           </div>
        </div>

        {/* Product Grid - Styled to look like individual catalog pages */}
        <div id="products" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {selectedCategory !== 'Todos' && (
                 <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-fuxion-blue uppercase tracking-wider border-b-4 border-fuxion-green inline-block pb-2">
                        {selectedCategory}
                    </h2>
                 </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex justify-center">
                    <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No hay productos en esta categoría.
                </div>
            )}
        </div>
        
        {/* Clean Label Section */}
        <section className="bg-white py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                     <div className="border-4 border-fuxion-green px-6 py-2 rounded-lg">
                        <span className="text-4xl font-bold text-fuxion-green">CLEAN LABEL</span>
                     </div>
                </div>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                    Los productos Clean Label (etiqueta limpia), contienen ingredientes libres de químicos y fáciles de comunicar.
                    En Fuxion, nuestros productos son de origen natural, con más ingredientes de la amazonía.
                </p>
                <div className="flex justify-center gap-8">
                    <div className="w-16 h-16 rounded-full border-2 border-fuxion-blue flex items-center justify-center text-2xl">🌿</div>
                    <div className="w-16 h-16 rounded-full border-2 border-fuxion-blue flex items-center justify-center text-2xl">💧</div>
                    <div className="w-16 h-16 rounded-full border-2 border-fuxion-blue flex items-center justify-center text-2xl">❤️</div>
                </div>
            </div>
        </section>

      </main>

      <Footer />
      
      {/* Conversational AI Agent */}
      <ChatWidget />
    </div>
  );
};

export default App;
