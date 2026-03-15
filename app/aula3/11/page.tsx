import { UserX, XCircle, AlertTriangle } from 'lucide-react';

export default function Slide11() {
  const toxicBehaviors = [
    'Espalha fofoca',
    'Cria conflitos',
    'Fala mal da empresa',
    'Desrespeita liderança'
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8]">
          Funcionária Tóxica
        </h1>
      </div>

      <div className="max-w-[1000px] w-full">
        <div className="bg-[#EF4444]/10 rounded-2xl p-12 border-l-4 border-[#EF4444]">
          <div className="flex items-center gap-6 mb-10">
            <UserX className="text-[#EF4444]" size={56} />
            <p className="font-montserrat font-bold text-5xl text-[#EF4444]">
              Sinais de alerta
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {toxicBehaviors.map((behavior, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-6">
                <XCircle className="text-[#EF4444] flex-none" size={32} />
                <p className="font-lato text-3xl text-[#F0F4F8]">{behavior}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#EF4444] rounded-xl p-8 flex items-center justify-center gap-4">
            <AlertTriangle className="text-white" size={40} />
            <p className="font-montserrat font-bold text-4xl text-white">
              Esse comportamento contamina a equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
