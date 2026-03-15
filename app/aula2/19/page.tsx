import { Target, Users, Sun, MessageSquare, CalendarDays, Lightbulb, ChevronRight } from 'lucide-react';

const homework = [
  { icon: MessageSquare, text: 'Agendar reunião geral de implementação e organizar grupos no WhatsApp' },
  { icon: Sun, text: 'Estabelecer check-in diário com a equipe' },
  { icon: CalendarDays, text: 'Definir prática semanal de alinhamento' },
];

const nextClass = [
  'Como liderança complementa a cultura',
  'Os 4 perfis comportamentais (DISC)',
  'Como lidar com funcionária difícil vs. tóxica',
];

export default function Slide19() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-[#2DD4BF]/20 flex items-center justify-center">
          <Target size={36} className="text-[#2DD4BF]" />
        </div>
        <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">Sua Missão Esta Semana</h1>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-16">
        {/* Homework */}
        <div className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-10">
          <h3 className="font-montserrat font-bold text-3xl text-[#8B5CF6] mb-8">Implementar 1 prática cultural</h3>
          <div className="space-y-6">
            {homework.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-[#8B5CF6]" />
                  </div>
                  <p className="font-lato text-xl text-[#F0F4F8] pt-2">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Class */}
        <div className="bg-[#120826] border-2 border-[#2DD4BF]/30 rounded-2xl p-10">
          <div className="flex items-center gap-4 mb-8">
            <Lightbulb size={32} className="text-[#2DD4BF]" />
            <h3 className="font-montserrat font-bold text-3xl text-[#2DD4BF]">PRÓXIMA AULA</h3>
          </div>
          <h4 className="font-montserrat font-bold text-2xl text-[#F0F4F8] mb-6">Liderança</h4>
          <div className="space-y-4">
            {nextClass.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <ChevronRight size={20} className="text-[#2DD4BF]" />
                <span className="font-lato text-lg text-[#C4B5FD]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-[#2DD4BF]/30">
            <p className="font-lato text-lg text-[#C4B5FD] italic">
              "Como está o seu perfil como líder?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
