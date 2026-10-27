import * as productoService from '../services/producto.service.js';

export const getProductos = async (req, res) => {
  try {
    const { buscar, categoria } = req.query;
    
    // Validar que categoria sea un número si existe
    if (categoria && isNaN(parseInt(categoria))) {
      return res.status(400).json({ mensaje: 'El filtro de categoría debe ser un número válido.' });
    }

    const productos = await productoService.obtenerProductos({ buscar, categoria });
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor al obtener productos.' });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (isNaN(parseInt(id))) {
      return res.status(400).json({ mensaje: 'El ID del producto debe ser un número válido.' });
    }

    const producto = await productoService.obtenerProductoPorId(id);
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado o inactivo.' });
    }

    res.json(producto);
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${req.params.id}:`, error);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};