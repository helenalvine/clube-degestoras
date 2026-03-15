import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

const timeline = [
  {
    icon: AlertCircle,
    title: 'O Início',
    color: '#EF4444',
    content: 'Alta rotatividade, problemas com qualidade, dificuldade em manter padrão',
  },
  {
    icon: Lightbulb,
    title: 'A Virada',
    color: '#8B5CF6',
    content: 'Decisão de definir valores claros e implementar cultura de forma intencional',
  },
  {
    icon: TrendingUp,
    title: 'O Resultado',
    color: '#2DD4BF',
    content: 'Equipe estável, qualidade consistente, clientes fiéis, crescimento sustentável',
  },
];

export default function Slide7() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-12">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">MÓDULO 1</span>
        <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8] mt-4">Case I&F: Como a Cultura Sustenta o Crescimento</h1>
      </div>

      <div className="flex-1 flex items-center">
        <div className="w-full flex justify-between items-start relative">
          {/* Timeline line */}
          <div className="absolute top-16 left-[15%] right-[15%] h-1 bg-[#8B5CF6]/30"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center w-1/3 px-8 relative z-10">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${item.color}20`, border: `4px solid ${item.color}` }}
                >
                  <Icon size={56} style={{ color: item.color }} />
                </div>
                <h3 className="font-montserrat font-bold text-3xl text-[#F0F4F8] mb-4">{item.title}</h3>
                <p className="font-lato text-xl text-[#C4B5FD]">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#2DD4BF]/20 border-2 border-[#2DD4BF] rounded-2xl p-6 text-center">
        <p className="font-lato text-2xl text-[#F0F4F8]">
          "I&F é conhecida pela equipe. E tudo começou com cultura."
        </p>
      </div>
    </div>
  );
}
