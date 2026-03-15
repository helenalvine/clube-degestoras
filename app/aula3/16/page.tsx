import { Sparkles, UserPlus, AlertTriangle, PartyPopper } from 'lucide-react';

export default function Slide16() {
  const dynamics = [
    {
      icon: UserPlus,
      title: 'Onboarding Cultural Estruturado',
      purpose: 'Integrar novos membros à cultura da empresa desde o primeiro dia',
      color: '#22C55E'
    },
    {
      icon: AlertTriangle,
      title: 'Resolução de Conflitos em Equipe',
      purpose: 'Método estruturado para mediar desentendimentos sem tomar partido',
      color: '#EF4444'
    },
    {
      icon: PartyPopper,
      title: 'Celebração de Conquistas',
      purpose: 'Reconhecer marcos e vitórias da equipe para manter motivação alta',
      color: '#F59E0B'
    }
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Sparkles size={800} className="text-[#2DD4BF]" />
      </div>

      <div className="relative z-10 max-w-[1400px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4 text-center">
          Mais Dinâmicas de Liderança
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mb-12 text-center">
          Completando as 6 dinâmicas essenciais
        </p>

        <div className="space-y-6">
          {dynamics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 rounded-2xl p-8 flex items-center gap-6" style={{ borderColor: `${item.color}40` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                  <Icon size={40} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-3xl text-[#F0F4F8] mb-2">{item.title}</h3>
                  <p className="font-lato text-xl text-[#C4B5FD]">{item.purpose}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-[#2DD4BF]/20 border border-[#2DD4BF] rounded-xl p-6 text-center">
          <p className="font-lato text-xl text-[#F0F4F8]">
            ✅ Total: <span className="text-[#2DD4BF] font-bold">6 dinâmicas</span> prontas para aplicar com sua equipe
          </p>
        </div>
      </div>
    </div>
  );
}
