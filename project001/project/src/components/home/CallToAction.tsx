import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-600 dark:bg-primary-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Connect with our team today to explore how our software solutions can drive efficiency, 
            growth, and innovation for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              className="bg-white text-primary-700 hover:bg-primary-50"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              href="/products"
              variant="outline"
              className="border-white text-white hover:bg-primary-700"
              size="lg"
            >
              Explore Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;