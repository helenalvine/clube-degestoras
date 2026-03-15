import { Brain, Sparkles } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Brain size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1400px]">
        <div className="mb-8">
          <span className="inline-block bg-[#8B5CF6] text-[#1A0A2E] font-montserrat font-bold text-2xl px-6 py-3 rounded-full">
            METODOLOGIA DISC
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-7xl text-[#F0F4F8] mb-6">
          O Que é <span className="text-[#2DD4BF]">DISC</span>?
        </h1>

        <p className="font-lato text-3xl text-[#C4B5FD] mb-12 max-w-[1000px] mx-auto">
          Uma ferramenta de análise comportamental que ajuda a entender<br/>
          <span className="text-[#2DD4BF] font-bold">como as pessoas agem e reagem</span> no trabalho
        </p>

        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-[#120826] border-2 border-[#EF4444]/50 rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#EF4444] flex items-center justify-center mx-auto mb-4">
              <span className="font-montserrat font-bold text-3xl text-white">D</span>
            </div>
            <p className="font-montserrat font-bold text-xl text-[#EF4444]">Dominante</p>
            <p className="font-lato text-base text-[#C4B5FD] mt-2">Direta e decisiva</p>
          </div>

          <div className="bg-[#120826] border-2 border-[#F59E0B]/50 rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center mx-auto mb-4">
              <span className="font-montserrat font-bold text-3xl text-white">I</span>
            </div>
            <p className="font-montserrat font-bold text-xl text-[#F59E0B]">Influente</p>
            <p className="font-lato text-base text-[#C4B5FD] mt-2">Comunicativa e energética</p>
          </div>

          <div className="bg-[#120826] border-2 border-[#22C55E]/50 rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#22C55E] flex items-center justify-center mx-auto mb-4">
              <span className="font-montserrat font-bold text-3xl text-white">S</span>
            </div>
            <p className="font-montserrat font-bold text-xl text-[#22C55E]">Estável</p>
            <p className="font-lato text-base text-[#C4B5FD] mt-2">Calma e cooperativa</p>
          </div>

          <div className="bg-[#120826] border-2 border-[#3B82F6]/50 rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mx-auto mb-4">
              <span className="font-montserrat font-bold text-3xl text-white">C</span>
            </div>
            <p className="font-montserrat font-bold text-xl text-[#3B82F6]">Consciente</p>
            <p className="font-lato text-base text-[#C4B5FD] mt-2">Detalhista e analítica</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Sparkles size={28} className="text-[#2DD4BF]" />
          <p className="font-lato text-xl text-[#C4B5FD]">
            Não existe perfil melhor ou pior — cada um tem forças diferentes
          </p>
        </div>
      </div>
    </div>
  );
}
