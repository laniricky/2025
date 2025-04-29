import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white dark:from-gray-900 dark:to-gray-900 -z-10" />
      
      {/* Animated shapes */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Transforming Business Through{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Software Innovation
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-10"
            variants={itemVariants}
          >
            We create custom software solutions that drive efficiency, enhance user experience, 
            and deliver measurable business value for forward-thinking organizations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button href="/services" size="lg">
              Explore Our Services
            </Button>
            <Button href="/products" variant="outline" size="lg" className="group">
              View Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;