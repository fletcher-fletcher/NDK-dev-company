'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Национальная девелоперская компания</strong> — стратегический партнер 
                Инвестиционной Группы АБСОЛЮТ, которая осуществляет деятельность в различных 
                областях экономики: земельные активы, девелопмент, страхование, управление 
                объектами недвижимости и социальные проекты.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Приоритетным направлением Группы является девелопмент жилой и коммерческой недвижимости.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                НДК выполняет функции <strong>технического заказчика</strong> в строительстве и оказывает 
                полный комплекс работ по оформлению исходно-разрешительной документации, контролю 
                над проектированием, организации строительно-монтажных работ, вводу объектов в 
                эксплуатацию, заселению.
              </p>
              <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary mt-8">
                <p className="text-lg font-medium text-primary mb-0">
                  Все проекты НДК отвечают высоким требованиям современного жилищного строительства 
                  и полностью обеспечены всей необходимой инфраструктурой для комфортной жизни.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Наши партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-gray-50 rounded-xl p-12 text-center border hover:shadow-lg transition-shadow flex items-center justify-center min-h-[250px]">
              <img 
                src="/images/partner-1.png" 
                alt="Партнер 1" 
                className="max-h-40 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-12 text-center border hover:shadow-lg transition-shadow flex items-center justify-center min-h-[250px]">
              <img 
                src="/images/partner-2.png" 
                alt="Партнер 2" 
                className="max-h-40 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-12 text-center border hover:shadow-lg transition-shadow flex items-center justify-center min-h-[250px]">
              <img 
                src="/images/partner-3.png" 
                alt="Партнер 3" 
                className="max-h-40 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-12 text-center border hover:shadow-lg transition-shadow flex items-center justify-center min-h-[250px]">
              <img 
                src="/images/partner-7.png" 
                alt="Партнер 4" 
                className="max-h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}