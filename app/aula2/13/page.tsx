import { Users, CheckCircle } from 'lucide-react';

const behaviorExamples = [
  {
    value: 'EXCELÊNCIA',
    behaviors: [
      'Verificar duas vezes antes de sair',
      'Refazer sem reclamar quando necessário',
      'Perguntar se ficou tudo certo',
    ],
  },
  {
    value: 'HONESTIDADE',
    behaviors: [
      'Avisar imediatamente sobre problemas',
      'Comunicar atrasos antes, não depois',
      'Não esconder erros',
    ],
  },
];

export default function Slide13() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-xl bg-[#2DD4BF]/20 flex items-center justify-center">
          <Users size={36} className="text-[#2DD4BF]" />
        </div>
        <div>
          <span className="text-[#2DD4BF] font-montserrat font-bold text-xl">PILAR 4</span>
          <h1 className="font-montserrat font-bold text-5xl text-[#F0F4F8]">Comportamentos: Valores em Ação</h1>
        </div>
      </div>

      <p className="font-lato text-2xl text-[#C4B5FD] mb-12">
        Comportamentos são ações observáveis que traduzem valores abstratos em vida diária.
      </p>

      <div className="flex-1 grid grid-cols-2 gap-12">
        {behaviorExamples.map((example, index) => (
          <div key={index} className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-8">
            <h3 className="font-montserrat font-bold text-3xl text-[#8B5CF6] mb-6">{example.value}</h3>
            <div className="space-y-4">
              {example.behaviors.map((behavior, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
                  <span className="font-lato text-xl text-[#F0F4F8]">{behavior}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
