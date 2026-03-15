import { Target, Sparkles, Trophy, CheckCircle } from 'lucide-react';

const traits = ['Comunicativa', 'Energética', 'Sociável'];
const strengths = [
  'Motiva a equipe',
  'Cria ambiente positivo',
  'Excelente com clientes'
];
const conflicts = ['Pode falar demais', 'Tende a se distrair'];

export default function Slide5() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col">
      {/* Header */}
      <div className="flex-none pt-16 pb-8 px-24">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-[#F59E0B] flex items-center justify-center">
            <span className="font-montserrat font-bold text-6xl text-white">I</span>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8]">
              Perfil I – Influente
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-3 gap-8 px-24">
        {/* Traits */}
        <div className="bg-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-[#F59E0B]" size={36} />
            <p className="font-montserrat font-bold text-3xl text-[#F0F4F8]">Características</p>
          </div>
          <div className="space-y-4">
            {traits.map((trait, index) => (
              <div key={index} className="flex items-center gap-3">
                <Sparkles className="text-[#F59E0B]" size={24} />
                <p className="font-lato text-2xl text-[#C4B5FD]">{trait}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="bg-[#F59E0B]/10 rounded-2xl p-8 border-l-4 border-[#F59E0B]">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="text-[#F59E0B]" size={36} />
            <p className="font-montserrat font-bold text-3xl text-[#F0F4F8]">Pontos Fortes</p>
          </div>
          <div className="space-y-4">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-[#22D3EE]" size={24} />
                <p className="font-lato text-2xl text-[#F0F4F8]">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conflicts */}
        <div className="bg-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-[#EF4444]" size={36} />
            <p className="font-montserrat font-bold text-3xl text-[#F0F4F8]">Possíveis Conflitos</p>
          </div>
          <div className="space-y-4">
            {conflicts.map((conflict, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
                <p className="font-lato text-2xl text-[#C4B5FD]">{conflict}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none flex justify-between px-24 py-8">
        <p className="font-lato text-3xl text-[#64748B]">
          Clube de Gestoras | I&F Cleaning Management Academy
        </p>
        <p className="font-lato text-3xl text-[#64748B]">
          Liderança
        </p>
      </div>
    </div>
  );
}
