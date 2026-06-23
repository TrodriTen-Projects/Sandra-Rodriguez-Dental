import { useEffect } from 'react';

/**
 * useScrollAnimation Hook
 *
 * Sets up IntersectionObserver to add CSS classes to elements when they
 * enter the viewport. Used for scroll-triggered animations.
 *
 * @param options - Configuration options
 * @param options.threshold - Percentage of element visible to trigger (0-1)
 * @param options.rootMargin - Margin around viewport for early triggering
 * @param options.className - CSS class to observe (default: 'hidden-initially')
 * @param options.activeClassName - CSS class to add when visible (default: 'show')
 *
 * @example
 * function MyPage() {
 *   useScrollAnimation({ threshold: 0.2 });
 *
 *   return (
 *     <div className="hidden-initially transition-opacity duration-500">
 *       Content fades in when scrolled into view
 *     </div>
 *   );
 * }
 */
interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  className?: string;
  activeClassName?: string;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '100px',
  className = 'hidden-initially',
  activeClassName = 'show',
}: UseScrollAnimationOptions = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClassName);
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, className, activeClassName]);
};
