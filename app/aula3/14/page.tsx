import { Calendar, Sun, Users, MessageCircle, AlertTriangle } from 'lucide-react';

export default function Slide14() {
  const meetings = [
    {
      icon: Sun,
      title: 'Reunião Rápida Diária',
      duration: '5-10 min',
      purpose: 'Alinhar tarefas do dia, resolver dúvidas imediatas',
      color: '#F59E0B'
    },
    {
      icon: Calendar,
      title: 'Reunião Semanal de Alinhamento',
      duration: '30-45 min',
      purpose: 'Revisar semana, planejar próxima, feedback geral',
      color: '#8B5CF6'
    },
    {
      icon: MessageCircle,
      title: 'Reunião de Feedback',
      duration: '15-20 min',
      purpose: 'Conversa individual, reconhecimento ou correção',
      color: '#2DD4BF'
    },
    {
      icon: AlertTriangle,
      title: 'Reunião de Resolução de Conflitos',
      duration: '20-30 min',
      purpose: 'Mediar situações entre membros da equipe',
      color: '#EF4444'
    }
  ];

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#1A0A2E] flex flex-col items-center justify-center p-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Users size={800} className="text-[#2DD4BF]" />
      </div>

      <div className="relative z-10 max-w-[1500px]">
        <h1 className="font-montserrat font-bold text-6xl text-[#F0F4F8] mb-4 text-center">
          Tipos de Reunião com a Equipe
        </h1>
        <p className="font-lato text-2xl text-[#C4B5FD] mb-12 text-center">
          Cada tipo de reunião tem um propósito específico
        </p>

        <div className="grid grid-cols-2 gap-6">
          {meetings.map((meeting, index) => {
            const Icon = meeting.icon;
            return (
              <div key={index} className="bg-[#120826] border-2 rounded-2xl p-6" style={{ borderColor: `${meeting.color}40` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${meeting.color}20` }}>
                    <Icon size={28} style={{ color: meeting.color }} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-[#F0F4F8]">{meeting.title}</h3>
                    <span className="font-lato text-lg" style={{ color: meeting.color }}>{meeting.duration}</span>
                  </div>
                </div>
                <p className="font-lato text-xl text-[#C4B5FD]">{meeting.purpose}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
