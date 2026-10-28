import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import productoRoutes from './routes/producto.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';

const app = express();

// 2. Definir los orígenes permitidos
const allowedOrigins = [
  'https://catalogonova.vercel.app/',
  'https://front-catalogo-nova.vercel.app', // Tu frontend desplegado
  'http://localhost:5173',                  // Desarrollo local (Vite)
  'http://localhost:3000'                   // Desarrollo local (React/Next)
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir peticiones sin 'origin' (como Postman o curl) o si están en la lista
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por la política de CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);

// Ruta raíz para verificación
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Catálogo Nova funcionando correctamente.' });
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada.' });
});

export default app;