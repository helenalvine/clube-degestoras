import { UserPlus, Target, Eye, Users } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Identificar o Perfil Ideal',
    description: 'Saber qual perfil combina melhor com cada tipo de trabalho na sua empresa',
    color: '#2DD4BF'
  },
  {
    icon: Eye,
    title: 'Aplicar teste DISC',
    description: 'Descobrir o perfil comportamental com o resultado do teste',
    color: '#8B5CF6'
  },
  {
    icon: Users,
    title: 'Montar Equipes Equilibradas',
    description: 'Combinar perfis que se complementam ao invés de criar conflitos',
    color: '#2DD4BF'
  }
];

export default function Slide9() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <UserPlus size={800} className="text-[#2DD4BF]" />
      </div>

      <div className="text-center relative z-10 max-w-[1400px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-6">
          Por Que Usar <span className="text-[#2DD4BF]">DISC</span> na Contratação?
        </h1>

        <p className="font-lato text-2xl text-[#C4B5FD] mb-12">
          Entender comportamento ajuda a contratar melhor
        </p>

        <div className="grid grid-cols-3 gap-8 mb-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 rounded-2xl p-8" style={{ borderColor: `${item.color}40` }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                  <Icon size={40} style={{ color: item.color }} />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#F0F4F8] mb-4">{item.title}</h3>
                <p className="font-lato text-lg text-[#C4B5FD]">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-xl p-6">
          <p className="font-lato text-xl text-[#F0F4F8]">
            💡 Na aula de <span className="text-[#2DD4BF] font-bold">Liderança</span>, você vai aprender a gerenciar cada perfil no dia a dia
          </p>
        </div>
      </div>
    </div>
  );
}
