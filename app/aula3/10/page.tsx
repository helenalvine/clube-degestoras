import { User, CheckCircle } from 'lucide-react';

export default function Slide10() {
  const signs = [
    'Está cansada',
    'Tem problema pessoal',
    'Reclama às vezes'
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8]">
          Funcionária Difícil x Funcionária Tóxica
        </h1>
      </div>

      <div className="max-w-[1000px] w-full">
        <div className="bg-[#F59E0B]/10 rounded-2xl p-12 border-l-4 border-[#F59E0B]">
          <div className="flex items-center gap-6 mb-10">
            <User className="text-[#F59E0B]" size={56} />
            <p className="font-montserrat font-bold text-5xl text-[#F59E0B]">
              Funcionária difícil
            </p>
          </div>

          <div className="space-y-6 mb-10">
            {signs.map((sign, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="text-[#F59E0B]" size={32} />
                <p className="font-lato text-4xl text-[#C4B5FD]">{sign}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#2DD4BF] rounded-xl p-8 text-center">
            <p className="font-montserrat font-bold text-4xl text-[#1A0A2E]">
              Isso pode ser resolvido com liderança.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
