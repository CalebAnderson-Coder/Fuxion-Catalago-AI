import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const [showNutritionalTable, setShowNutritionalTable] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const formatPrice = (price: number) => {
    return `$ ${price}`;
  };

  // Determine title color based on product color
  const accentColor = product.color; 

  const getEmbedUrl = (url: string) => {
      if (!url) return '';
      
      // Handle Vimeo
      if (url.includes('vimeo')) {
          // If it's a thumbnail URL (i.vimeocdn), try to extract ID (heuristic) or just fail gracefully
          if (url.includes('i.vimeocdn.com')) {
             const match = url.match(/video\/(\d+)/);
             if (match && match[1]) {
                 return `https://player.vimeo.com/video/${match[1]}`;
             }
             return url; // Fallback to image display logic in render
          }
          return url.replace('vimeo.com/', 'player.vimeo.com/video/');
      }
      
      // Handle YouTube
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
          let videoId = '';
          if (url.includes('v=')) {
              videoId = url.split('v=')[1].split('&')[0];
          } else if (url.includes('youtu.be/')) {
              videoId = url.split('youtu.be/')[1];
          }
          if (videoId) {
              return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
          }
      }
      
      return url;
  };

  return (
    <>
        <div className="w-full max-w-[500px] mx-auto flex flex-col items-center relative bg-white">
            
            {/* MEDIA BAR (Top Right like PDF) - Updated Style */}
            <div className="w-full flex justify-end gap-4 mb-4 px-2">
                {product.video && (
                    <button 
                        onClick={() => setShowVideo(true)}
                        className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105"
                        aria-label="Ver Video"
                    >
                        <span className="text-[#009FE3] font-bold text-xl uppercase tracking-wide">VIDEO</span>
                        <div className="bg-[#009FE3] text-white px-2 py-1.5 rounded-md shadow-sm flex items-center justify-center">
                             <svg className="w-6 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                             </svg>
                        </div>
                    </button>
                )}
                {product.nutritionalTable && (
                    <button 
                        onClick={() => setShowNutritionalTable(true)}
                        className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105"
                        aria-label="Ver Tabla Nutricional"
                    >
                        <div className="text-right leading-none">
                            <span className="text-[#009FE3] text-[10px] block uppercase tracking-wider">TABLA</span>
                            <span className="text-[#009FE3] text-[10px] block font-bold uppercase tracking-wider">NUTRICIONAL</span>
                        </div>
                        <div className="bg-[#009FE3] text-white p-1.5 rounded-md shadow-sm">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v14h14V6H5zm2 2h10v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" clipRule="evenodd" />
                           </svg>
                        </div>
                    </button>
                )}
            </div>

            {/* HEADER: Title and Line */}
            <div className="w-full flex flex-col items-center mb-8">
                <h2 
                    className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-center mb-2"
                    style={{ color: accentColor }}
                >
                    {product.name}
                </h2>
                {/* Thick colored underline */}
                <div 
                    className="h-2 w-full"
                    style={{ backgroundColor: accentColor }}
                />
            </div>

            {/* PRICE BUBBLES - Color matches product accent */}
            <div className="flex gap-4 mb-10 justify-center w-full flex-wrap">
                {product.prices.large && (
                    <div className="flex flex-col items-center shadow-md rounded-lg overflow-hidden">
                        <div 
                            className="text-white font-bold text-xl sm:text-2xl px-6 py-1.5 min-w-[140px] text-center"
                            style={{ backgroundColor: accentColor }}
                        >
                            {formatPrice(product.prices.large)}
                        </div>
                        <div 
                            className="text-white text-xs font-bold px-6 py-1.5 min-w-[140px] text-center uppercase tracking-wider"
                            style={{ 
                                backgroundColor: accentColor,
                                filter: 'brightness(0.85)' // Slightly darker for the label
                            }}
                        >
                            {product.prices.labelLarge}
                        </div>
                    </div>
                )}
                {product.prices.small && (
                    <div className="flex flex-col items-center shadow-md rounded-lg overflow-hidden">
                        <div 
                            className="text-white font-bold text-xl sm:text-2xl px-6 py-1.5 min-w-[140px] text-center"
                            style={{ backgroundColor: accentColor }}
                        >
                            {formatPrice(product.prices.small)}
                        </div>
                        <div 
                            className="text-white text-xs font-bold px-6 py-1.5 min-w-[140px] text-center uppercase tracking-wider"
                            style={{ 
                                backgroundColor: accentColor, 
                                filter: 'brightness(0.85)' 
                            }}
                        >
                            {product.prices.labelSmall}
                        </div>
                    </div>
                )}
                {product.prices.pack && (
                    <div className="flex flex-col items-center shadow-md rounded-lg overflow-hidden">
                        <div 
                            className="text-white font-bold text-xl sm:text-2xl px-6 py-1.5 min-w-[140px] text-center"
                            style={{ backgroundColor: accentColor }}
                        >
                            {formatPrice(product.prices.pack)}
                        </div>
                        <div 
                            className="text-white text-xs font-bold px-6 py-1.5 min-w-[140px] text-center uppercase tracking-wider"
                            style={{ 
                                backgroundColor: accentColor,
                                filter: 'brightness(0.85)'
                            }}
                        >
                            {product.prices.labelLarge}
                        </div>
                    </div>
                )}
            </div>

            {/* IMAGE AREA */}
            <div className="w-full aspect-[4/3] mb-8 relative flex items-center justify-center p-4">
                {!imageError ? (
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    /* Fallback: Stylized "Box" representing the product if image is missing */
                    <div className="relative w-48 h-full flex items-center justify-center shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                        {/* Box Front */}
                        <div 
                            className="absolute inset-0 rounded-lg flex items-center justify-center overflow-hidden"
                            style={{ 
                                backgroundColor: 'white',
                                border: `2px solid ${accentColor}` 
                            }}
                        >
                            {/* Decorative Elements mimicking box art */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundColor: accentColor }}></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-20" style={{ backgroundColor: accentColor }}></div>
                            
                            <div className="text-center p-4 z-10 flex flex-col items-center justify-center h-full">
                                <h3 className="font-black text-xl uppercase mb-2 leading-tight" style={{ color: accentColor }}>{product.name}</h3>
                                <div className="w-8 h-1 mx-auto mb-2" style={{ backgroundColor: accentColor }}></div>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">FUXION</span>
                            </div>
                        </div>
                        {/* Side/Shadow effect for 3D look */}
                        <div className="absolute top-2 -right-3 w-3 h-[96%] bg-gray-200 rounded-r-sm border-r border-gray-300 -z-10 transform skew-y-12"></div>
                    </div>
                )}
            </div>

            {/* DESCRIPTION */}
            <div className="text-center max-w-md px-4">
                <p className="text-gray-600 text-lg sm:text-xl leading-snug mb-2 font-medium">
                    {product.description}
                </p>
                <p className="text-xl sm:text-2xl font-bold mb-8" style={{ color: accentColor }}>
                    Sabor {product.flavor}.
                </p>
            </div>

            {/* REGISTRATION CODE */}
            {product.registrationCode && (
                <div className="mt-auto pt-4 pb-8">
                    <p className="text-gray-400 text-sm text-center font-light">
                        R.S.: {product.registrationCode}
                    </p>
                </div>
            )}
        </div>

        {/* MODAL FOR NUTRITIONAL TABLE */}
        {showNutritionalTable && product.nutritionalTable && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowNutritionalTable(false)}>
                <div className="bg-white p-2 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative" onClick={e => e.stopPropagation()}>
                    <button 
                        onClick={() => setShowNutritionalTable(false)}
                        className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-2 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h3 className="text-xl font-bold text-center mb-4 mt-2 text-fuxion-blue">Tabla Nutricional - {product.name}</h3>
                    <img 
                        src={product.nutritionalTable} 
                        alt={`Tabla Nutricional ${product.name}`} 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        )}

        {/* MODAL FOR VIDEO */}
        {showVideo && product.video && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
                <div className="bg-black p-1 rounded-lg max-w-4xl w-full aspect-video relative" onClick={e => e.stopPropagation()}>
                     <button 
                        onClick={() => setShowVideo(false)}
                        className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                    >
                        <span className="text-sm uppercase tracking-wider font-bold flex items-center gap-2">
                            Cerrar <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                    </button>
                    
                    {product.video.includes('i.vimeocdn.com') ? (
                         // If it's the thumbnail link provided in prompt (not parsed to video yet), show placeholder
                         <div className="absolute inset-0 flex items-center justify-center bg-black pointer-events-none">
                             <img src={product.video} className="w-full h-full object-cover opacity-50" alt="Video Thumbnail"/>
                             <div className="absolute z-10 text-white font-bold bg-black/50 px-4 py-2 rounded">Reproduciendo Video Demo</div>
                         </div>
                    ) : (
                        // YouTube or Vimeo Embed
                        <iframe 
                            src={getEmbedUrl(product.video)}
                            className="w-full h-full rounded"
                            title={`Video ${product.name}`}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        )}
    </>
  );
};