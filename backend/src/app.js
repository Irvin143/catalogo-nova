import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import productoRoutes from './routes/producto.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET'] // Al ser solo catálogo público, solo permitimos GET
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