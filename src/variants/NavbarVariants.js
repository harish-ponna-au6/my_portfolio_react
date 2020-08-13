const navVariants = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
};
const logoVariants = {
  hidden: {
    opacity: 0,
    rotate: -180
  },
  visible: {
    opacity: 1,
    rotate: 0,
    delay: 1,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
};

export { navVariants, logoVariants };
