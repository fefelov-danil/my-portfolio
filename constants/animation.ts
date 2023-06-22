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

export const bgFadeAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const fadeRightAnimation = {
  hidden: {
    x: 25,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const fadeLeftAnimation = {
  hidden: {
    x: -25,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const fadeTopAnimation = {
  hidden: {
    x: 25,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const fadeBottomAnimation = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}
