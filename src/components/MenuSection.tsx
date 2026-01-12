import React, { useState, useRef, useEffect } from 'react';
import { Sandwich, UtensilsCrossed, Coffee, Flame, Beer, Heart, Pencil, Trash2, Star } from 'lucide-react';
import { MenuCategory, MenuItem } from '../types';

interface MenuItemRowProps {
  item: MenuItem;
  isAdmin?: boolean;
}

const LazyImage: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#1c0f07] animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {hasError && (
        <div className="absolute inset-0 bg-[#1c0f07] rounded-lg flex items-center justify-center">
          <div className="text-amber-500 text-xs text-center p-2">
            Imagem<br/>indisponível
          </div>
        </div>
      )}
    </div>
  );
};

interface MenuItemRowProps {
  item: MenuItem;
  isAdmin?: boolean;
}

const MenuItemRow: React.FC<MenuItemRowProps> = ({ item, isAdmin }) => {
  const hasImage = Boolean(item.image);
  const imageSrc = item.image || 'https://placehold.co/400x400/1c0f07/fbbf24';

  return (
    <div className="relative overflow-hidden glass-card rounded-lg sm:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
      {item.badge && (
        <div className="absolute top-0 left-0 z-10 bg-amber-500 text-[#0f0804] text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded-br-lg shadow-lg">
          {item.badge}
        </div>
      )}

      <div className="relative w-full sm:w-28 md:w-32 h-56 sm:h-28 md:h-32 shrink-0 overflow-hidden rounded-lg sm:rounded-xl bg-[#1c0f07]">
        <LazyImage
          src={imageSrc}
          alt={item.name}
          className="w-full h-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex-1 flex flex-col justify-between py-0.5 sm:py-0">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-heading font-bold text-sm sm:text-base md:text-lg text-amber-50 uppercase tracking-tight leading-tight">
              {item.name}
            </h4>
          </div>
          <p className="text-[10px] sm:text-[11px] text-zinc-500 font-medium leading-relaxed line-clamp-2 mt-1">
            {item.description || "Ingredientes selecionados com o melhor sabor da região."}
          </p>
        </div>

        <div className="flex items-end justify-between gap-2 mt-2 sm:mt-0">
          <div className="flex gap-1 sm:gap-1.5">
            {isAdmin ? (
              <>
                <button className="p-1.5 sm:p-2 rounded-lg bg-zinc-800 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 active:scale-95">
                  <Pencil size={14} />
                </button>
                <button className="p-1.5 sm:p-2 rounded-lg bg-zinc-800 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95">
                  <Trash2 size={14} />
                </button>
              </>
            ) : (
              <button className="p-1.5 sm:p-2 rounded-full bg-white/5 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 active:scale-95">
                <Heart size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-col items-end">
            <div className="bg-amber-500 text-[#0f0804] px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg font-heading font-black text-sm sm:text-base md:text-lg shadow-[6px_6px_0px_0px_rgba(245,158,11,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105">
              R$ {item.price.toFixed(2).replace('.', ',')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MenuSectionProps {
  category: MenuCategory;
  isAdmin?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category, isAdmin }) => {
  const getIcon = (id: string) => {
    const iconProps = { className: "w-4 sm:w-5 h-4 sm:h-5 text-amber-500", strokeWidth: 2.5 };
    switch (id) {
      case 'lanches':
        return <Sandwich {...iconProps} />;
      case 'refeicoes':
        return <UtensilsCrossed {...iconProps} />;
      case 'jantinhas':
        return <UtensilsCrossed {...iconProps} />;
      case 'sucos':
        return <Coffee {...iconProps} />;
      case 'cafeteria':
        return <Coffee {...iconProps} />;
      case 'bebidas':
        return <Coffee {...iconProps} />;
      case 'espetos':
        return <Flame {...iconProps} />;
      case 'cervejas':
        return <Beer {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <div className="mb-2 sm:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="sticky top-0 z-20 py-3 sm:py-4 bg-[#0f0804]/90 backdrop-blur-xl flex items-center gap-2 sm:gap-3 border-b border-amber-500/10 mb-4 sm:mb-6 -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-inner shrink-0">
          {getIcon(category.id)}
        </div>
        <h3 className="text-base sm:text-xl md:text-2xl font-heading font-black text-white tracking-widest uppercase">
          {category.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 -mx-3 sm:-mx-4 md:-mx-6">
        {category.items.map((item) => (
          <MenuItemRow key={item.id} item={item} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};