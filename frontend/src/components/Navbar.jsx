import React, { useState } from 'react';
import { Store, MessageSquare, Menu, X, MapPin } from 'lucide-react';

export function Navbar({ whatsappNumber }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cleanWA = whatsappNumber ? whatsappNumber.replace(/\D/g, '') : '';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 text-brand-700 font-bold text-xl tracking-tight">
            <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
              <Store className="w-6 h-6" />
            </div>
            <span>Catálogo <span className="text-gray-900">Nova</span></span>
          </a>

          {/* Location Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Culiacán, Sinaloa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            <a href="#inicio" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#catalogo" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Productos
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${cleanWA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
              aria-label="Contactar por WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Ubicación: Culiacán, Sinaloa</span>
          </div>
          <nav className="flex flex-col space-y-2">
            <a
              href="#inicio"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Inicio
            </a>
            <a
              href="#catalogo"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Productos
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Contacto
            </a>
          </nav>
          <div className="pt-2 border-t border-gray-100">
            <a
              href={`https://wa.me/${cleanWA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-xl"
            >
              <MessageSquare className="w-4 h-4" />
              Enviar WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}