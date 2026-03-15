import { Briefcase, Users, Globe, Wrench } from 'lucide-react';

const challenges = [
  {
    icon: Briefcase,
    title: 'At-Will Employment',
    description: 'Sem contratos formais, a cultura é o que mantém as pessoas',
  },
  {
    icon: Users,
    title: 'Equipes Dispersas',
    description: 'Cada pessoa trabalha em um local diferente',
  },
  {
    icon: Globe,
    title: 'Diversidade Cultural',
    description: 'Equipes com backgrounds muito diferentes',
  },
  {
    icon: Wrench,
    title: 'Trabalho Físico e Repetitivo',
    description: 'Precisa de motivação além do salário',
  },
];

export default function Slide6() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-12">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">MÓDULO 1</span>
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mt-4">A Realidade do Nosso Setor</h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mt-4">As 3 alavancas criam o pertencimento que retém</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        {challenges.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-8 flex gap-6">
              <div className="w-20 h-20 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                <Icon size={44} className="text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-3xl text-[#F0F4F8] mb-3">{item.title}</h3>
                <p className="font-lato text-xl text-[#C4B5FD]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
