import { Target, CheckCircle } from 'lucide-react';

export default function Slide17() {
  const takeaways = [
    'Perfis DISC ajudam a entender, não a rotular',
    'Equipes equilibradas trabalham melhor',
    'Funcionária difícil ≠ funcionária tóxica',
    'Reuniões estruturadas melhoram comunicação',
    'Dinâmicas práticas fortalecem a liderança'
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Target size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-[1200px] text-center">
        <span className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] font-montserrat font-bold text-2xl px-8 py-3 rounded-full mb-8">
          FECHAMENTO
        </span>

        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-12">
          O Que Aprendemos Hoje
        </h1>

        <div className="space-y-4 mb-12">
          {takeaways.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-5 flex items-center gap-4">
              <CheckCircle className="text-[#2DD4BF] flex-shrink-0" size={28} />
              <p className="font-lato text-2xl text-[#F0F4F8] text-left">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#2DD4BF] rounded-2xl p-8">
          <p className="font-montserrat font-bold text-3xl text-[#1A0A2E]">
            Liderança é entender pessoas e guiá-las com clareza.
          </p>
        </div>
      </div>
    </div>
  );
}
