export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.02,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
  },
  hover: {
    y: -5,
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
    transition: {
      duration: 0.28,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const goldBorderHover = {
  rest: { borderColor: "rgba(232,228,220,1)" },
  hover: {
    borderColor: "#D4A857",
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const counterVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pulseGold = {
  animate: {
    boxShadow: [
      "0 8px 32px rgba(212,168,87,0.20)",
      "0 8px 48px rgba(212,168,87,0.40)",
      "0 8px 32px rgba(212,168,87,0.20)",
    ],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const breathe = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const dotPulse = {
  animate: {
    opacity: [1, 0.25, 1],
    scale: [1, 1.15, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const stepCircle = {
  hidden: { scale: 0.6, opacity: 0, backgroundColor: "rgba(212,168,87,0)" },
  visible: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#D4A857",
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const dashLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export const navLink = {
  rest: { y: 0, color: "rgba(245,245,242,0.65)" },
  hover: {
    y: -1,
    color: "#F5F5F2",
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

export const overlayReveal = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(24px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
