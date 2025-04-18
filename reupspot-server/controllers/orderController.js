import Order from '../models/Order.js';
import Product from '../models/Product.js';

export const placeOrder = async (req, res) => {
  const { productId, quantity, deliveryAddress, paymentMethod } = req.body;
  const buyer = req.user.userId;

  try {
    const product = await Product.findById(productId).populate('seller');
    if (!product || product.sold) return res.status(404).json({ error: 'Product not available' });

    const total = product.price * quantity;

    const newOrder = new Order({
	    buyer: req.user._id,
      seller: product.seller._id,
      product: product._id,
      quantity,
      total,
      deliveryAddress,
      paymentMethod
    });

    await newOrder.save();

    // Optionally mark product as sold
    product.sold = true;
    await product.save();

    res.status(201).json(newOrder);
   } catch (err) {
  console.error('Order Error:', err); // 🔍 Add this
  res.status(500).json({ error: 'Order failed' });
}

  };

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [
        { buyer: req.user.userId },
        { seller: req.user.userId }
      ]
    }).populate('product buyer seller');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get orders' });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = status;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order' });
  }
};

