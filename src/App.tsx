import React, { useState, useEffect } from 'react';
import { MenuSection } from './components/MenuSection';
import { menuData } from './data/menuData';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const isAdmin = false;

  useEffect(() => {
    const preloadImages = () => {
      const logoImg = new Image();
      logoImg.src = '/logo.png';

      const heroImg = new Image();
      heroImg.src = '/hero-banner.jpg';

      const criticalImages = menuData
        .slice(0, 2)
        .flatMap(category => category.items.slice(0, 3))
        .map(item => item.image)
        .filter(Boolean);

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0f0804] to-[#1a0f0a] text-[#f4f4f5] pb-20 font-sans selection:bg-amber-500/30">

      <header className="pt-16 pb-12 px-3 sm:px-6 text-center bg-[#0f0804] relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{backgroundImage: 'url(/hero-banner.jpg)'}}></div>
        <div className="relative flex justify-center mb-8 sm:mb-10">
          <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full border-2 border-amber-500/20 flex items-center justify-center bg-[#1c0f07]/80 backdrop-blur-sm">
            <img
              src="/logo.png"
              alt="Café e Conversa"
              className="w-44 sm:w-48 h-44 sm:h-48 object-contain rounded-full"
              onError={(e) => {
                e.currentTarget.replaceWith(
                  Object.assign(document.createElement('div'), {
                    innerHTML: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8 text-amber-500"><path d="M12 2v4m0 12v4m10-10h-4m-12 0H2m17.66-7.66L18 5.34m-6.32 12.32l2.83-2.83m0-6.34L18 18.66M5.34 6 l2.83 2.83"/></svg>'
                  })
                );
              }}
            />
          </div>
        </div>
        <p className="relative text-amber-500/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 sm:mb-10">
          Onde cada conversa começa com um bom café
        </p>

        <nav className="relative py-3 sm:py-4 px-4 sm:px-6 border-b border-white/5 rounded-lg mx-auto max-w-7xl">
          <div className="flex gap-2 md:gap-3 pb-2 scrollbar-hide justify-center flex-wrap">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`
                  px-4 sm:px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-amber-500 text-[#0f0804] shadow-lg shadow-amber-500/20'
                    : 'bg-[#1c0f07] text-amber-500/70 border border-amber-500/10 hover:border-amber-500/30'}
                `}
              >
                {category.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mt-0 space-y-2 sm:space-y-4">
        {menuData.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-32">
            <MenuSection category={category} isAdmin={isAdmin} />
          </div>
        ))}
      </main>

      <footer className="mt-8 sm:mt-12 py-6 sm:py-8 text-center text-zinc-600 text-[10px] sm:text-xs uppercase tracking-widest">
        <div className="space-y-1">
          <p className="font-medium">Benjamim Guimarães, 314 - Centro</p>
          <p className="text-amber-600">@cafeeconversa.prata</p>
          <p className="font-medium">(34) 99642-6784</p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 rounded-full bg-amber-500 text-[#0f0804] shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-all duration-300 z-40"
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}