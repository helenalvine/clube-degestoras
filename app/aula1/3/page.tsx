import { Target, CheckCircle, Truck, User } from 'lucide-react';

const discoveries = [
  { icon: CheckCircle, text: 'Ela sabe fazer', color: '#2DD4BF' },
  { icon: Truck, text: 'Ela consegue trabalhar\nna logística da empresa', color: '#8B5CF6' },
  { icon: User, text: 'Ela tem o perfil certo', color: '#2DD4BF' },
];

export default function Slide3() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Target size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1600px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-8">
          O Objetivo da Entrevista
        </h1>
        <p className="font-lato text-3xl text-[#C4B5FD] mb-16">Descobrir três coisas:</p>

        <div className="grid grid-cols-3 gap-10">
          {discoveries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 rounded-2xl p-10" style={{ borderColor: `${item.color}50` }}>
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                  <Icon size={48} style={{ color: item.color }} />
                </div>
                <p className="font-montserrat font-bold text-2xl text-[#F0F4F8] whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
