import { Presentation, Repeat, BookOpen, Star, ChevronRight } from 'lucide-react';

const steps = [
  { icon: Presentation, title: 'Apresente', description: 'Explique os valores claramente' },
  { icon: Repeat, title: 'Pratique', description: 'Tenha constância e resiliência na implementação' },
  { icon: BookOpen, title: 'Repita', description: 'Reforce em toda oportunidade' },
  { icon: Star, title: 'Use Histórias', description: 'Exemplos reais tocam mais' },
  { icon: ChevronRight, title: 'Viva os Valores', description: 'Seja o exemplo' },
];

export default function Slide15() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-12">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">IMPLEMENTAÇÃO</span>
        <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8] mt-4">Comunicando Cultura para a Equipe</h1>
      </div>

      <div className="flex-1 flex items-center">
        <div className="flex justify-between items-start w-full">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center flex-1">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mb-6">
                    <Icon size={44} className="text-[#8B5CF6]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#2DD4BF] flex items-center justify-center">
                    <span className="font-montserrat font-bold text-lg text-[#1A0A2E]">{index + 1}</span>
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#F0F4F8] mb-3">{step.title}</h3>
                <p className="font-lato text-lg text-[#C4B5FD] max-w-[180px]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-6 text-center">
        <p className="font-lato text-2xl text-[#C4B5FD]">
          Valores precisam ser <span className="text-[#2DD4BF] font-bold">ouvidos, vistos e sentidos</span> constantemente pela equipe.
        </p>
      </div>
    </div>
  );
}
