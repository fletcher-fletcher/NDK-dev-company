export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="/images/ndc-logo-bot.png" 
                alt="НДК - Национальная девелоперская компания" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm">Стратегический партнер Инвестиционной Группы АБСОЛЮТ</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Контакты</h4>
            <p className="text-sm">dk@info.ru</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Юридический адрес</h4>
            <p className="text-sm">125167, г. Москва, Ленинградский пр-кт, д. 47, стр. 1</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Реквизиты</h4>
            <p className="text-sm">ИНН 7714949480 / КПП 771401001</p>
            <p className="text-sm">ОГРН 1147746463942</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p>© 2026 Национальная девелоперская компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}