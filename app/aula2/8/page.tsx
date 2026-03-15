import { Heart, Calendar, MessageSquare, Users } from 'lucide-react';

const pillars = [
  { icon: Heart, name: 'Valores', color: '#8B5CF6' },
  { icon: Calendar, name: 'Práticas', color: '#2DD4BF' },
  { icon: MessageSquare, name: 'Comunicação', color: '#8B5CF6' },
  { icon: Users, name: 'Comportamentos', color: '#2DD4BF' },
];

export default function Slide8() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex items-center justify-center">
      <div className="text-center">
        <span className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] font-montserrat font-bold text-3xl px-8 py-4 rounded-full mb-8">
          MÓDULO 2
        </span>
        <h1 className="font-montserrat font-bold text-8xl text-[#F0F4F8] mb-16">
          Os Pilares da Cultura
        </h1>

        <div className="flex justify-center gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.color}20` }}
                >
                  <Icon size={64} style={{ color: pillar.color }} />
                </div>
                <span className="font-montserrat font-bold text-2xl text-[#F0F4F8]">{pillar.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
