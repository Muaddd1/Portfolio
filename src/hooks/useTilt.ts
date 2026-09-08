import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltOptions {
  /** Max rotation in degrees */
  max?: number;
  /** Scale applied on hover */
  scale?: number;
}

/**
 * Pointer-driven 3D tilt, the kind seen on Linear/Vercel-style cards.
 * Returns a ref + motion style + handlers to spread onto a motion.div.
 * No-ops gracefully — motion values just stay at rest if never moved.
 */
export function useTilt({ max = 8, scale = 1 }: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hoverScale = useMotionValue(1);

  const springConfig = { damping: 22, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springConfig);
  const scaleSpring = useSpring(hoverScale, springConfig);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseEnter = () => hoverScale.set(scale);
  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
    hoverScale.set(1);
  };

  return {
    ref,
    style: { rotateX, rotateY, scale: scaleSpring, transformPerspective: 900 },
    handlers: { onMouseMove, onMouseEnter, onMouseLeave },
  };
}
