import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ${hoverEffect ? 'hover:border-accent-500/50' : ''} transition-all shadow-xl shadow-accent-900/5 ${className}`}
      whileHover={hoverEffect ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;