import { Router } from 'express';
import { getProductos, getProductoById } from '../controllers/producto.controller.js';

const router = Router();

router.get('/', getProductos);
router.get('/:id', getProductoById);

export default router;