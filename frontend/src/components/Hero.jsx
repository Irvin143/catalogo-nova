import React from 'react';
import { ArrowRight, ShieldCheck, Truck, MapPin, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-brand-50/50 via-white to-gray-50 py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: Copy and CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Compra 100% Segura · Pago Contra Entrega</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Encuentra los productos <span className="text-brand-600">ideales para ti</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explora nuestra variedad de productos en Culiacán. Revisa el catálogo, elige lo que necesites y realiza tu pedido con total seguridad pagando al recibirlo en tus manos.
            </p>

            {/* Main Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20"
              >
                Ver Catálogo de Productos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Feature Badges Grid */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Pago Contra Entrega</h4>
                  <p className="text-[11px] text-gray-500">Pagas al recibir el producto</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Truck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Envío a Domicilio</h4>
                  <p className="text-[11px] text-gray-500">Aplica costo extra</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Ubicación</h4>
                  <p className="text-[11px] text-gray-500">Culiacán, Sinaloa</p>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Visual Hero Image */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-3xl blur-2xl opacity-15"></div>
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="Exposición de productos disponibles con pago contra entrega en Culiacán"
                className="w-full h-[380px] sm:h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}