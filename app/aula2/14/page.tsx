import { Wifi, MessageSquare, Calendar, FileCheck, Shield } from 'lucide-react';

const strategies = [
  { icon: MessageSquare, title: 'Grupo de Comunicação', description: 'WhatsApp organizado com regras claras' },
  { icon: Calendar, title: 'Check-ins Regulares', description: 'Contato diário ou semanal estruturado' },
  { icon: Wifi, title: 'Encontros Presenciais', description: 'Reuniões mensais para fortalecer vínculos' },
  { icon: FileCheck, title: 'Padronização', description: 'Processos claros que todos conhecem' },
  { icon: Shield, title: 'Confiança', description: 'Construir autonomia com responsabilidade' },
];

export default function Slide14() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-8">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">IMPLEMENTAÇÃO</span>
        <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8] mt-4">Cultura à Distância</h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mt-4">Como manter qualidade quando você não está presente</p>
      </div>

      <div className="bg-[#2DD4BF]/20 border-l-4 border-[#2DD4BF] p-6 mb-8">
        <p className="font-lato text-2xl text-[#F0F4F8]">
          "Cultura forte substitui a supervisão direta."
        </p>
      </div>

      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-5 gap-6 w-full">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center mb-4">
                  <span className="font-montserrat font-bold text-xl text-[#1A0A2E]">{index + 1}</span>
                </div>
                <div className="w-16 h-16 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center mb-4">
                  <Icon size={32} className="text-[#8B5CF6]" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#F0F4F8] mb-2">{strategy.title}</h3>
                <p className="font-lato text-sm text-[#C4B5FD]">{strategy.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
