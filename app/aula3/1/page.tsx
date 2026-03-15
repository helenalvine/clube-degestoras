import { Users } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col">
      {/* Background Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Users size={800} className="text-[#8B5CF6]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-24 relative z-10">
        <div className="text-center max-w-[1400px]">
          <div className="mb-8">
            <span className="inline-block bg-[#8B5CF6] text-[#1A0A2E] font-montserrat font-bold text-3xl px-8 py-4 rounded-full">
              CLUBE DE GESTORAS
            </span>
          </div>

          <h1 className="font-montserrat font-bold text-9xl text-[#F0F4F8] mb-8">
            Liderança
          </h1>

          <div className="w-32 h-1 bg-[#22D3EE] mx-auto mb-10"></div>

          <p className="font-lato text-5xl text-[#C4B5FD] mb-16">
            Como guiar pessoas<br/>
            <span className="text-[#22D3EE]">sem criar caos na empresa</span>
          </p>

          <p className="font-lato text-3xl text-[#64748B]">
            I&F Cleaning Management Academy
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none flex justify-center px-24 py-8">
        <p className="font-lato text-2xl text-[#64748B]">
          Clube de Gestoras | Liderança
        </p>
      </div>
    </div>
  );
}
