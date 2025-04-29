import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const SupportForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For demo purposes, we'll just set the submitted state
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600 dark:text-green-400"
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
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Support Ticket Submitted
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Thank you for reaching out. Our support team will review your request and respond
          shortly. You will receive a confirmation email with your ticket number.
        </p>
        <Button onClick={() => setFormSubmitted(false)}>Submit Another Request</Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Submit a Support Request
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="product"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Product
          </label>
          <select
            id="product"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          >
            <option value="">Select a product</option>
            <option value="data-analyst-pro">DataAnalyst Pro</option>
            <option value="project-master">ProjectMaster</option>
            <option value="secure-vault">SecureVault</option>
            <option value="customer-connect">CustomerConnect</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="issue_type"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Issue Type
          </label>
          <select
            id="issue_type"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          >
            <option value="">Select issue type</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Question</option>
            <option value="feature">Feature Request</option>
            <option value="account">Account Management</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Priority
          </label>
          <select
            id="priority"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          >
            <option value="low">Low - General question or request</option>
            <option value="medium">Medium - Issue affecting productivity</option>
            <option value="high">High - Serious problem needing quick resolution</option>
            <option value="critical">Critical - System down or data loss</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Description
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce, and what you've tried so far."
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="attachments"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Attachments (optional)
          </label>
          <input
            type="file"
            id="attachments"
            multiple
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            You can attach screenshots, logs, or other relevant files. Max 5MB per file.
          </p>
        </div>

        <Button type="submit" className="w-full">
          Submit Support Request
        </Button>
      </form>
    </motion.div>
  );
};

export default SupportForm;