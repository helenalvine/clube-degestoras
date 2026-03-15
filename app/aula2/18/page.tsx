import { CheckCircle, Sparkles } from 'lucide-react';

const takeaways = [
  { title: 'Cultura É o Alicerce', description: 'Base para tudo funcionar' },
  { title: 'Os 4 Pilares', description: 'Valores, Práticas, Comunicação, Comportamentos' },
  { title: 'Implementação Prática', description: 'Começar com 1 prática bem executada' },
  { title: 'Cultura em Equipes', description: 'Funciona mesmo à distância' },
  { title: 'Case I&F', description: 'Prova de que funciona' },
];

export default function Slide18() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-12">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">FECHAMENTO</span>
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mt-4">O Que Aprendemos Hoje</h1>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-x-16 gap-y-6">
        {takeaways.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle size={24} className="text-[#2DD4BF]" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-[#F0F4F8]">{item.title}</h3>
              <p className="font-lato text-xl text-[#C4B5FD]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#2DD4BF]/20 border-2 border-[#8B5CF6] rounded-2xl p-8 flex items-center gap-6">
        <Sparkles size={48} className="text-[#2DD4BF]" />
        <p className="font-lato text-2xl text-[#F0F4F8]">
          Cultura começa com uma decisão: <span className="text-[#2DD4BF] font-bold">definir quem vocês são e viver isso todos os dias.</span>
        </p>
      </div>
    </div>
  );
}
