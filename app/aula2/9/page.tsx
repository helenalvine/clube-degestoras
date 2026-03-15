import { Heart, CheckCircle } from 'lucide-react';

const values = [
  { name: 'Excelência', description: 'Fazer o melhor sempre, sem atalhos' },
  { name: 'Honestidade', description: 'Transparência em tudo que fazemos' },
  { name: 'Respeito', description: 'Tratar a todos com dignidade' },
  { name: 'Responsabilidade', description: 'Cumprir o que prometemos' },
  { name: 'Trabalho em Equipe', description: 'Crescemos juntos' },
];

const uses = [
  'Contratar as pessoas certas',
  'Resolver conflitos',
  'Tomar decisões difíceis',
  'Avaliar desempenho',
];

export default function Slide9() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
          <Heart size={36} className="text-[#8B5CF6]" />
        </div>
        <div>
          <span className="text-[#8B5CF6] font-montserrat font-bold text-xl">PILAR 1</span>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">Valores: O Coração da Cultura</h1>
        </div>
      </div>

      <p className="font-lato text-2xl text-[#C4B5FD] mb-4">Valores são crenças fundamentais que guiam decisões e comportamentos.</p>
      <p className="font-lato text-2xl text-[#C4B5FD] mb-8"><span className="text-[#2DD4BF] font-bold">Falta de respeito não é tolerada e gera multa ou suspensão.</span></p>

      <div className="flex-1 grid grid-cols-2 gap-12">
        <div>
          <h3 className="font-montserrat font-bold text-2xl text-[#2DD4BF] mb-6">Para que servem os valores?</h3>
          <div className="space-y-4">
            {uses.map((use, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={24} className="text-[#8B5CF6]" />
                <span className="font-lato text-xl text-[#F0F4F8]">{use}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-montserrat font-bold text-2xl text-[#2DD4BF] mb-6">Exemplos de Valores</h3>
          <div className="space-y-3">
            {values.map((value, index) => (
              <div key={index} className="bg-[#120826] border border-[#8B5CF6]/30 rounded-xl p-4">
                <span className="font-montserrat font-bold text-xl text-[#8B5CF6]">{value.name}</span>
                <span className="font-lato text-lg text-[#C4B5FD]"> — {value.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
