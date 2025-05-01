import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Check } from 'lucide-react';
import Button from '../ui/Button';
import { products } from '../../data/products';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly' | 'lifetime'>('monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (product) {
      document.title = `${product.name} | TechSolve`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for does not exist.</p>
          <Link to="/products" className="text-primary-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Back to products link */}
      <div className="container-custom mb-8">
        <Link
          to="/products"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Products
        </Link>
      </div>

      {/* Product Hero */}
      <div className="container-custom mb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <div className="mb-4">
              <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-sm font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {product.description}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3 mb-8">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img
                src={product.screenshot}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Select a Plan
              </h3>

              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                      selectedPlan === 'monthly'
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedPlan('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium border-t border-b ${
                      selectedPlan === 'yearly'
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedPlan('yearly')}
                  >
                    Yearly
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                      selectedPlan === 'lifetime'
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedPlan('lifetime')}
                  >
                    Lifetime
                  </button>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price[selectedPlan]}
                  </span>
                  {selectedPlan !== 'lifetime' && (
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      /{selectedPlan === 'monthly' ? 'month' : 'year'}
                    </span>
                  )}
                </div>
                {selectedPlan === 'yearly' && (
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Save KSH {product.price.monthly * 12 - product.price.yearly} per year
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-4">
                <Button variant="primary" size="lg">
                  Buy Now
                </Button>
                <Button variant="outline" size="lg" href="#demo">
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Request a Demo
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
              Fill out the form below to schedule a personalized demo of {product.name}.
            </p>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell us about your specific needs and requirements..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={relatedProduct.screenshot}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <Link
                    to={`/products/${relatedProduct.id}`}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                  >
                    View Details
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;