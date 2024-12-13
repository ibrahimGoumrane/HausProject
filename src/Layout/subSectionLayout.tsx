import React, { useRef } from 'react';
import { useIntersection } from '../Hooks/useIntersection';

interface SubSectionProps {
  children: React.ReactNode;
  animationType?: 'top-to-bottom' | 'left-to-right' | 'none' | 'stay';
}

const SubSection = ({ children, animationType = 'top-to-bottom' }: SubSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection({ element: ref, rootMargin: '10px' });

  const getAnimationStyles = () => {
    switch (animationType) {
      case 'top-to-bottom':
        return {
          transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible ? 1 : 0,
        };
      case 'left-to-right':
        return {
          transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
          opacity: isVisible ? 1 : 0,
        };
      case 'stay':
        return {
          transform: 'none',
          opacity: isVisible ? 1 : 0,
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <div
      ref={ref}
      style={{
        ...getAnimationStyles(),
        transition: animationType !== 'none' ? 'transform 1.5s ease-out, opacity 1.5s ease-out' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default SubSection;
