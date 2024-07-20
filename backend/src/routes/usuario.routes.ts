import express from 'express';
import { clienteGetAllJson, clienteGetById, clienteAddJson, clienteUpdateJson, clienteDeleteJson, getUserOrders } from '../controllers/usuario.controller';

const router = express.Router();

router.get('/', clienteGetAllJson);
router.get('/:id', clienteGetById);
router.post('/register', clienteAddJson);
router.put('/:id', clienteUpdateJson); // Certifique-se de que esta rota está definida corretamente
router.delete('/:id', clienteDeleteJson);
router.get('/:id/orders', getUserOrders);

export default router;
