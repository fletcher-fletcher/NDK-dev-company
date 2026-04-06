'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Жилой комплекс «Абсолют Парк»',
    category: 'residential',
    type: 'Бизнес-класс',
    location: 'Москва, САО',
    area: '156 000 м²',
    year: 2023,
    description: 'Современный жилой комплекс бизнес-класса с развитой инфраструктурой. Включает подземный паркинг, детский сад, школу и коммерческие помещения на первых этажах.',
    image: '/images/project-absolut-park.jpg',
    gallery: ['/images/gallery-absolut-1.jpg', '/images/gallery-absolut-2.jpg']
  },
  {
    id: 2,
    title: 'Клубный дом «Резиденция»',
    category: 'residential',
    type: 'Премиум-класс',
    location: 'Москва, Хамовники',
    area: '45 000 м²',
    year: 2024,
    description: 'Элитный клубный дом в историческом центре Москвы. Всего 48 апартаментов, приватная территория, консьерж-сервис и подземный паркинг.',
    image: '/images/project-residence.jpg',
    gallery: []
  },
  {
    id: 3,
    title: 'Бизнес-центр «Абсолют Тауэр»',
    category: 'commercial',
    type: 'Класс А+',
    location: 'Москва, Сити',
    area: '78 000 м²',
    year: 2022,
    description: 'Современный бизнес-центр класса А+ в деловом центре Москвы. LEED-сертификация, энергоэффективные решения и панорамный вид на город.',
    image: '/images/project-tower.jpg',
    gallery: []
  },
  {
    id: 4,
    title: 'Жилой район «Новое Медведково»',
    category: 'residential',
    type: 'Комфорт-класс',
    location: 'Московская область',
    area: '320 000 м²',
    year: 2025,
    description: 'Масштабный проект комплексного освоения территории. Парки, школы, детские сады, поликлиника и спортивные объекты.',
    image: '/images/project-medvedkovo.jpg',
    gallery: []
  },
  {
    id: 5,
    title: 'Торговый центр «Абсолют Молл»',
    category: 'commercial',
    type: 'Retail',
    location: 'Москва, ЮАО',
    area: '95 000 м²',
    year: 2023,
    description: 'Современный торгово-развлекательный центр с кинотеатром, фуд-кортом и более 200 магазинов.',
    image: '/images/project-mall.jpg',
    gallery: []
  },
  {
    id: 6,
    title: 'Апарт-отель «Резиденция Сокольники»',
    category: 'hotel',
    type: '4 звезды',
    location: 'Москва, Сокольники',
    area: '28 000 м²',
    year: 2024,
    description: 'Сервисные апартаменты с полной инфраструктурой для проживания. Бассейн, фитнес-центр, ресторан и конференц-залы.',
    image: '/images/project-hotel.jpg',
    gallery: []
  }
];

const categories = [
  { id: 'all', label: 'Все проекты' },
  { id: 'residential', label: 'Жилая недвижимость' },
  { id: 'commercial', label: 'Коммерческая' },
  { id: 'hotel', label: 'Гостиницы / Апартаменты' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши проекты</h1>
            <p className="text-lg opacity-90">
              Успешно реализованные объекты жилой, коммерческой и социальной инфраструктуры
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-white text-sm font-semibold">{project.type}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{project.location}</p>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-semibold text-sm">{project.area}</span>
                      <span className="text-gray-400 text-sm">Подробнее →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Проекты в этой категории скоро появятся</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                    <p className="text-gray-600 mt-1">{selectedProject.location}</p>
                  </div>
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {selectedProject.year}
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-500">Тип</div>
                    <div className="font-semibold">{selectedProject.type}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-500">Площадь</div>
                    <div className="font-semibold">{selectedProject.area}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-500">Категория</div>
                    <div className="font-semibold capitalize">{selectedProject.category}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{selectedProject.description}</p>
                
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-3">Фотогалерея</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.gallery.map((img, idx) => (
                        <img key={idx} src={img} alt={`Фото ${idx + 1}`} className="rounded-lg w-full h-32 object-cover" />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-4 mt-8">
                  <button className="btn-primary flex-1 text-center">Получить консультацию</button>
                  <button className="px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition">
                    Скачать презентацию
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}