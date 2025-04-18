import User from '../models/User.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

// 👥 Users
export const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted' });
};

// 📦 Orders
export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('buyer', 'name').populate('seller', 'name');
  res.json(orders);
};

// 🛍 Products
export const getAllProducts = async (req, res) => {
  const products = await Product.find().populate('seller', 'name');
  res.json(products);
};

