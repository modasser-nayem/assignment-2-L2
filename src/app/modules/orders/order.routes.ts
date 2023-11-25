import express from 'express';
import { orderControllers } from './order.controllers';

const router = express.Router();

router.put('/:userId/orders', orderControllers.createNewOrder);
router.get('/:userId/orders', orderControllers.getAllOrders);
router.get(
   '/:userId/orders/total-price',
   orderControllers.calculateTotalOrdersPrice,
);

export const ordersRouters = router;
