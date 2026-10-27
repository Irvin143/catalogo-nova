import React from 'react';
import { MessageSquare, ShieldCheck, Truck, MapPin } from 'lucide-react';

export function ContactSection({ whatsappNumber }) {
  const cleanWA = whatsappNumber ? whatsappNumber.replace(/\D/g, '') : '';

  return (
    <section id="contacto" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-full">
                Atención Personalizada
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                ¿Te interesa alguno de nuestros productos?
              </h2>
              <p className="text-brand-100 text-base sm:text-lg leading-relaxed">
                Envíanos un mensaje por WhatsApp para confirmar la disponibilidad. Te atendemos de inmediato.
              </p>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="flex justify-center pt-2">
              <a
                href={`https://wa.me/${cleanWA}?text=${encodeURIComponent('Hola, me gustaría solicitar información sobre los productos del catálogo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/30 scale-100 hover:scale-105"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Solicitar Producto por WhatsApp</span>
              </a>
            </div>

            {/* Trust and Policy Cards */}
            <div className="pt-8 border-t border-brand-700/50 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Pago Contra Entrega</span>
                </div>
                <p className="text-xs text-brand-100 leading-normal">
                  Pagas el producto hasta tenerlo físicamente en tus manos para tu total tranquilidad.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                <div className="flex items-center gap-2 text-brand-300 font-semibold text-sm">
                  <Truck className="w-5 h-5 flex-shrink-0" />
                  <span>Servicio a Domicilio</span>
                </div>
                <p className="text-xs text-brand-100 leading-normal">
                  Contamos con entregas locales directas a tu ubicación (aplica un costo extra por concepto de flete).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Ubicación Local</span>
                </div>
                <p className="text-xs text-brand-100 leading-normal">
                  Atendemos y entregamos de manera local en la ciudad de Culiacán, Sinaloa.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}