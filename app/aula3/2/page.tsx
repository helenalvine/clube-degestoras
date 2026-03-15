import { AlertTriangle, Users } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col">
      {/* Header */}
      <div className="flex-none pt-16 pb-8 px-24">
        <div className="border-l-4 border-[#22D3EE] pl-6">
          <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8]">
            A Verdade Sobre Liderança
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-24">
        <div className="max-w-[1200px] text-center">
          <AlertTriangle className="text-[#8B5CF6] mx-auto mb-12" size={80} />

          <p className="font-lato text-5xl text-[#C4B5FD] mb-12 leading-relaxed">
            Empresas de cleaning<br/>
            <span className="text-[#F0F4F8] font-bold">não quebram por falta de clientes.</span>
          </p>

          <p className="font-montserrat font-bold text-6xl text-[#22D3EE] mb-12">
            Elas quebram por problemas de equipe.
          </p>

          <div className="bg-white/5 rounded-2xl p-10 inline-block">
            <Users className="text-[#8B5CF6] mx-auto mb-4" size={48} />
            <p className="font-lato text-4xl text-[#F0F4F8]">
              Gestão de pessoas é o que sustenta o crescimento.
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
