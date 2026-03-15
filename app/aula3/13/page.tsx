import { Link2, Heart } from 'lucide-react';

export default function Slide13() {
  const connections = [
    {
      pair: 'D + S',
      colors: ['#EF4444', '#22C55E'],
      why: 'D lidera com energia, S estabiliza a equipe. Equilíbrio entre velocidade e harmonia.'
    },
    {
      pair: 'I + S',
      colors: ['#F59E0B', '#22C55E'],
      why: 'I motiva e anima, S mantém tudo funcionando. Ambiente leve e produtivo.'
    },
    {
      pair: 'C + D',
      colors: ['#3B82F6', '#EF4444'],
      why: 'C garante qualidade, D garante velocidade. Resultado com excelência.'
    },
    {
      pair: 'I + C',
      colors: ['#F59E0B', '#3B82F6'],
      why: 'I traz criatividade, C traz precisão. Ideias que funcionam.'
    }
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Link2 size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-[1500px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4 text-center">
          Conexão Entre Perfis DISC
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mb-12 text-center">
          Quais perfis trabalham melhor juntos e por quê
        </p>

        <div className="grid grid-cols-2 gap-8">
          {connections.map((item, index) => (
            <div key={index} className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: item.colors[0] }}>
                    <span className="font-montserrat font-bold text-2xl text-white">{item.pair.split(' + ')[0]}</span>
                  </div>
                  <Heart className="text-[#C4B5FD]" size={24} />
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: item.colors[1] }}>
                    <span className="font-montserrat font-bold text-2xl text-white">{item.pair.split(' + ')[1]}</span>
                  </div>
                </div>
              </div>
              <p className="font-lato text-xl text-[#F0F4F8]">{item.why}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
