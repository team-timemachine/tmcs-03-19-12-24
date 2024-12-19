import React from 'react';
import { motion } from 'framer-motion';
import { glowEffects, glitchAnimation } from '../../utils/animations';

export function CentreStageText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-5xl font-bold text-white relative"
    >
      <motion.span
        className="relative z-10"
        animate={glitchAnimation}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={glowEffects.white}
      >
        Centre Stage
      </motion.span>

      {/* Glitch Effect Layers */}
      <motion.span
        className="absolute inset-0 text-white opacity-50"
        animate={{
          x: [-2, 2, -2],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity
        }}
        style={{
          clipPath: 'inset(45% 0 55% 0)',
          transform: 'translateX(-2px)'
        }}
      >
        Centre Stage
      </motion.span>
      
      <motion.span
        className="absolute inset-0 text-white opacity-50"
        animate={{
          x: [2, -2, 2],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity
        }}
        style={{
          clipPath: 'inset(55% 0 45% 0)',
          transform: 'translateX(2px)'
        }}
      >
        Centre Stage
      </motion.span>
    </motion.div>
  );
}