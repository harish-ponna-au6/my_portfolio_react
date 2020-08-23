const welcomeHeadingVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 2
    }
  }
};
const welcomeContentVariants = {
  hidden: {
    opacity: 0,
    y: "100vh"
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

export { welcomeHeadingVariants, welcomeContentVariants };
