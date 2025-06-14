import { useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for handling scroll-based animations using Intersection Observer
 * Replaces the duplicated scroll animation logic across multiple components
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 100, rootMargin = '0px' } = options;

  useEffect(() => {
    // Use Intersection Observer for better performance than scroll event listeners
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-fade-in');
            element.classList.remove('opacity-0');
            // Stop observing once animated
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: `-${threshold}px`,
        threshold: 0.1,
      }
    );

    // Observe all elements with .reveal class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Initial check for elements already in view
    const handleInitialCheck = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - threshold) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
          observer.unobserve(element);
        }
      });
    };

    // Run initial check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(handleInitialCheck, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);
};