import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { products } from '../../data/products';

const FeaturedProduct = () => {
  // Featured product (first product from the list)
  const featuredProduct = products[0];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Product
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our flagship solution designed to transform your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {featuredProduct.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {featuredProduct.description}
            </p>

            <ul className="space-y-3 mb-8">
              {featuredProduct.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button href={`/products/${featuredProduct.id}`}>Learn More</Button>
              <Button href={`/products/${featuredProduct.id}#demo`} variant="outline">
                Request Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={featuredProduct.screenshot}
              alt={featuredProduct.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;