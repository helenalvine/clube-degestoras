import { Brain, Zap, MessageSquare, AlertTriangle, CheckSquare } from 'lucide-react';

const questions = [
  {
    icon: Zap,
    text: 'Você se considera uma pessoa mais rápida ou mais detalhista?',
    color: '#2DD4BF'
  },
  {
    icon: MessageSquare,
    text: 'Quando um cliente faz uma reclamação sobre seu trabalho, como você reage?',
    color: '#8B5CF6'
  },
  {
    icon: AlertTriangle,
    text: 'Se você quebrar algo na casa do cliente, como você costuma proceder?',
    color: '#F59E0B'
  },
  {
    icon: CheckSquare,
    text: 'Quando termina um trabalho, você costuma revisar seu serviço ou apenas seguir para o próximo?',
    color: '#2DD4BF'
  },
];

export default function Slide7() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Brain size={800} className="text-[#2DD4BF]" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center">
            <Brain size={36} className="text-[#2DD4BF]" />
          </div>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">
            Perguntas Comportamentais
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {questions.map((q, index) => {
            const Icon = q.icon;
            return (
              <div
                key={index}
                className="bg-[#120826] border-2 rounded-2xl p-8 flex items-start gap-5"
                style={{ borderColor: `${q.color}40` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${q.color}20` }}
                >
                  <Icon size={28} style={{ color: q.color }} />
                </div>
                <p className="font-lato text-2xl text-[#F0F4F8] leading-relaxed">
                  {q.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl p-6 text-center">
          <p className="font-lato text-xl text-[#C4B5FD]">
            💡 Essas perguntas revelam o <span className="text-[#2DD4BF] font-bold">perfil comportamental</span> e a <span className="text-[#2DD4BF] font-bold">atitude</span> da candidata
          </p>
        </div>
      </div>
    </div>
  );
}
