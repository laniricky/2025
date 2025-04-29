import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software solutions built from the ground up to meet your unique business needs and challenges.',
    icon: 'Code',
    features: [
      'Custom software solutions',
      'Web and mobile applications',
      'System integration services',
      'API development for third-party tools',
      'Scalable architecture design',
      'Performance optimization'
    ]
  },
  {
    id: 'software-customization',
    title: 'Software Customization',
    description: 'Tailor existing software to better fit your workflow, improving efficiency and user experience.',
    icon: 'Settings',
    features: [
      'UI/UX improvements to existing software',
      'Feature enhancements based on customer feedback',
      'Industry-specific workflow modifications',
      'Performance optimizations',
      'Legacy system modernization',
      'Integration with other business tools'
    ]
  },
  {
    id: 'license-selling',
    title: 'License Selling',
    description: 'Premium software licenses for a wide range of business applications with flexible pricing options.',
    icon: 'KeyRound',
    features: [
      'Flexible licensing models',
      'Volume discounts for businesses',
      'Monthly, yearly, and lifetime options',
      'Enterprise agreements',
      'License management portal',
      'Automatic updates and renewals'
    ]
  },
  {
    id: 'support-maintenance',
    title: 'Support & Maintenance',
    description: 'Comprehensive support plans to ensure your software runs smoothly with minimal downtime.',
    icon: 'LifeBuoy',
    features: [
      'Tiered support plans: Basic, Premium, and Enterprise',
      '24/7 technical assistance',
      'Bug fixing and regular updates',
      'Performance monitoring',
      'Security patch management',
      'Regular system health checks'
    ]
  }
];