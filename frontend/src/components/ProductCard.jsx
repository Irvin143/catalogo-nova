import React from 'react';
import { MessageSquare, Tag } from 'lucide-react';
import { formatCurrency } from '../services/api';

export function ProductCard({ producto, whatsappNumber }) {
  const { nombre, descripcion, precio, imagen_url, categoria_nombre } = producto;

  const cleanWA = whatsappNumber ? whatsappNumber.replace(/\D/g, '') : '';
  const message = encodeURIComponent(
    `Hola, me interesa obtener más información sobre el producto: "${nombre}" (Precio: ${formatCurrency(precio)}).`
  );
  const waUrl = `https://wa.me/${cleanWA}?text=${message}`;

  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group">
      
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={imagen_url || 'https://placehold.co/600x400/1e293b/ffffff?text=Producto'}
          alt={`Fotografía del producto ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {categoria_nombre && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 backdrop-blur-md text-gray-700 shadow-sm">
            <Tag className="w-3 h-3 text-brand-600" />
            {categoria_nombre}
          </span>
        )}
      </div>

      {/* Product Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">
            {nombre}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {descripcion || 'Sin descripción disponible.'}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Precio</span>
            <span className="text-xl font-extrabold text-gray-900">
              {formatCurrency(precio)}
            </span>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
            aria-label={`Consultar sobre ${nombre} por WhatsApp`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar</span>
          </a>
        </div>
      </div>

    </article>
  );
}