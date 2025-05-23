// Reusable animation variants
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const staggerChildrenVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};