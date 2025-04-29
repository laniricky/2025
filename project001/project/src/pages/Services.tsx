import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Settings, KeyRound, LifeBuoy } from 'lucide-react';
import { services } from '../data/services';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | TechSolve';
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              We offer a comprehensive range of software services to help businesses innovate,
              grow, and stay competitive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className="p-8">
                  <div className="mb-4">{renderIcon(service.icon)}</div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
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
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We follow a proven methodology to ensure successful outcomes for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We start by understanding your business, goals, and challenges through in-depth consultations.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Solution Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our experts create a tailored plan and technical architecture to meet your requirements.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We develop and deploy your solution using agile methodologies with regular updates and feedback.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We provide continuous maintenance, updates, and support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="bg-primary-600 dark:bg-primary-700 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-primary-100 mb-8">
                Contact us today to discuss how our services can help your organization achieve its goals.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 font-medium rounded-lg transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;