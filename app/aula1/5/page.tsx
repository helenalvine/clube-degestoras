import { Briefcase, CheckCircle } from 'lucide-react';

const questions = [
  'Você tem experiência com limpeza residencial? Há quanto tempo trabalha na área?',
  'O que você prefere ou faz melhor? (cozinha, banheiro, pó, arrumação de camas)',
  'Você já trabalhou com outros tipos de limpeza?',
  'Você pode fornecer referências de trabalhos anteriores?',
  'Por que você saiu do seu último trabalho?',
];

const cleaningTypes = ['Commercial Cleaning', 'Deep Cleaning', 'Post Construction'];

export default function Slide5() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Briefcase size={800} className="text-[#2DD4BF]" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center">
            <Briefcase size={36} className="text-[#2DD4BF]" />
          </div>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">
            Experiência e Histórico Profissional
          </h1>
        </div>

        <div className="bg-[#120826] border-2 border-[#2DD4BF]/30 rounded-2xl p-8">
          <div className="space-y-5">
            {questions.slice(0, 2).map((q, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={28} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
                <p className="font-lato text-2xl text-[#F0F4F8]">{q}</p>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <CheckCircle size={28} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
              <div>
                <p className="font-lato text-2xl text-[#F0F4F8] mb-3">{questions[2]}</p>
                <div className="flex gap-4 ml-4">
                  {cleaningTypes.map((type, i) => (
                    <span key={i} className="bg-[#8B5CF6]/30 text-[#C4B5FD] px-4 py-2 rounded-lg font-lato text-lg">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {questions.slice(3).map((q, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={28} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
                <p className="font-lato text-2xl text-[#F0F4F8]">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
