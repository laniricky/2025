import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/authMiddleware.js';
import {
  getAllUsers,
  deleteUser,
  getAllOrders,
  getAllProducts
} from '../controllers/adminController.js';

const router = express.Router();

// 👥 Users
router.get('/users', protect, isAdmin, getAllUsers);
router.delete('/users/:id', protect, isAdmin, deleteUser);

// 📦 Orders
router.get('/orders', protect, isAdmin, getAllOrders);

// 🛍 Products
router.get('/products', protect, isAdmin, getAllProducts);

export default router;

