import { MessageSquare, Target, Repeat, Calendar, ArrowLeftRight } from 'lucide-react';

const principles = [
  { icon: Target, title: 'Clareza', description: 'Mensagens simples e diretas' },
  { icon: Repeat, title: 'Consistência', description: 'Sempre o mesmo padrão' },
  { icon: Calendar, title: 'Frequência', description: 'Comunicação regular' },
  { icon: ArrowLeftRight, title: 'Duas Vias', description: 'Ouvir tanto quanto falar' },
];

export default function Slide11() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
          <MessageSquare size={36} className="text-[#8B5CF6]" />
        </div>
        <div>
          <span className="text-[#8B5CF6] font-montserrat font-bold text-xl">PILAR 3</span>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">Comunicação: O Oxigênio da Cultura</h1>
        </div>
      </div>

      <div className="bg-[#120826] border-l-4 border-[#2DD4BF] p-6 mb-12">
        <p className="font-lato text-3xl text-[#F0F4F8] italic">
          "Cultura morre no silêncio."
        </p>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-8">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div key={index} className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center mb-6">
                <Icon size={44} className="text-[#8B5CF6]" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-[#F0F4F8] mb-3">{principle.title}</h3>
              <p className="font-lato text-lg text-[#C4B5FD]">{principle.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
