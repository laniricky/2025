import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  const { title, description, price, location, images, condition, category } = req.body;
  const userId = req.user?.userId;

  try {
    const newProduct = new Product({
      title,
      description,
      price,
      location,
      images,
      condition,
      category,
      seller: userId,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Could not create product' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('seller', 'name');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews.user', 'seller', 'name');
    if (!product) return res.status(404).json({ error: 'Not found' });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error getting product' });
  }
};
export const toggleWishlist = async (req, res) => {
  const productId = req.params.id;
  const userId = req.user.userId;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const index = product.wishlist.indexOf(userId);
    if (index > -1) {
      product.wishlist.splice(index, 1); // remove
    } else {
      product.wishlist.push(userId); // add
    }

    await product.save();
    res.json({ message: 'Wishlist updated', wishlist: product.wishlist });
  } catch (err) {
    res.status(500).json({ error: 'Could not update wishlist' });
  }
};
export const rateProduct = async (req, res) => {
  const productId = req.params.id;
  const { star, comment } = req.body;
  const userId = req.user.userId;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const existingRating = product.ratings.find((r) => r.user.toString() === userId);

    if (existingRating) {
      existingRating.star = star;
      existingRating.comment = comment;
    } else {
      product.ratings.push({ user: userId, star, comment });
    }

    await product.save();
    res.json({ message: 'Rating submitted', ratings: product.ratings });
  } catch (err) {
    res.status(500).json({ error: 'Could not submit rating' });
  }
};

