import { UserPlus } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <UserPlus size={800} className="text-[#8B5CF6]" />
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block bg-[#8B5CF6] text-[#1A0A2E] font-montserrat font-bold text-3xl px-8 py-4 rounded-full">
            CLUBE DE GESTORAS
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-9xl text-[#F0F4F8] mb-8">
          Contratação<br/>
          <span className="text-[#2DD4BF]">Inteligente</span>
        </h1>

        <div className="w-32 h-1 bg-[#8B5CF6] mx-auto mb-10"></div>

        <p className="font-lato text-4xl text-[#C4B5FD]">
          Como montar uma equipe forte<br/>
          <span className="text-[#2DD4BF]">desde a primeira entrevista</span>
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12">
        <p className="font-lato text-xl text-[#C4B5FD]/60">I&F Cleaning Management Academy</p>
      </div>
    </div>
  );
}
