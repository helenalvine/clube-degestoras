export default function Slide13() {
  const profiles = [
    { letter: 'D', name: 'Dominante', color: '#EF4444' },
    { letter: 'I', name: 'Influente', color: '#F59E0B' },
    { letter: 'S', name: 'Estável', color: '#22C55E' },
    { letter: 'C', name: 'Consciente', color: '#3B82F6' },
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4">
          Os 4 Perfis DISC
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD]">
          Cada pessoa tem um estilo comportamental predominante
        </p>
      </div>

      <div className="flex gap-16">
        {profiles.map((profile) => (
          <div key={profile.letter} className="flex flex-col items-center">
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: profile.color }}
            >
              <span className="font-montserrat font-bold text-8xl text-white">
                {profile.letter}
              </span>
            </div>
            <p className="font-montserrat font-bold text-3xl text-[#F0F4F8]">
              {profile.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
