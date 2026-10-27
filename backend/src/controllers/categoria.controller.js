import * as categoriaService from '../services/categoria.service.js';

export const getCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.obtenerCategoriasActivas();
    res.json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor al obtener categorías.' });
  }
};