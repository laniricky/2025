import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'data-analyst-pro',
    name: 'DataAnalyst Pro',
    description: 'Advanced data analysis and visualization platform for business intelligence.',
    features: [
      'Interactive dashboards and reports',
      'Data visualization with customizable charts',
      'AI-powered trend analysis',
      'Integration with multiple data sources',
      'Automated report generation',
      'Role-based access control'
    ],
    screenshot: 'https://images.pexels.com/photos/7654816/pexels-photo-7654816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: {
      monthly: 149,
      yearly: 1490,
      lifetime: 4990
    },
    category: 'Business Intelligence'
  },
  {
    id: 'project-master',
    name: 'ProjectMaster',
    description: 'Comprehensive project management solution for teams of all sizes.',
    features: [
      'Task management and assignment',
      'Gantt charts and timeline views',
      'Resource allocation and tracking',
      'Budget monitoring and forecasting',
      'Team collaboration tools',
      'Client portal for project updates'
    ],
    screenshot: 'https://images.pexels.com/photos/6332473/pexels-photo-6332473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: {
      monthly: 99,
      yearly: 990,
      lifetime: 2990
    },
    category: 'Project Management'
  },
  {
    id: 'secure-vault',
    name: 'SecureVault',
    description: 'Enterprise-grade security solution for data protection and access management.',
    features: [
      'End-to-end encryption',
      'Multi-factor authentication',
      'Secure document sharing',
      'Access control and permissions',
      'Audit trails and compliance reporting',
      'Data breach detection and alerts'
    ],
    screenshot: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: {
      monthly: 199,
      yearly: 1990,
      lifetime: 5990
    },
    category: 'Security'
  },
  {
    id: 'customer-connect',
    name: 'CustomerConnect',
    description: 'Complete CRM solution to manage your customer relationships and sales pipeline.',
    features: [
      'Contact and lead management',
      'Sales pipeline and opportunity tracking',
      'Email marketing automation',
      'Customer support ticket integration',
      'Analytics and reporting dashboard',
      'Mobile app for on-the-go access'
    ],
    screenshot: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: {
      monthly: 129,
      yearly: 1290,
      lifetime: 3990
    },
    category: 'CRM'
  }
];