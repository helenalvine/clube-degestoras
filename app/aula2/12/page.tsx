import { Shield } from 'lucide-react';

export default function Slide12() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex items-center justify-center">
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Shield size={900} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1400px] px-12">
        <span className="inline-block bg-[#2DD4BF]/20 text-[#2DD4BF] font-montserrat font-bold text-3xl px-8 py-4 rounded-full mb-12">
          CULTURA DO CARÁTER
        </span>

        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-8 leading-tight">
          O que precisa ser falado<br/>deve ir direto para<br/>
          <span className="text-[#8B5CF6]">quem pode resolver</span>
        </h1>

        <div className="w-32 h-1 bg-[#8B5CF6] mx-auto mb-8"></div>

        <p className="font-lato text-4xl text-[#C4B5FD]">
          Não em tom de fofoca.
        </p>
      </div>
    </div>
  );
}
