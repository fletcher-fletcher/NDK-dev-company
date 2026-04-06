'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const servicesData = [
  {
    id: 1,
    category: 'technical',
    icon: '🏗️',
    title: 'Технический заказчик',
    fullDescription: 'Полный цикл строительства: от подготовки площадки до ввода в эксплуатацию. Включает координацию всех участников строительного процесса, контроль сроков и бюджетов.',
    details: [
      'Подготовка технического задания',
      'Выбор и управление подрядчиками',
      'Контроль качества работ',
      'Соблюдение сроков и сметы'
    ],
    image: '/images/service-technical.jpg'
  },
  {
    id: 2,
    category: 'documentation',
    icon: '📑',
    title: 'Исходно-разрешительная документация',
    fullDescription: 'Оформление полного пакета документов для строительства жилых и коммерческих объектов. Сопровождение на всех этапах согласования.',
    details: [
      'Получение ГПЗУ',
      'Оформление разрешения на строительство',
      'Согласование проектной документации',
      'Ввод объекта в эксплуатацию'
    ],
    image: '/images/service-documentation.jpg'
  },
  {
    id: 3,
    category: 'design',
    icon: '📐',
    title: 'Контроль проектирования',
    fullDescription: 'Экспертиза и надзор за качеством проектных решений на всех этапах. Обеспечение соответствия проектов требованиям и стандартам.',
    details: [
      'Проверка проектной документации',
      'Инжиниринговый консалтинг',
      'Оптимизация решений',
      'Снижение стоимости строительства'
    ],
    image: '/images/service-design.jpg'
  },
  {
    id: 4,
    category: 'construction',
    icon: '🔧',
    title: 'Организация СМР',
    fullDescription: 'Управление строительно-монтажными работами, графиками и подрядчиками. Оперативное решение возникающих вопросов.',
    details: [
      'Планирование работ',
      'Контроль качества материалов',
      'Безопасность строительства',
      'Оперативное управление'
    ],
    image: '/images/service-construction.jpg'
  },
  {
    id: 5,
    category: 'commissioning',
    icon: '🏢',
    title: 'Ввод в эксплуатацию и заселение',
    fullDescription: 'Полное сопровождение при сдаче объекта и передаче ключей дольщикам. Подготовка всей необходимой документации.',
    details: [
      'Получение разрешения на ввод',
      'Подготовка к заселению',
      'Передача ключей',
      'Постгарантийное обслуживание'
    ],
    image: '/images/service-commissioning.jpg'
  },
  {
    id: 6,
    category: 'infrastructure',
    icon: '🌟',
    title: 'Инфраструктура комфорта',
    fullDescription: 'Обеспечение проектов всей необходимой инфраструктурой для жизни. Создание комфортной городской среды.',
    details: [
      'Проектирование инфраструктуры',
      'Благоустройство территорий',
      'Социальные объекты',
      'Транспортная доступность'
    ],
    image: '/images/service-infrastructure.jpg'
  }
];

const categories = [
  { id: 'all', label: 'Все услуги', icon: '🎯' },
  { id: 'technical', label: 'Технический заказчик', icon: '🏗️' },
  { id: 'documentation', label: 'Документация', icon: '📑' },
  { id: 'design', label: 'Проектирование', icon: '📐' },
  { id: 'construction', label: 'Строительство', icon: '🔧' },
  { id: 'commissioning', label: 'Ввод в эксплуатацию', icon: '🏢' },
  { id: 'infrastructure', label: 'Инфраструктура', icon: '🌟' }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-lg opacity-90">
              Полный комплекс услуг в сфере девелопмента жилой и коммерческой недвижимости. 
              Мы сопровождаем проекты на всех этапах — от идеи до ввода в эксплуатацию.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="text-sm font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedService(service)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white text-4xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.fullDescription}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Узнать подробнее
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal for service details */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-6 text-white text-5xl">
                  {selectedService.icon}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
                <p className="text-gray-700 mb-6">{selectedService.fullDescription}</p>
                <h3 className="font-semibold text-lg mb-3">Что входит в услугу:</h3>
                <ul className="space-y-2 mb-6">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link href="/contacts" className="btn-primary w-full text-center block">
                  Получить консультацию
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для обсуждения деталей проекта
          </p>
          <Link href="/contacts" className="btn-primary inline-block">
            Связаться с экспертом
          </Link>
        </div>
      </section>
    </>
  );
}