import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

// Configuración adaptada para usar la URL de conexión (Neon, Render, Supabase)
// o caer en variables de entorno individuales si no existiera la URL.
const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Requerido para conexiones SSL en proveedores en la nube como Neon
      },
    }
  : {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    };

export const pool = new Pool(poolConfig);

pool.on('connect', () => {
  console.log('Conexión establecida con la base de datos PostgreSQL (Neon)');
});

pool.on('error', (err) => {
  console.error('Error inesperado en el cliente inactivo de pg', err);
  process.exit(-1);
});