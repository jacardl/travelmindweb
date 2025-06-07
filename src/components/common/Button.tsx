import React from 'react';
import { motion } from 'framer-motion';
import { trackButtonClick } from '../../utils/analytics';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  trackingName?: string; // 新增追踪名称
  trackingSection?: string; // 新增追踪区域
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  trackingName,
  trackingSection
}) => {
  const handleClick = () => {
    // 追踪按钮点击
    if (trackingName) {
      trackButtonClick(trackingName, trackingSection);
    }
    
    // 执行原有点击事件
    onClick?.();
  };
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-500 to-primary-500 text-white hover:from-accent-600 hover:to-primary-600 shadow-lg shadow-accent-500/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500/10',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const Component = motion.button;
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;