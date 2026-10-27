import React from 'react';
import { Store, MapPin, ShieldCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <div className="p-1.5 bg-brand-600 rounded-lg text-white">
              <Store className="w-5 h-5" />
            </div>
            <span>Catálogo Nova</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#catalogo" className="hover:text-white transition-colors">Productos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/80 px-3.5 py-1.5 rounded-full border border-gray-700">
            <MapPin className="w-4 h-4 text-brand-500" />
            <span>Culiacán, Sinaloa</span>
          </div>

        </div>

        {/* Security & COD Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-emerald-400/90 bg-emerald-950/30 border border-emerald-900/50 py-2 px-4 rounded-xl max-w-md mx-auto text-center">
          <ShieldCheck className="w-4 h-4 flex-shrink-0 text-emerald-400" />
          <span>Seguridad garantizada: Pagas únicamente al recibir tu producto.</span>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>© {currentYear} Catálogo Nova · Culiacán, Sinaloa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}