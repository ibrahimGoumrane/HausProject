import { useEffect, useState } from 'react';

interface IntersectionObserverProps {
  element: React.RefObject<HTMLElement>;
  rootMargin: string;
}

export const useIntersection = ({ element, rootMargin }: IntersectionObserverProps) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [element, rootMargin]);

  return isVisible;
};
