import { Layers, XCircle, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Layers size={800} className="text-[#8B5CF6]" />
      </div>

      <div className="text-center relative z-10 max-w-[1600px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-12">
          Por Que a Contratação Importa
        </h1>

        <div className="grid grid-cols-2 gap-10">
          {/* Lado negativo */}
          <div className="bg-[#120826] border-2 border-[#EF4444]/40 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <XCircle size={40} className="text-[#EF4444]" />
              <h2 className="font-montserrat font-bold text-3xl text-[#EF4444]">Contratação por Urgência</h2>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <TrendingDown size={24} className="text-[#EF4444]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Pessoa entra rápido, sai rápido</p>
              </div>
              <div className="flex items-center gap-3">
                <TrendingDown size={24} className="text-[#EF4444]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Clientes reclamam, equipe briga</p>
              </div>
              <div className="flex items-center gap-3">
                <TrendingDown size={24} className="text-[#EF4444]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Funcionárias boas vão embora</p>
              </div>
              <div className="flex items-center gap-3">
                <TrendingDown size={24} className="text-[#EF4444]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Rotatividade e retrabalho constantes</p>
              </div>
            </div>
          </div>

          {/* Lado positivo */}
          <div className="bg-[#120826] border-2 border-[#2DD4BF]/40 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle size={40} className="text-[#2DD4BF]" />
              <h2 className="font-montserrat font-bold text-3xl text-[#2DD4BF]">Contratação Inteligente</h2>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <TrendingUp size={24} className="text-[#2DD4BF]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Equipe estável e comprometida</p>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp size={24} className="text-[#2DD4BF]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Qualidade constante nos serviços</p>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp size={24} className="text-[#2DD4BF]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Ambiente de trabalho saudável</p>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp size={24} className="text-[#2DD4BF]" />
                <p className="font-lato text-xl text-[#C4B5FD]">Crescimento sustentável da empresa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-xl p-6">
          <p className="font-montserrat font-bold text-2xl text-[#F0F4F8]">
            A equipe que você tem é o resultado das suas decisões de contratação
          </p>
        </div>
      </div>
    </div>
  );
}
