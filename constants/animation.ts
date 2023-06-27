export const animation = {
  blockAnimation: {
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
  },
  blockAnimationRotate: {
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
  },
  blockAnimationMobileRotate: {
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
  },
  textAnimation: {
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
  },
  textBgAnimation: {
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
  },
  fadeAnimation: {
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
  },
  quickFadeAnimation: {
    hidden: {
      scale: 0.65,
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
  },
  fadeRightAnimation: {
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
  },
  fadeLeftAnimation: {
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
  },
  fadeTopAnimation: {
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
  },
  fadeBottomAnimation: {
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
  },
}
