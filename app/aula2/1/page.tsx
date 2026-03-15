import Image from 'next/image';
import { Heart } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex">
      {/* Background Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Heart size={800} className="text-[#8B5CF6]" />
      </div>

      {/* Left - Photo */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0 flex items-center justify-center p-16">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-[#8B5CF6]/30">
            <Image
              src="/filipe-ingrid.jpg"
              alt="Filipe e Ingrid"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-1/2 flex flex-col justify-center px-16 relative z-10">
        <div className="mb-6">
          <span className="inline-block bg-[#8B5CF6] text-[#1A0A2E] font-montserrat font-bold text-2xl px-6 py-3 rounded-full">
            CLUBE DE GESTORAS
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-8xl text-[#F0F4F8] mb-6">
          Cultura<br/>
          <span className="text-[#2DD4BF]">Organizacional</span>
        </h1>

        <div className="w-24 h-1 bg-[#8B5CF6] mb-8"></div>

        <p className="font-lato text-4xl text-[#C4B5FD] mb-12">
          O Alicerce de Tudo
        </p>

        <div className="space-y-3 text-[#C4B5FD]/80">
          <p className="font-lato text-xl">📅 18 de Março | Online ao Vivo</p>
          <p className="font-lato text-xl">⏱️ 90-120 minutos</p>
          <p className="font-lato text-xl">👥 Filipe e Ingrid Maiorino</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="font-lato text-[#C4B5FD]/60">I&F Cleaning Management Academy</p>
      </div>
    </div>
  );
}
