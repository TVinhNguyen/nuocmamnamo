import { Variants } from 'framer-motion';

// Framer Motion variants cho micro-interactions
export const buttonHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeInOut'
    }
  }
};

export const iconHoverVariants: Variants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

export const cardHoverVariants: Variants = {
  initial: { y: 0, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  hover: { 
    y: -8,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
