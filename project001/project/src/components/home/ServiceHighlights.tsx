import { motion } from 'framer-motion';
import { Code, Settings, KeyRound, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const ServiceHighlights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={36} className="text-primary-600 dark:text-primary-400" />;
      case 'Settings':
        return <Settings size={36} className="text-primary-600 dark:text-primary-400" />;
      case 'KeyRound':
        return <KeyRound size={36} className="text-primary-600 dark:text-primary-400" />;
      case 'LifeBuoy':
        return <LifeBuoy size={36} className="text-primary-600 dark:text-primary-400" />;
      default:
        return <Code size={36} className="text-primary-600 dark:text-primary-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our expertise can transform your business with tailored software solutions.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">{renderIcon(service.icon)}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
              >
                Learn more
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;