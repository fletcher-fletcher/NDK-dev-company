export default function Footer() {
  return (
    <footer className="bg-[#141b17] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">НДК</h3>
            <p className="text-sm">Стратегический партнер Инвестиционной Группы АБСОЛЮТ</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Контакты</h4>
            <p className="text-sm">info@ndc.absgroup.ru</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Юридический адрес</h4>
            <p className="text-sm">108811, г. Москва, вн. тер. г. п. Московский, Киевское ш. 22-й км (п. Московский), двлд. 4, стр. 5</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Реквизиты</h4>
            <p className="text-sm">ИНН 7751060447 / КПП 775101001</p>
            <p className="text-sm">ОГРН 1177746835200</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p>© 2025 Национальная девелоперская компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}