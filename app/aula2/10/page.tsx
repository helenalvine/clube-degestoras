import { Calendar, Clock } from 'lucide-react';

const practices = [
  { frequency: 'Diário', items: ['Envio de rotas pela manhã', 'Check-in de chegada nas casas', 'Aviso imediato de atrasos'], color: '#8B5CF6' },
  { frequency: 'Semanal', items: ['Reposição de materiais', 'Reunião de time (opcional)'], color: '#2DD4BF' },
  { frequency: 'Mensal', items: ['Reunião geral com toda a equipe'], color: '#C4B5FD' },
];

export default function Slide10() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-xl bg-[#2DD4BF]/20 flex items-center justify-center">
          <Calendar size={36} className="text-[#2DD4BF]" />
        </div>
        <div>
          <span className="text-[#2DD4BF] font-montserrat font-bold text-xl">PILAR 2</span>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">Práticas: Cultura em Ação</h1>
        </div>
      </div>

      <p className="font-lato text-2xl text-[#C4B5FD] mb-8">
        Práticas são como os valores são vividos no dia a dia. <span className="text-[#2DD4BF] font-bold">Comece com 1 prática bem executada.</span>
      </p>

      <div className="flex-1 grid grid-cols-3 gap-8">
        {practices.map((practice, index) => (
          <div key={index} className="bg-[#120826] border-2 rounded-2xl p-8" style={{ borderColor: `${practice.color}50` }}>
            <div className="flex items-center gap-3 mb-6">
              <Clock size={28} style={{ color: practice.color }} />
              <h3 className="font-montserrat font-bold text-3xl" style={{ color: practice.color }}>{practice.frequency}</h3>
            </div>
            <div className="space-y-4">
              {practice.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: practice.color }}></div>
                  <span className="font-lato text-xl text-[#F0F4F8]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
