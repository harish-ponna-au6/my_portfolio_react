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

const socialMediaVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.2 },
      type: "spring",
      stiffness: 100,
      delay: 2
    }
  }
};

export { welcomeHeadingVariants, welcomeContentVariants, socialMediaVariants };
