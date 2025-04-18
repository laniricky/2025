import Product from '../models/Product.js';

export const toggleWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user._id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const index = product.wishlist.indexOf(userId);

    if (index === -1) {
      product.wishlist.push(userId); // Add to wishlist
    } else {
      product.wishlist.splice(index, 1); // Remove from wishlist
    }

    await product.save();

    res.json({ success: true, isWishlisted: index === -1 });
  } catch (err) {
    console.error('Wishlist Error:', err);
    res.status(500).json({ error: 'Wishlist action failed' });
  }
};

