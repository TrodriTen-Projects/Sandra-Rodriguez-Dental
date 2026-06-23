'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Client wrapper that runs the scroll-reveal IntersectionObserver over its
 * children. Lets a Server Component page (e.g. the statically-exported blog
 * post, which needs `generateStaticParams`) keep the reveal animation without
 * itself becoming a Client Component.
 */
export default function ScrollAnimator({
  children,
  threshold = 0.1,
  rootMargin = '100px',
}: ScrollAnimatorProps) {
  useScrollAnimation({ threshold, rootMargin });
  return <>{children}</>;
}
