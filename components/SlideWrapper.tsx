'use client';

import { ReactNode, useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideWrapperProps {
  children: ReactNode;
  aulaNumber: number;
  aulaTitle: string;
}

function SlideWrapperInner({ children, aulaNumber, aulaTitle }: SlideWrapperProps) {
  const [scale, setScale] = useState(1);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract current slide from path
  const pathParts = pathname.split('/');
  const currentSlide = parseInt(pathParts[pathParts.length - 1]) || 1;
  const totalSlides = parseInt(searchParams.get('total') || (aulaNumber === 1 ? '15' : aulaNumber === 2 ? '19' : '17'));

  useEffect(() => {
    const calculateScale = () => {
      const navHeight = 60; // Height of navigation bar
      const availableWidth = window.innerWidth;
      const availableHeight = window.innerHeight - navHeight;

      const scaleX = availableWidth / 1920;
      const scaleY = availableHeight / 1080;

      // Permite escalar até 1.15x para melhor visualização
      setScale(Math.min(scaleX, scaleY, 1.15));
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return (
    <div className="h-screen bg-[#1A0A2E] flex flex-col overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          {children}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#120826]/95 backdrop-blur-sm border-t border-[#8B5CF6]/30 py-3 px-4 md:px-6 z-50" style={{ height: '60px' }}>
        <div className="max-w-[1920px] mx-auto flex items-center justify-between h-full">
          {/* Left - Home and Aula Info */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/"
              className="flex items-center gap-1 md:gap-2 text-[#C4B5FD] hover:text-[#8B5CF6] transition-colors"
            >
              <Home size={18} />
              <span className="font-lato text-xs md:text-sm hidden sm:inline">Menu</span>
            </Link>
            <div className="h-5 w-px bg-[#8B5CF6]/30 hidden sm:block" />
            <span className="font-montserrat font-bold text-[#F0F4F8] text-xs md:text-sm hidden sm:inline">
              {aulaTitle}
            </span>
          </div>

          {/* Center - Navigation */}
          <div className="flex items-center gap-2 md:gap-4">
            {currentSlide > 1 ? (
              <Link
                href={`/aula${aulaNumber}/${currentSlide - 1}?total=${totalSlides}`}
                className="flex items-center gap-1 text-[#C4B5FD] hover:text-[#2DD4BF] transition-colors p-2"
              >
                <ChevronLeft size={24} />
              </Link>
            ) : (
              <div className="flex items-center gap-1 text-[#C4B5FD]/30 cursor-not-allowed p-2">
                <ChevronLeft size={24} />
              </div>
            )}

            <span className="font-montserrat font-bold text-[#8B5CF6] text-base md:text-lg min-w-[60px] md:min-w-[80px] text-center">
              {currentSlide} / {totalSlides}
            </span>

            {currentSlide < totalSlides ? (
              <Link
                href={`/aula${aulaNumber}/${currentSlide + 1}?total=${totalSlides}`}
                className="flex items-center gap-1 text-[#C4B5FD] hover:text-[#2DD4BF] transition-colors p-2"
              >
                <ChevronRight size={24} />
              </Link>
            ) : (
              <div className="flex items-center gap-1 text-[#C4B5FD]/30 cursor-not-allowed p-2">
                <ChevronRight size={24} />
              </div>
            )}
          </div>

          {/* Right - Aula Switcher */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/aula1/1?total=19"
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors ${aulaNumber === 1 ? 'bg-[#8B5CF6] text-[#1A0A2E]' : 'bg-[#8B5CF6]/20 text-[#C4B5FD] hover:bg-[#8B5CF6]/40'}`}
            >
              Contratação
            </Link>
            <Link
              href="/aula2/1?total=19"
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors ${aulaNumber === 2 ? 'bg-[#8B5CF6] text-[#1A0A2E]' : 'bg-[#8B5CF6]/20 text-[#C4B5FD] hover:bg-[#8B5CF6]/40'}`}
            >
              Cultura
            </Link>
            <Link
              href="/aula3/1?total=17"
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors ${aulaNumber === 3 ? 'bg-[#8B5CF6] text-[#1A0A2E]' : 'bg-[#8B5CF6]/20 text-[#C4B5FD] hover:bg-[#8B5CF6]/40'}`}
            >
              Liderança
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SlideWrapper(props: SlideWrapperProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1A0A2E]" />}>
      <SlideWrapperInner {...props} />
    </Suspense>
  );
}
