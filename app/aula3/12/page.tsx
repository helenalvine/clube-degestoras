import { MessageSquare, UserX, Eye } from 'lucide-react';

export default function Slide12() {
  const steps = [
    { icon: UserX, text: 'Nunca confronte na frente da equipe.' },
    { icon: MessageSquare, text: 'Converse em particular.' }
  ];

  const approach = ['Seja clara', 'Seja específica', 'Foque no comportamento'];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8]">
          Como Conduzir a Situação
        </h1>
      </div>

      <div className="max-w-[1200px] w-full">
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="bg-white/5 rounded-xl p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#8B5CF6] flex items-center justify-center flex-none">
                  <span className="font-montserrat font-bold text-3xl text-white">
                    {index + 1}
                  </span>
                </div>
                <IconComponent className="text-[#2DD4BF] flex-none" size={40} />
                <p className="font-lato text-4xl text-[#F0F4F8]">{step.text}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#8B5CF6]/10 rounded-2xl p-10 border-l-4 border-[#8B5CF6]">
          <div className="flex items-center gap-4 mb-6">
            <Eye className="text-[#8B5CF6]" size={40} />
            <p className="font-montserrat font-bold text-4xl text-[#8B5CF6]">Na conversa:</p>
          </div>
          <div className="flex justify-center gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-xl px-8 py-4">
                <p className="font-lato text-3xl text-[#F0F4F8]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
