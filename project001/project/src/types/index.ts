export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  screenshot: string;
  price: {
    monthly?: number;
    yearly?: number;
    lifetime?: number;
  };
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  updatedAt: string;
}

export interface License {
  id: string;
  productId: string;
  productName: string;
  licenseKey: string;
  purchaseDate: string;
  expiryDate: string | null;
  status: 'active' | 'expired' | 'revoked';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}