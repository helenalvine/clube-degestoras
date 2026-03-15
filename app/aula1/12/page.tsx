import { BarChart3, FileText } from 'lucide-react';

const resultados = [
  { letra: 'A', perfil: 'Dominante', sigla: 'D', color: '#EF4444' },
  { letra: 'B', perfil: 'Influente', sigla: 'I', color: '#F59E0B' },
  { letra: 'C', perfil: 'Estável', sigla: 'S', color: '#22C55E' },
  { letra: 'D', perfil: 'Consciente / Detalhista', sigla: 'C', color: '#3B82F6' }
];

export default function Slide12() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <BarChart3 size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-[1400px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-12 text-center">
          Como Interpretar o Resultado
        </h1>

        <div className="grid grid-cols-2 gap-8 mb-10">
          {resultados.map((item) => (
            <div key={item.letra} className="bg-[#120826] border-2 rounded-xl p-6 flex items-center gap-6" style={{ borderColor: `${item.color}50` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                <span className="font-montserrat font-bold text-3xl text-white">{item.sigla}</span>
              </div>
              <div>
                <p className="font-lato text-xl text-[#C4B5FD]">
                  Total de <span className="font-bold text-[#F0F4F8]">{item.letra}</span> =
                </p>
                <p className="font-montserrat font-bold text-2xl" style={{ color: item.color }}>
                  {item.perfil}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-xl p-6 mb-8">
          <p className="font-montserrat font-bold text-2xl text-[#F0F4F8] text-center">
            Perfil principal = letra com maior pontuação
          </p>
        </div>

        <div className="bg-[#2DD4BF]/20 border border-[#2DD4BF] rounded-xl p-6 flex items-center gap-4">
          <FileText size={32} className="text-[#2DD4BF] flex-shrink-0" />
          <p className="font-lato text-xl text-[#F0F4F8]">
            <span className="font-bold">Observação:</span> O PDF completo do teste DISC será entregue para vocês aplicarem com suas equipes.
          </p>
        </div>
      </div>
    </div>
  );
}
