import { Users } from 'lucide-react';

export default function Slide9() {
  const roles = [
    { letter: 'D', role: 'organiza e lidera', color: '#EF4444' },
    { letter: 'I', role: 'motiva e anima a equipe', color: '#F59E0B' },
    { letter: 'S', role: 'mantém estabilidade da equipe', color: '#22C55E' },
    { letter: 'C', role: 'cuida dos detalhes', color: '#3B82F6' }
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4">
          Equipe Equilibrada
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD]">
          Cada perfil tem uma função essencial na equipe
        </p>
      </div>

      <div className="max-w-[1200px] w-full">
        <div className="grid grid-cols-2 gap-6 mb-10">
          {roles.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 flex items-center gap-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-none"
                style={{ backgroundColor: item.color }}
              >
                <span className="font-montserrat font-bold text-4xl text-white">
                  {item.letter}
                </span>
              </div>
              <p className="font-lato text-3xl text-[#F0F4F8]">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#2DD4BF] rounded-2xl p-8 text-center flex items-center justify-center gap-6">
          <Users className="text-[#1A0A2E]" size={48} />
          <p className="font-montserrat font-bold text-4xl text-[#1A0A2E]">
            Equipes equilibradas trabalham melhor.
          </p>
        </div>
      </div>
    </div>
  );
}
