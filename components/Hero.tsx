
import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white w-full">
        {/* Cover Section - Page 1 style */}
        <div className="relative bg-white min-h-[85vh] w-full flex flex-col overflow-hidden">
            {/* Top Text Section */}
            <div className="px-8 pt-12 pb-4 relative z-10 max-w-6xl mx-auto w-full text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal text-fuxion-blue leading-[0.9]">
                    FUXION VENEZUELA
                    <br />
                    <span className="font-black text-3xl sm:text-4xl md:text-6xl mt-2 block">CATÁLOGO DE PRODUCTOS</span>
                </h1>
                
                {/* Venezuela Flag Circle (Equal stripes: Yellow, Blue, Red) */}
                <div className="mt-6 flex justify-center sm:justify-start">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm relative">
                        {/* Yellow Band (1/3) */}
                        <div className="absolute top-0 w-full h-1/3 bg-[#FFCC00]"></div>
                        {/* Blue Band (1/3) with subtle stars hint */}
                        <div className="absolute top-1/3 w-full h-1/3 bg-[#00247D] flex justify-center items-center gap-[2px]">
                             {/* Micro stars representation */}
                             <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                             <div className="w-0.5 h-0.5 bg-white rounded-full mb-1"></div>
                             <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        </div>
                        {/* Red Band (1/3) */}
                        <div className="absolute bottom-0 w-full h-1/3 bg-[#CF142B]"></div>
                    </div>
                </div>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 relative mt-4 w-full h-full min-h-[400px] flex items-end justify-center">
                {!imageError ? (
                    <img 
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop" 
                        alt="Mujer Fitness Fuxion" 
                        className="w-full h-full object-cover object-top absolute inset-0"
                        onError={() => setImageError(true)}
                    />
                ) : (
                   // Fallback if user hasn't added the image yet - Clean Fuxion styling
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                       <div className="text-center opacity-10">
                           <svg className="w-64 h-64 mx-auto text-fuxion-blue" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                           </svg>
                           <p className="text-4xl font-black mt-4 font-sans">FUXION</p>
                       </div>
                   </div>
                )}
                
                {/* Gradient overlay for text legibility if image is present */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 h-40 pointer-events-none"></div>
            </div>
            
            {/* Bottom Right Blue Triangle Decoration */}
            <div 
                className="absolute bottom-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-fuxion-blue z-20 origin-bottom-right transform rotate-45 translate-y-1/2 translate-x-1/4"
            />
            
            {/* Footer Branding */}
            <div className="absolute bottom-8 right-8 z-30 text-white text-right">
                <h2 className="text-3xl font-black tracking-tight mb-1">FUXION</h2>
                <p className="text-sm font-light">fuxion.com</p>
            </div>
        </div>

        {/* Intro Text - Page 3 style (Blue Background) */}
        <div className="bg-fuxion-blue text-white py-24 px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-5xl sm:text-7xl font-thin mb-1 leading-none">¿QUIÉNES</h2>
                <h2 className="text-5xl sm:text-7xl font-bold mb-10 leading-none">SOMOS?</h2>
                
                <div className="space-y-6 text-lg sm:text-xl font-light leading-relaxed max-w-3xl text-justify sm:text-left">
                    <p>
                        Somos Fuxion Biotech, una empresa latina multinacional dedicada a la investigación, desarrollo y producción de 
                        <span className="font-semibold"> alimentos nutracéuticos</span> que complementan tu nutrición para alcanzar resultados únicos en tu organismo, gracias a la tecnología propietaria y patentada de Fuxion®; brindándote la oportunidad de alcanzar una salud plena. Así cumplimos una promesa simple, pero trascendente:
                        <br/>
                        <span className="font-bold not-italic">¡Mejoramos tu vida!</span>
                    </p>
                    
                    <p>
                        En Fuxion® entendemos que la salud no es sólo “no enfermarse”, sino desarrollar al máximo el potencial de tu organismo para lograr bienestar interno y que este se refleje en tu vida cotidiana. Un cuerpo en salud promueve una mejor vida.
                    </p>

                    <p>
                        La verdadera salud es la que integra el bienestar físico, emocional y financiero.
                    </p>
                </div>
            </div>
            
            {/* Decorative background geometric lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <svg width="100%" height="100%" className="absolute right-0 top-0 h-full w-1/2">
                    <circle cx="80%" cy="20%" r="200" stroke="white" strokeWidth="1" fill="none" />
                    <circle cx="80%" cy="20%" r="160" stroke="white" strokeWidth="1" fill="none" />
                    <circle cx="80%" cy="20%" r="120" stroke="white" strokeWidth="1" fill="none" />
                 </svg>
            </div>
        </div>
    </div>
  );
};
