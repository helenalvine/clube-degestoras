import { Flag } from 'lucide-react';

export default function Slide17() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex items-center justify-center">
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Flag size={900} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1200px]">
        <span className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] font-montserrat font-bold text-3xl px-8 py-4 rounded-full mb-12">
          FECHAMENTO
        </span>

        <h1 className="font-montserrat font-bold text-7xl text-[#F0F4F8] mb-8">
          O Que Construímos Hoje
        </h1>

        <div className="w-32 h-1 bg-[#2DD4BF] mx-auto mb-10"></div>

        <p className="font-lato text-4xl text-[#C4B5FD]">
          Cultura não se constrói em um dia —<br/>
          <span className="text-[#2DD4BF]">mas começa com uma decisão.</span>
        </p>
      </div>
    </div>
  );
}
