// Animation variants
export const variants = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  
  slideInFromLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  }
};

// Glow effects
export const glowEffects = {
  premium: (color: string) => ({
    textShadow: `
      0 0 20px ${color}cc,
      0 0 40px ${color}99,
      0 0 60px ${color}66,
      0 0 80px ${color}33
    `
  }),
  white: {
    textShadow: `
      0 0 20px rgba(255,255,255,0.7),
      0 0 40px rgba(255,255,255,0.4),
      0 0 60px rgba(255,255,255,0.2)
    `
  }
};

// Dynamic animations
export const glitchAnimation = {
  x: [-1, 1, -1, 1, 0],
  filter: ['blur(0px)', 'blur(2px)', 'blur(0px)']
};