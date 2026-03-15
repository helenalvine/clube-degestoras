import { Clock, BookOpen, Wrench, Users, CheckCircle } from 'lucide-react';

const agendaItems = [
  { icon: BookOpen, title: 'O Que É Cultura', time: '20 min', color: '#8B5CF6' },
  { icon: Wrench, title: 'Os Pilares', time: '30 min', color: '#2DD4BF' },
  { icon: Users, title: 'Implementação', time: '25 min', color: '#8B5CF6' },
  { icon: CheckCircle, title: 'Dinâmica Prática', time: '20 min', color: '#2DD4BF' },
  { icon: Clock, title: 'Fechamento', time: '15 min', color: '#8B5CF6' },
];

export default function Slide2() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-20">
      <div className="mb-12">
        <span className="text-[#8B5CF6] font-montserrat font-bold text-2xl">CULTURA</span>
        <h1 className="font-montserrat font-bold text-7xl text-[#F0F4F8] mt-4">Agenda de Hoje</h1>
      </div>

      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-5 gap-8 w-full">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className="w-28 h-28 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon size={56} style={{ color: item.color }} />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#F0F4F8] mb-3">{item.title}</h3>
                <span className="font-lato text-xl text-[#C4B5FD]">{item.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
