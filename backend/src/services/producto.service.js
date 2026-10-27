import { pool } from '../config/database.js';

export const obtenerProductos = async (filtros = {}) => {
  let query = `
    SELECT p.id, p.nombre, p.descripcion, p.precio, p.imagen_url, 
           c.id as categoria_id, c.nombre as categoria_nombre
    FROM productos p
    LEFT JOIN categorias c ON p.categoria_id = c.id
    WHERE p.activo = true
  `;
  
  const queryParams = [];
  let paramCount = 1;

  if (filtros.buscar) {
    query += ` AND p.nombre ILIKE $${paramCount}`;
    queryParams.push(`%${filtros.buscar}%`);
    paramCount++;
  }

  if (filtros.categoria) {
    query += ` AND p.categoria_id = $${paramCount}`;
    queryParams.push(filtros.categoria);
    paramCount++;
  }

  query += ` ORDER BY p.id DESC`;

  const result = await pool.query(query, queryParams);
  return result.rows;
};

export const obtenerProductoPorId = async (id) => {
  const query = `
    SELECT p.id, p.nombre, p.descripcion, p.precio, p.imagen_url, 
           c.id as categoria_id, c.nombre as categoria_nombre
    FROM productos p
    LEFT JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = $1 AND p.activo = true
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};