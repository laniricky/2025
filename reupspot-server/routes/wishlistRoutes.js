import express from 'express';
import { toggleWishlist } from '../controllers/wishlistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:productId', protect, toggleWishlist);

export default router;

