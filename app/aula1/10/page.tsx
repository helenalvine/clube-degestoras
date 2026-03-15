import { FileText, CheckCircle } from 'lucide-react';

const grupos = [
  {
    numero: 1,
    opcoes: [
      { letra: 'A', texto: 'Eu gosto de resolver problemas rápido' },
      { letra: 'B', texto: 'Eu gosto de conversar e animar as pessoas' },
      { letra: 'C', texto: 'Eu gosto de ajudar e manter a equipe tranquila' },
      { letra: 'D', texto: 'Eu gosto de fazer as coisas bem feitas e com detalhes' }
    ]
  },
  {
    numero: 2,
    opcoes: [
      { letra: 'A', texto: 'Prefiro tomar decisões' },
      { letra: 'B', texto: 'Prefiro motivar as pessoas' },
      { letra: 'C', texto: 'Prefiro cooperar com a equipe' },
      { letra: 'D', texto: 'Prefiro seguir padrões e regras' }
    ]
  }
];

export default function Slide10() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <FileText size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-[1500px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-6 text-center">
          Exemplo do Teste DISC
        </h1>

        <p className="font-lato text-2xl text-[#C4B5FD] mb-12 text-center">
          Escolha apenas uma alternativa que você mais se identifica de cada grupo
        </p>

        <div className="grid grid-cols-2 gap-10">
          {grupos.map((grupo) => (
            <div key={grupo.numero} className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-3xl text-[#2DD4BF] mb-6">Grupo {grupo.numero}</h3>
              <div className="space-y-4">
                {grupo.opcoes.map((opcao) => (
                  <div key={opcao.letra} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-montserrat font-bold text-xl text-[#8B5CF6]">{opcao.letra}</span>
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
