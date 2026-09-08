import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor-hover]';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.5 });
  const ringY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.5 });
  const dotX = useSpring(x, { damping: 40, stiffness: 900, mass: 0.2 });
  const dotY = useSpring(y, { damping: 40, stiffness: 900, mass: 0.2 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest?.(INTERACTIVE_SELECTOR));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeaveWindow = () => setHovering(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeaveWindow);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeaveWindow);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 52 : 28,
          height: hovering ? 52 : 28,
          borderColor: '#00d4ff',
          borderWidth: hovering ? 1.5 : 1,
          backgroundColor: hovering ? 'rgba(0,212,255,0.08)' : 'transparent',
          scale: pressed ? 0.85 : 1,
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), background-color 0.25s ease, scale 0.15s ease',
        }}
      />
      {/* Core dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-cyan"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          opacity: hovering ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
}
