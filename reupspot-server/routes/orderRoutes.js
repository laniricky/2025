import express from 'express';
import { placeOrder, getUserOrders, updateOrderStatus } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, placeOrder);                 // Buyer places order
router.get('/', protect, getUserOrders);              // Buyer/seller views their orders
router.put('/:id/status', protect, updateOrderStatus); // Seller/admin updates status

export default router;

