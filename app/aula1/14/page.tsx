import { CheckCircle, Award, Shirt, Users } from 'lucide-react';

const steps = [
  {
    icon: CheckCircle,
    title: 'Decisão de Contratação',
    desc: 'Avalie todas as informações coletadas antes de decidir',
    color: '#2DD4BF'
  },
  {
    icon: Award,
    title: 'Comunicação de Aprovação',
    desc: 'Entre em contato com a candidata selecionada',
    color: '#8B5CF6'
  },
  {
    icon: Shirt,
    title: 'Entrega de Uniforme',
    desc: 'Quando aplicável, entregue uniforme e materiais',
    color: '#2DD4BF'
  },
  {
    icon: Users,
    title: 'Integração Inicial',
    desc: 'Apresente à equipe e inicie o treinamento',
    color: '#8B5CF6'
  },
];

export default function Slide14() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Award size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1500px]">
        <div className="mb-8">
          <span className="inline-block bg-[#2DD4BF] text-[#1A0A2E] font-montserrat font-bold text-xl px-6 py-3 rounded-full">
            FECHAMENTO DA CONTRATAÇÃO
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4">
          Após a Entrevista
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mb-12">Os próximos passos para finalizar a contratação</p>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 rounded-2xl p-8 relative" style={{ borderColor: `${item.color}40` }}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                  <span className="font-montserrat font-bold text-lg text-[#1A0A2E]">{index + 1}</span>
                </div>
                <div className="w-16 h-16 rounded-full mx-auto mb-5 mt-2 flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                  <Icon size={32} style={{ color: item.color }} />
                </div>
                <p className="font-montserrat font-bold text-xl text-[#F0F4F8] mb-2">
                  {item.title}
                </p>
                <p className="font-lato text-base text-[#C4B5FD]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl p-6">
          <p className="font-lato text-xl text-[#C4B5FD]">
            💡 Uma boa integração reduz a chance de <span className="text-[#2DD4BF] font-bold">desistência nos primeiros dias</span>
          </p>
        </div>
      </div>
    </div>
  );
}
