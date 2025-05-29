portfolio/portfolio/src/hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (options.once) observer.unobserve(entry.target);
        } else if (!options.once) {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);
  
  return ref;
};

export default useScrollAnimation;