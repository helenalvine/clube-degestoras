import { ClipboardList, Briefcase, MapPin, Brain, Gift } from 'lucide-react';

const phases = [
  { number: '1', icon: Briefcase, text: 'Experiência profissional', color: '#8B5CF6' },
  { number: '2', icon: MapPin, text: 'Logística e requisitos', color: '#2DD4BF' },
  { number: '3', icon: Brain, text: 'Perfil comportamental', color: '#8B5CF6' },
  { number: '4', icon: Gift, text: 'Benefícios e responsabilidades', color: '#2DD4BF' },
];

export default function Slide4() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <ClipboardList size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1600px]">
        <h1 className="font-montserrat font-bold text-7xl text-[#F0F4F8] mb-16">
          Fases da Entrevista
        </h1>

        <div className="grid grid-cols-4 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 rounded-2xl p-8 relative" style={{ borderColor: `${phase.color}50` }}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                  <span className="font-montserrat font-bold text-xl text-[#1A0A2E]">{phase.number}</span>
                </div>
                <Icon size={48} style={{ color: phase.color }} className="mx-auto mb-4 mt-4" />
                <p className="font-montserrat font-bold text-2xl text-[#F0F4F8]">
                  {phase.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
