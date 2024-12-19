import React from 'react';
import { motion } from 'framer-motion';
import { glowEffects, glitchAnimation } from '../../utils/animations';

interface DynamicWordProps {
  text: string;
  color: string;
  delay: number;
}

export function DynamicWord({ text, color, delay }: DynamicWordProps) {
  const colorHex = {
    'text-yellow-400': '#facc15',
    'text-purple-400': '#c084fc',
    'text-green-400': '#4ade80',
    'text-cyan-400': '#22d3ee'
  }[color] || '#ffffff';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay }}
      className="relative"
    >
      {/* Main Text */}
      <motion.span
        className={`text-5xl font-bold ${color} relative z-10`}
        animate={glitchAnimation}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={glowEffects.premium(colorHex)}
      >
        {text}
      </motion.span>

      {/* Glitch Layers */}
      <motion.span
        className={`absolute inset-0 ${color} opacity-50`}
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
        {text}
      </motion.span>

      <motion.span
        className={`absolute inset-0 ${color} opacity-50`}
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
        {text}
      </motion.span>
    </motion.div>
  );
}