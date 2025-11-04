import { motion } from 'framer-motion';
import { cardHoverVariants } from '../utils/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {children}
    </motion.div>
  );
}
