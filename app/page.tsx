'use client';

import Link from 'next/link';
import { BookOpen, Users, Award, Heart, Lock, ChevronRight } from 'lucide-react';

const aulas = [
  {
    id: 1,
    title: 'Contratação',
    subtitle: 'Como selecionar as pessoas certas',
    icon: Users,
    slides: 15,
    available: true,
    color: '#8B5CF6'
  },
  {
    id: 2,
    title: 'Cultura',
    subtitle: 'O alicerce de tudo',
    icon: Heart,
    slides: 19,
    available: true,
    color: '#2DD4BF'
  },
  {
    id: 3,
    title: 'Liderança',
    subtitle: 'Como guiar pessoas sem criar caos',
    icon: BookOpen,
    slides: 17,
    available: true,
    color: '#8B5CF6'
  },
  {
    id: 4,
    title: 'Valorização',
    subtitle: 'Como reter sua equipe',
    icon: Award,
    slides: 0,
    available: false,
    color: '#2DD4BF'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A0A2E] flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#8B5CF6] text-[#1A0A2E] font-montserrat font-bold text-xl px-6 py-3 rounded-full mb-6">
          CLUBE DE GESTORAS
        </span>
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-[#F0F4F8] mb-4">
          Navegação das Aulas
        </h1>
        <p className="font-lato text-xl text-[#C4B5FD]">
          Selecione a aula que deseja assistir
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {aulas.map((aula) => {
          const Icon = aula.icon;
          return aula.available ? (
            <Link
              key={aula.id}
              href={`/aula${aula.id}/1?total=${aula.slides}`}
              className="group relative bg-[#120826] border-2 border-[#8B5CF6]/30 rounded-2xl p-6 hover:border-[#8B5CF6] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/20"
            >
              <div className="flex flex-col h-full">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${aula.color}20` }}
                >
                  <Icon size={32} style={{ color: aula.color }} />
                </div>

                <h2 className="font-montserrat font-bold text-2xl text-[#F0F4F8] mb-2">
                  {aula.title}
                </h2>
                <p className="font-lato text-[#C4B5FD] text-sm mb-4 flex-1">
                  {aula.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#2DD4BF] text-sm font-medium">
                    {aula.slides} slides
                  </span>
                  <ChevronRight className="text-[#8B5CF6] group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={aula.id}
              className="relative bg-[#120826]/50 border-2 border-[#8B5CF6]/10 rounded-2xl p-6 opacity-60 cursor-not-allowed"
            >
              <div className="absolute top-4 right-4">
                <Lock size={20} className="text-[#C4B5FD]/50" />
              </div>
              <div className="flex flex-col h-full">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${aula.color}10` }}
                >
                  <Icon size={32} style={{ color: `${aula.color}50` }} />
                </div>

                <h2 className="font-montserrat font-bold text-2xl text-[#F0F4F8]/50 mb-2">
                  {aula.title}
                </h2>
                <p className="font-lato text-[#C4B5FD]/50 text-sm mb-4 flex-1">
                  {aula.subtitle}
                </p>
                <div className="flex items-center">
                  <span className="text-[#C4B5FD]/50 text-sm">
                    Em breve
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-[#C4B5FD]/60 font-lato text-sm">
          I&F Cleaning Management Academy
        </p>
      </div>
    </div>
  );
}
