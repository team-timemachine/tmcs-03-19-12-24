import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADING_WORDS } from '../../utils/constants';
import { DynamicWord } from './DynamicWord';

export function GlitchWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % LOADING_WORDS.length);
    }, 500); // Fast word rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8">
      <AnimatePresence mode="wait">
        {LOADING_WORDS.map((word, index) => (
          <div
            key={`${word.text}-${index}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              transition: 'opacity 0.3s ease'
            }}
          >
            <DynamicWord
              text={word.text}
              color={word.color}
              delay={index * 0.1}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}