import { Layers } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex items-center justify-center">
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Layers size={900} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10">
        <span className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] font-montserrat font-bold text-3xl px-8 py-4 rounded-full mb-8">
          MÓDULO 1
        </span>
        <h1 className="font-montserrat font-bold text-8xl text-[#F0F4F8] mb-8">
          O Que É Cultura<br/>Organizacional?
        </h1>
        <div className="w-32 h-1 bg-[#2DD4BF] mx-auto mb-8"></div>
        <p className="font-lato text-4xl text-[#C4B5FD]">
          A base que sustenta tudo
        </p>
      </div>
    </div>
  );
}
