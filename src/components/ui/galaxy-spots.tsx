'use client';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface GalaxySpot {
  id: number;
  initialX: number;
  initialY: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export const GalaxySpots = ({ count = 20 }) => {
  // Generate spots with stable positions using useMemo to prevent regeneration on re-renders
  const spots: GalaxySpot[] = useMemo(() => {
    const newSpots: GalaxySpot[] = [];
    for (let i = 0; i < count; i++) {
      newSpots.push({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        size: Math.random() * 8 + 4, // Random size between 4-12px
        opacity: Math.random() * 0.5 + 0.2, // Random opacity between 0.2-0.7
        duration: Math.random() * 15 + 10, // Random duration between 10-25s
        delay: Math.random() * 5, // Random delay between 0-5s
      });
    }
    return newSpots;
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {spots.map((spot) => (
        <motion.div
          key={spot.id}
          initial={{
            x: `${spot.initialX}vw`,
            y: `${spot.initialY}vh`,
            scale: 1,
          }}
          animate={{
            x: [
              `${spot.initialX}vw`,
              `${Math.min(100, spot.initialX + Math.random() * 20 - 10)}vw`,
              `${Math.min(100, spot.initialX + Math.random() * 20 - 10)}vw`,
              `${Math.min(100, spot.initialX + Math.random() * 20 - 10)}vw`,
              `${spot.initialX}vw`,
            ],
            y: [
              `${spot.initialY}vh`,
              `${Math.min(100, spot.initialY + Math.random() * 20 - 10)}vh`,
              `${Math.min(100, spot.initialY + Math.random() * 20 - 10)}vh`,
              `${Math.min(100, spot.initialY + Math.random() * 20 - 10)}vh`,
              `${spot.initialY}vh`,
            ],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [spot.opacity, spot.opacity * 1.5, spot.opacity * 0.7, spot.opacity * 1.2, spot.opacity],
          }}
          transition={{
            duration: spot.duration,
            delay: spot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          style={{
            position: 'absolute',
            width: `${spot.size}px`,
            height: `${spot.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(76,175,80,1) 0%, rgba(76,175,80,0) 70%)',
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(76,175,80,0.3)',
          }}
        />
      ))}
    </div>
  );
};
