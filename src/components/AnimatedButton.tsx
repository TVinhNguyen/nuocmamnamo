import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { buttonHoverVariants } from '../utils/animations';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({
  children,
  onClick,
  icon: Icon,
  variant = 'primary',
  className = '',
  type = 'button'
}: AnimatedButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors';
  
  const variantClasses = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white',
    secondary: 'bg-slate-700 hover:bg-slate-800 text-white',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      variants={buttonHoverVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}
