import { useCallback, useRef } from 'react';

/**
 * useDebounce Hook
 *
 * Debounces a callback function to limit how often it can be called.
 * Useful for optimizing expensive operations triggered by frequent events
 * like scroll, resize, or input changes.
 *
 * @param callback - The function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced version of the callback
 *
 * @example
 * const handleScroll = useDebounce(() => {
 *   console.log('Scrolled!');
 * }, 100);
 *
 * useEffect(() => {
 *   window.addEventListener('scroll', handleScroll);
 *   return () => window.removeEventListener('scroll', handleScroll);
 * }, [handleScroll]);
 */
export const useDebounce = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
