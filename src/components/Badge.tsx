import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  icon?: LucideIcon;
  text: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'success';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function Badge({ 
  icon: Icon, 
  text, 
  variant = 'primary', 
  size = 'md',
  animated = true 
}: BadgeProps) {
  const variants = {
    primary: 'bg-[#167E7E]/10 text-[#167E7E] border-[#167E7E]/20',
    secondary: 'bg-[#B5651D]/10 text-[#B5651D] border-[#B5651D]/20',
    accent: 'bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/20',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-4 py-1.5 text-sm gap-2',
    lg: 'px-6 py-2 text-base gap-2',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const BadgeContent = () => (
    <div
      className={`inline-flex items-center rounded-full border font-medium tracking-wide ${variants[variant]} ${sizes[size]}`}
    >
      {Icon && <Icon className={iconSizes[size]} />}
      <span>{text}</span>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <BadgeContent />
      </motion.div>
    );
  }

  return <BadgeContent />;
}
