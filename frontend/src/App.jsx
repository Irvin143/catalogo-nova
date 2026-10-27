import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchFilter } from './components/SearchFilter';
import { ProductGrid } from './components/ProductGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { fetchProductos, fetchCategorias } from './services/api';

export function App() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Número de WhatsApp configurado desde .env
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '526671234567';

  // Cargar categorías al iniciar
  useEffect(() => {
    const loadCategorias = async () => {
      try {
        const data = await fetchCategorias();
        setCategorias(data);
      } catch (err) {
        console.error('Error cargando categorías:', err);
      }
    };
    loadCategorias();
  }, []);

  // Cargar productos al cambiar filtros
  useEffect(() => {
    const loadProductos = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProductos({
          buscar: searchQuery,
          categoria: selectedCategory
        });
        setProductos(data);
      } catch (err) {
        setError(err.message || 'Error de conexión');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      loadProductos();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar whatsappNumber={whatsappNumber} />
      
      <main className="flex-1">
        <Hero />

        <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Catálogo de Productos
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Selecciona cualquier producto y consulta su disponibilidad directamente por WhatsApp.
            </p>
          </div>

          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categorias={categorias}
            onReset={handleResetFilters}
          />

          <ProductGrid
            productos={productos}
            loading={loading}
            error={error}
            whatsappNumber={whatsappNumber}
          />
        </section>

        <ContactSection whatsappNumber={whatsappNumber} />
      </main>

      <Footer />
    </div>
  );
}

export default App;