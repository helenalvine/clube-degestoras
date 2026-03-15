import { Building, XCircle, CheckCircle } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-12">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">MÓDULO 1</span>
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mt-4">O Que É Cultura?</h1>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-10 mb-12">
          <p className="font-montserrat font-bold text-5xl text-[#F0F4F8] text-center">
            "O jeito que a gente faz as coisas aqui"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="bg-[#120826] border-2 border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center">
                <XCircle size={40} className="text-red-500" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-red-400">Empresa A - Cultura de Punição</h3>
            </div>
            <ul className="space-y-3 font-lato text-xl text-[#C4B5FD]">
              <li>• Funcionária quebra algo e esconde</li>
              <li>• Erros são castigados</li>
              <li>• Alta rotatividade</li>
              <li>• Problemas recorrentes com clientes</li>
            </ul>
          </div>

          <div className="bg-[#120826] border-2 border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-green-400">Empresa B - Cultura de Solução</h3>
            </div>
            <ul className="space-y-3 font-lato text-xl text-[#C4B5FD]">
              <li>• Funcionária avisa imediatamente</li>
              <li>• Erros são oportunidades de melhoria</li>
              <li>• Equipe engajada e leal</li>
              <li>• Clientes satisfeitos e fiéis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
