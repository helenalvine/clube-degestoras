import { Crown, Clock, GraduationCap, TrendingUp } from 'lucide-react';

export default function Slide15() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Crown size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1400px]">
        <div className="mb-12">
          <span className="inline-block bg-[#8B5CF6] text-[#1A0A2E] font-montserrat font-bold text-2xl px-8 py-4 rounded-full">
            REGRA DE OURO
          </span>
        </div>

        <div className="space-y-8 mb-16">
          <div className="flex items-center justify-center gap-6">
            <Clock size={48} className="text-[#2DD4BF]" />
            <p className="font-montserrat font-bold text-5xl text-[#2DD4BF]">
              Contrate devagar
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <GraduationCap size={48} className="text-[#8B5CF6]" />
            <p className="font-montserrat font-bold text-5xl text-[#8B5CF6]">
              Treine bem
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <TrendingUp size={48} className="text-[#F0F4F8]" />
            <p className="font-montserrat font-bold text-5xl text-[#F0F4F8]">
              E construía uma equipe<br/>que faz a empresa crescer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
