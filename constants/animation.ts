export const blockAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: custom * 0.2,
    },
  }),
}

export const blockAnimationRotate = {
  hidden: {
    opacity: 0.3,
    transform: 'skew(-6deg, 0deg)',
  },
  visible: {
    opacity: 1,
    transform: 'skew(-20deg, 0deg)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const blockAnimationMobileRotate = {
  hidden: {
    opacity: 0.1,
    transform: 'skew(-42deg, 0deg)',
  },
  visible: {
    opacity: 1,
    transform: 'skew(-50deg, 0deg)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const textAnimation = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom * 0.2,
    },
  }),
}
export const textBgAnimation = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    width: '100%',
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
}

export const fadeAnimation = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom,
    },
  }),
}

export const quickFadeAnimation = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom,
    },
  }),
}

export const fadeRightAnimation = {
  hidden: {
    x: 45,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom,
    },
  }),
}

export const fadeLeftAnimation = {
  hidden: {
    x: -45,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom,
    },
  }),
}

export const fadeTopAnimation = {
  hidden: {
    x: 45,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom,
    },
  }),
}

export const fadeBottomAnimation = {
  hidden: {
    y: 45,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom,
    },
  }),
}
