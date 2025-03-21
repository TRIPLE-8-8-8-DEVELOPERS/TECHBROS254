
import { useEffect } from 'react';

/**
 * Hook to fix the 100vh issue on mobile browsers
 * Sets a CSS variable --vh that can be used with calc(var(--vh, 1vh) * 100)
 */
export function useViewportHeight() {
  useEffect(() => {
    // First we get the viewport height and multiply it by 1% to get a value for a vh unit
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial set
    setVh();

    // Update on resize and orientation change
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);
}

export default useViewportHeight;
