import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types';

type ProductCardProps = {
  product: Product;
  index: number;
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={product.screenshot}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 h-12 line-clamp-2">
          {product.description}
        </p>
        <div className="mb-4">
          <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs font-semibold px-2.5 py-0.5 rounded">
            {product.category}
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Starting at</span>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              ${product.price.monthly}
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </p>
          </div>
        </div>
        <Link
          to={`/products/${product.id}`}
          className="w-full inline-block text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;