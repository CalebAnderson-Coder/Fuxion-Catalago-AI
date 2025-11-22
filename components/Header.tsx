import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white pt-6 pb-2 px-4 sm:px-8 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        {/* Left: Indice / Home */}
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 text-fuxion-blue group"
        >
          <div className="bg-fuxion-blue text-white p-2 rounded-lg group-hover:bg-fuxion-darkBlue transition-colors shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-fuxion-blue mt-1">INDICE</span>
        </button>

        {/* Right: Video & Table Link Mockups */}
        <div className="flex items-center h-full mt-1">
            {/* Video Section */}
            <div className="flex items-center gap-2 text-fuxion-blue mr-4">
                <span className="text-fuxion-blue font-bold text-sm hidden sm:block uppercase tracking-wider">VIDEO</span>
                <div className="bg-fuxion-blue text-white px-2 py-1 rounded-md">
                  <svg className="w-5 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-fuxion-blue mx-2 opacity-30"></div>

            {/* Nutrition Table Section */}
            <div className="flex items-center gap-2 text-fuxion-blue ml-2">
                <div className="text-right hidden sm:block leading-none">
                    <span className="text-[9px] block uppercase tracking-wider">TABLA</span>
                    <span className="text-[9px] block font-bold uppercase tracking-wider">NUTRICIONAL</span>
                </div>
                <div className="bg-fuxion-blue text-white p-1.5 rounded-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v14h14V6H5zm2 2h10v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" clipRule="evenodd" />
                  </svg>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}