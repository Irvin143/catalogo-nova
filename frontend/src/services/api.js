const API_URL = import.meta.env.VITE_API_URL + '/api';

/**
 * Formatea un monto numérico a formato de Moneda Nacional Mexicana (MXN).
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(amount);
};

/**
 * Obtiene el listado de productos aplicando filtros opcionales.
 */
export const fetchProductos = async ({ buscar = '', categoria = '' } = {}) => {
  const params = new URLSearchParams();
  if (buscar.trim()) params.append('buscar', buscar.trim());
  if (categoria) params.append('categoria', categoria);

  const queryString = params.toString();
  const url = `${API_URL}/productos${queryString ? `?${queryString}` : ''}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('No se pudo conectar con el servidor para obtener los productos.');
  }
  return await response.json();
};

/**
 * Obtiene todas las categorías activas.
 */
export const fetchCategorias = async () => {
  const response = await fetch(`${API_URL}/categorias`);
  if (!response.ok) {
    throw new Error('No se pudo obtener el listado de categorías.');
  }
  return await response.json();
};