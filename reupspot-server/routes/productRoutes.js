import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
} from '../controllers/productController.js';
import { protect } from '../middleware/auth.js';
import { toggleWishlist, rateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/', protect, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id/wishlist', protect, toggleWishlist);
router.post('/:id/rate', protect, rateProduct);

export default router;

