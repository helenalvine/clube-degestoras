import { MapPin, CheckCircle, Car, Clock, Globe, FileText } from 'lucide-react';

const questions = [
  { icon: Car, text: 'Você possui transporte para chegar ao ponto de encontro?' },
  { icon: Car, text: 'Você possui carteira de motorista? (se a vaga exigir)' },
  { icon: Globe, text: 'Você fala inglês? Qual o nível?' },
  { icon: FileText, text: 'Você possui ITIN Number ou Social Security Number?' },
  { icon: Clock, text: 'Você tem alguma restrição de horário ou outro trabalho part-time?' },
];

const experienceItems = ['limpeza de geladeira', 'limpeza de forno', 'janelas e gabinetes'];

export default function Slide6() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <MapPin size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
            <MapPin size={36} className="text-[#8B5CF6]" />
          </div>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">
            Logística e Requisitos
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-6">
            <div className="space-y-4">
              {questions.slice(0, 2).map((q, index) => {
                const Icon = q.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon size={24} className="text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <p className="font-lato text-xl text-[#F0F4F8]">{q.text}</p>
                  </div>
                );
              })}

              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#8B5CF6] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-lato text-xl text-[#F0F4F8] mb-2">Você tem experiência com:</p>
                  <div className="flex flex-wrap gap-2 ml-2">
                    {experienceItems.map((item, i) => (
                      <span key={i} className="bg-[#2DD4BF]/20 text-[#2DD4BF] px-3 py-1 rounded-lg font-lato text-base">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-6">
            <div className="space-y-4">
              {questions.slice(2).map((q, index) => {
                const Icon = q.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon size={24} className="text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <p className="font-lato text-xl text-[#F0F4F8]">{q.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
