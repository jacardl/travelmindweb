// 通用类型定义
export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialItem {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}