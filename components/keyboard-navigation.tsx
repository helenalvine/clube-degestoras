'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const pathParts = pathname.split('/');
      const aulaMatch = pathname.match(/\/aula(\d+)\/(\d+)/);
      if (!aulaMatch) return;

      const aulaNumber = parseInt(aulaMatch[1]);
      const currentSlide = parseInt(aulaMatch[2]);
      const totalSlides = parseInt(searchParams.get('total') || (aulaNumber === 1 ? '19' : aulaNumber === 2 ? '19' : '17'));

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentSlide < totalSlides) {
          router.push(`/aula${aulaNumber}/${currentSlide + 1}?total=${totalSlides}`);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentSlide > 1) {
          router.push(`/aula${aulaNumber}/${currentSlide - 1}?total=${totalSlides}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pathname, searchParams, router]);

  return null;
}
