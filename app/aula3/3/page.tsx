import { Users } from 'lucide-react';

const profiles = [
  { letter: 'D', name: 'Dominante', color: '#EF4444' },
  { letter: 'I', name: 'Influente', color: '#F59E0B' },
  { letter: 'S', name: 'Estável', color: '#22C55E' },
  { letter: 'C', name: 'Consciente', color: '#3B82F6' },
];

export default function Slide3() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col">
      {/* Header */}
      <div className="flex-none pt-16 pb-8 px-24">
        <div className="border-l-4 border-[#8B5CF6] pl-6">
          <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8]">
            Os 4 Perfis na Sua Equipe
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-24">
        <div className="max-w-[1400px] w-full">
          <p className="font-lato text-3xl text-[#C4B5FD] mb-12 text-center">
            Cada pessoa trabalha de um jeito diferente.
          </p>

          <div className="flex justify-center gap-10 mb-12">
            {profiles.map((profile, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: profile.color }}
                >
                  <span className="font-montserrat font-bold text-7xl text-white">
                    {profile.letter}
                  </span>
                </div>
                <p className="font-montserrat font-bold text-2xl text-[#F0F4F8]">
                  {profile.name}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#8B5CF6] rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-4xl text-[#1A0A2E]">
              Liderar bem é saber lidar com cada perfil.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none flex justify-between px-24 py-8">
        <p className="font-lato text-3xl text-[#64748B]">
          Clube de Gestoras | I&F Cleaning Management Academy
        </p>
        <p className="font-lato text-3xl text-[#64748B]">
          Liderança
        </p>
      </div>
    </div>
  );
}
