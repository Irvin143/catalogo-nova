import { pool } from '../config/database.js';

export const obtenerCategoriasActivas = async () => {
  const query = `
    SELECT id, nombre, descripcion 
    FROM categorias 
    WHERE activo = true 
    ORDER BY nombre ASC
  `;
  const result = await pool.query(query);
  return result.rows;
};