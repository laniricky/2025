import Product from '../models/Product.js';

export const addReview = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user._id;
    const userName = req.user.name;

    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Check if already reviewed
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === userId.toString()
    );

    if (alreadyReviewed) {
      return res.status(400).json({ error: 'Product already reviewed by you' });
    }

    const review = {
      user: userId,
      name: userName,
      rating: Number(rating),
      comment,
    };

    product.reviews.push(review);

    // Recalculate average rating
    product.averageRating =
      product.reviews.reduce((acc, r) => acc + r.rating, 0) /
      product.reviews.length;

    await product.save();
    res.json({ success: true, message: 'Review added' });

  } catch (err) {
    console.error('Review Error:', err);
    res.status(500).json({ error: 'Failed to add review' });
  }
};

