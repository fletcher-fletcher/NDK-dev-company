'use client';

import { motion } from 'framer-motion';

export default function Contacts() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Контакты</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Реквизиты</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Наименование организации</p>
                  <p className="font-medium">Национальная девелоперская компания</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Юридический адрес</p>
                  <p className="font-medium">125167, г. Москва, Ленинградский пр-кт, д. 47, стр. 1</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">ИНН / КПП</p>
                  <p className="font-medium">7714949480 / 771401001</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">ОГРН</p>
                  <p className="font-medium">1147746463942</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">E-mail</p>
                  <p className="font-medium text-primary">info@ndc.absgroup.ru</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                />
                <textarea
                  rows={4}
                  placeholder="Сообщение"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}