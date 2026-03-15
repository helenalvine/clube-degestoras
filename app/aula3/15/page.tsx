import { Sparkles, MessageSquare, Trophy, Users } from 'lucide-react';

export default function Slide15() {
  const dynamics = [
    {
      icon: MessageSquare,
      title: 'Feedback 360° Anônimo',
      purpose: 'Coletar opiniões honestas da equipe sobre liderança e ambiente de trabalho',
      color: '#8B5CF6'
    },
    {
      icon: Trophy,
      title: 'Reconhecimento entre Pares',
      purpose: 'Incentivar a equipe a reconhecer o bom trabalho uns dos outros',
      color: '#F59E0B'
    },
    {
      icon: Users,
      title: 'Ritual de Alinhamento Semanal',
      purpose: 'Criar consistência e previsibilidade nas expectativas da equipe',
      color: '#2DD4BF'
    }
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Sparkles size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-[1400px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4 text-center">
          Dinâmicas de Liderança
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mb-12 text-center">
          Ferramentas práticas para aplicar com sua equipe
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

        <div className="mt-8 bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-xl p-6 text-center">
          <p className="font-lato text-xl text-[#F0F4F8]">
            📝 Essas dinâmicas serão praticadas nas <span className="text-[#2DD4BF] font-bold">Mesas Redondas</span>
          </p>
        </div>
      </div>
    </div>
  );
}
