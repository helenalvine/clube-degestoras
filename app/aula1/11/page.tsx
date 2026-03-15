import { FileText } from 'lucide-react';

const grupos = [
  {
    numero: 3,
    opcoes: [
      { letra: 'A', texto: 'Sou direta e objetiva' },
      { letra: 'B', texto: 'Sou comunicativa' },
      { letra: 'C', texto: 'Sou calma e paciente' },
      { letra: 'D', texto: 'Sou detalhista' }
    ]
  },
  {
    numero: 4,
    opcoes: [
      { letra: 'A', texto: 'Gosto de assumir controle quando algo precisa ser resolvido' },
      { letra: 'B', texto: 'Gosto de conversar e criar um ambiente animado' },
      { letra: 'C', texto: 'Gosto de manter tudo tranquilo e sem conflito' },
      { letra: 'D', texto: 'Gosto de fazer as coisas com muito cuidado e precisão' }
    ]
  }
];

export default function Slide11() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <FileText size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-[1500px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-12 text-center">
          Outro Exemplo de Perguntas
        </h1>

        <div className="grid grid-cols-2 gap-10">
          {grupos.map((grupo) => (
            <div key={grupo.numero} className="bg-[#120826] border-2 border-[#2DD4BF]/30 rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-3xl text-[#2DD4BF] mb-6">Grupo {grupo.numero}</h3>
              <div className="space-y-4">
                {grupo.opcoes.map((opcao) => (
                  <div key={opcao.letra} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-montserrat font-bold text-xl text-[#2DD4BF]">{opcao.letra}</span>
                    </div>
                    <p className="font-lato text-xl text-[#F0F4F8] pt-1">{opcao.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
