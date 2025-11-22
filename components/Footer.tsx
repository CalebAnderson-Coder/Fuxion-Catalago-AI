import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-fuxion-blue mb-4">FUXION</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Somos una empresa latina multinacional dedicada a la investigación, desarrollo y producción de alimentos nutracéuticos.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Certificaciones</h4>
            <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-gray-800 rounded text-xs text-gray-300">Clean Label</span>
                <span className="px-3 py-1 bg-gray-800 rounded text-xs text-gray-300">HACCP</span>
                <span className="px-3 py-1 bg-gray-800 rounded text-xs text-gray-300">BPM</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm">Colombia</p>
            <p className="text-gray-400 text-sm mt-2">fuxion.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Fuxion Biotech. Todos los derechos reservados.</p>
          <p className="mt-2">Los precios mostrados son referenciales basados en el catálogo Colombia.</p>
        </div>
      </div>
    </footer>
  );
};