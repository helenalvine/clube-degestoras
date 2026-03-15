import { Calendar, CheckCircle } from 'lucide-react';

const timeline = [
  {
    phase: 'Dia 01',
    color: '#8B5CF6',
    items: [
      'Entrega de equipamentos',
      'Apresentação da cultura (SEM manual escrito)',
      'Explicação dos valores e expectativas',
    ],
  },
  {
    phase: 'Primeira Semana',
    color: '#2DD4BF',
    items: [
      'Treinamento prático em campo',
      'Apresentação à equipe',
      'Acompanhamento diário',
    ],
  },
  {
    phase: 'Primeiro Mês',
    color: '#C4B5FD',
    items: [
      'Monitoramento de desempenho',
      'Feedback estruturado',
      'Reforço dos valores',
    ],
  },
];

export default function Slide16() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
          <Calendar size={36} className="text-[#8B5CF6]" />
        </div>
        <div>
          <span className="text-[#8B5CF6] font-montserrat font-bold text-xl">IMPLEMENTAÇÃO</span>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">Implementação na Prática</h1>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-8">
        {timeline.map((phase, index) => (
          <div key={index} className="bg-[#120826] rounded-2xl p-8 border-t-4" style={{ borderColor: phase.color }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                <span className="font-montserrat font-bold text-lg text-[#1A0A2E]">{index + 1}</span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl" style={{ color: phase.color }}>{phase.phase}</h3>
            </div>
            <div className="space-y-4">
              {phase.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={22} style={{ color: phase.color }} className="flex-shrink-0 mt-1" />
                  <span className="font-lato text-lg text-[#F0F4F8]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
