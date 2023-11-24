import express from 'express';
import { orderControllers } from './order.controllers';

const router = express.Router();

// PUT /api/users/:userId/orders
router.put('/:userId/orders', orderControllers.createNewOrder);
// GET /api/users/:userId/orders
router.get('/:userId/orders', orderControllers.getAllOrders);
// GET /api/users/:userId/orders/total-price
router.get(
  '/:userId/orders/total-price',
  orderControllers.calculateTotalOrdersPrice,
);

export const ordersRouters = router;
