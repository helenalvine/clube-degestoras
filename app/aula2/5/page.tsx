import { CheckCircle } from 'lucide-react';

const pyramidLevels = [
  { name: 'RESULTADOS', color: '#2DD4BF', width: '45%' },
  { name: 'VALORIZAÇÃO', color: '#C4B5FD', width: '60%' },
  { name: 'LIDERANÇA', color: '#8B5CF6', width: '75%' },
  { name: 'CULTURA', color: '#F0F4F8', width: '90%' },
];

const points = [
  'Sem cultura, benefícios não retêm pessoas',
  'Sem cultura, liderança não funciona',
  'Crescimento vira caos sem cultura',
];

export default function Slide5() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-8">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">MÓDULO 1</span>
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mt-4">Cultura É o Alicerce</h1>
      </div>

      <div className="flex-1 flex gap-16">
        {/* Pyramid */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 w-full">
            {pyramidLevels.map((level, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-6 rounded-lg font-montserrat font-bold text-2xl"
                style={{
                  backgroundColor: level.color,
                  color: '#1A0A2E',
                  width: level.width
                }}
              >
                {level.name}
              </div>
            ))}
          </div>
          <p className="font-lato text-xl text-[#C4B5FD] mt-8 text-center">
            Tudo começa pela base
          </p>
        </div>

        {/* Points */}
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="font-montserrat font-bold text-3xl text-[#2DD4BF] mb-8">Tudo depende da cultura:</h3>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={32} className="text-[#8B5CF6] flex-shrink-0 mt-1" />
                <p className="font-lato text-2xl text-[#F0F4F8]">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#8B5CF6]/20 border-2 border-[#8B5CF6] rounded-2xl p-8">
            <p className="font-lato text-2xl text-[#F0F4F8] text-center">
              "Cultura é o que faz sua empresa funcionar<br/>mesmo quando você não está olhando."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
