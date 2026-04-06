'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Стратегический партнер ИГ АБСОЛЮТ
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-dark">
                Национальная девелоперская компания
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Все проекты НДК отвечают высоким требованиям современного жилищного строительства
                и полностью обеспечены необходимой инфраструктурой.
              </p>
              <button className="btn-primary">
                Наши проекты
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/hero.jpg"
                alt="Современное жилое здание"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 12, label: 'Реализованных проектов' },
              { value: 450, label: 'Тыс. м² жилья' },
              { value: 8, label: 'Лет на рынке' },
              { value: 100, label: 'Партнёров' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.value}+</div>
                <div className="text-sm opacity-90 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Наши стандарты и сервисы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный комплекс услуг в сфере девелопмента жилой и коммерческой недвижимости
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏗️', title: 'Технический заказчик', desc: 'Полный цикл строительства от подготовки до ввода' },
              { icon: '📑', title: 'Исходно-разрешительная документация', desc: 'Оформление полного пакета документов' },
              { icon: '📐', title: 'Контроль проектирования', desc: 'Экспертиза и надзор за проектными решениями' },
              { icon: '🔧', title: 'Организация СМР', desc: 'Управление строительно-монтажными работами' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Наши проекты</h2>
            <p className="text-gray-600">Успешно реализованные объекты жилой и коммерческой недвижимости</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Жилой комплекс «Абсолют Парк»', type: 'Бизнес-класс, Москва', img: '/images/project-absolut-park.jpg'
 },
              { title: 'Клубный дом «Резиденция»', type: 'Премиум-класс, Хамовники', img: '/images/project-residence.jpg' },
              { title: 'Бизнес-центр «Абсолют Тауэр»', type: 'Класс А+, Москва-Сити', img: '/images/project-tower.jpg' }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}