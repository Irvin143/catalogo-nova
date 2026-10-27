import React from 'react';
import { ProductCard } from './ProductCard';
import { Loader2, AlertCircle, PackageX } from 'lucide-react';

export function ProductGrid({ productos, loading, error, whatsappNumber }) {
  if (loading) {
    return (
      <div className="py-20 text-center space-y-3" aria-live="polite">
        <Loader2 className="w-10 h-10 text-brand-600 animate-spin mx-auto" />
        <p className="text-gray-600 font-medium text-sm">Cargando catálogo de productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-6 max-w-lg mx-auto bg-red-50 border border-red-100 rounded-2xl text-center space-y-3" role="alert">
        <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
        <h3 className="text-base font-bold text-red-900">Ocurrió un error al cargar el catálogo</h3>
        <p className="text-sm text-red-700">{error}</p>
      </div>
    );
  }

  if (!productos || productos.length === 0) {
    return (
      <div className="py-16 px-4 text-center bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3 max-w-md mx-auto">
        <PackageX className="w-12 h-12 text-gray-300 mx-auto" />
        <h3 className="text-lg font-bold text-gray-800">No se encontraron productos</h3>
        <p className="text-sm text-gray-500">
          Intenta ajustando tu búsqueda o cambiando el filtro de categoría seleccionada.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productos.map((prod) => (
        <ProductCard key={prod.id} producto={prod} whatsappNumber={whatsappNumber} />
      ))}
    </div>
  );
}