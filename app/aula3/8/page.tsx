import { MessageSquare, AlertCircle } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4">
          Um Conflito Muito Comum
        </h1>
      </div>

      <div className="max-w-[1400px] w-full">
        <div className="grid grid-cols-2 gap-12 mb-12">
          {/* D Profile */}
          <div className="bg-white/5 rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#EF4444] flex items-center justify-center">
                <span className="font-montserrat font-bold text-4xl text-white">D</span>
              </div>
              <p className="font-montserrat font-bold text-4xl text-[#F0F4F8]">Funcionária D</p>
            </div>
            <div className="bg-[#EF4444]/10 rounded-xl p-6">
              <MessageSquare className="text-[#EF4444] mb-4" size={32} />
              <p className="font-lato italic text-3xl text-[#C4B5FD]">
                "Vamos terminar logo essa casa."
              </p>
            </div>
          </div>

          {/* C Profile */}
          <div className="bg-white/5 rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center">
                <span className="font-montserrat font-bold text-4xl text-white">C</span>
              </div>
              <p className="font-montserrat font-bold text-4xl text-[#F0F4F8]">Funcionária C</p>
            </div>
            <div className="bg-[#3B82F6]/10 rounded-xl p-6">
              <MessageSquare className="text-[#3B82F6] mb-4" size={32} />
              <p className="font-lato italic text-3xl text-[#C4B5FD]">
                "Ainda falta limpar direito aqui."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#8B5CF6] rounded-2xl p-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <AlertCircle className="text-[#1A0A2E]" size={40} />
            <p className="font-montserrat font-bold text-5xl text-[#1A0A2E]">
              Isso não é briga.
            </p>
          </div>
          <p className="font-lato text-4xl text-[#1A0A2E]">
            É diferença de perfil.
          </p>
        </div>
      </div>
    </div>
  );
}
