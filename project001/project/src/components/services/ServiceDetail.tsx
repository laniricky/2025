import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Code, Settings, KeyRound, LifeBuoy, ChevronLeft } from 'lucide-react';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (service) {
      document.title = `${service.title} | TechSolve`;
    }
  }, [service]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={48} className="text-primary-600 dark:text-primary-400" />;
      case 'Settings':
        return <Settings size={48} className="text-primary-600 dark:text-primary-400" />;
      case 'KeyRound':
        return <KeyRound size={48} className="text-primary-600 dark:text-primary-400" />;
      case 'LifeBuoy':
        return <LifeBuoy size={48} className="text-primary-600 dark:text-primary-400" />;
      default:
        return <Code size={48} className="text-primary-600 dark:text-primary-400" />;
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <p className="mb-6">The service you're looking for does not exist.</p>
          <Link to="/services" className="text-primary-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Back to services link */}
      <div className="container-custom mb-8">
        <Link
          to="/services"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Services
        </Link>
      </div>

      {/* Service Hero */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="mb-6">{renderIcon(service.icon)}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {service.description}
              </p>
              <Button href="/contact">Request Consultation</Button>
            </motion.div>

            <motion.div
              className="md:w-1/2 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Key Features
              </h3>
              <ul className="space-y-3">
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
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Benefits */}
      <div className="container-custom mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Why Choose Our {service.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Expertise & Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our team brings decades of combined experience to deliver solutions that work for your specific needs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Cutting-Edge Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage the latest technologies and methodologies to ensure your solution remains competitive.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Dedicated Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our relationship doesn't end at deployment—we provide ongoing support to ensure your success.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We start by understanding your business needs and challenges in detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experts create a detailed roadmap and technical blueprint for your solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We develop and implement your solution using agile methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide ongoing support and maintenance to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom">
        <div className="bg-primary-600 dark:bg-primary-800 rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how our {service.title} can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              className="bg-white text-primary-700 hover:bg-primary-50"
            >
              Contact Us
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="border-white text-white hover:bg-primary-700"
            >
              Explore Other Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;