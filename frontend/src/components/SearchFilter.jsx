import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';

export function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categorias,
  onReset
}) {
  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== '';

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        
        {/* Search Input */}
        <div className="sm:col-span-7 lg:col-span-8 relative">
          <label htmlFor="search-input" className="sr-only">Buscar por nombre</label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar productos por nombre..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm"
          />
        </div>

        {/* Category Select */}
        <div className="sm:col-span-5 lg:col-span-4 relative">
          <label htmlFor="category-select" className="sr-only">Filtrar por categoría</label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Filter className="w-4 h-4" />
          </div>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm appearance-none cursor-pointer"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Active Filters Reset Indicator */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500">
          <span>Filtros activos aplicados</span>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}