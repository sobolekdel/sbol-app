import React from 'react';
import { Search, Heart, PlusCircle, Bell, User } from 'lucide-react';
import clsx from 'clsx';

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки'];

const mockItems = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max 128GB',
    price: 199,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/2419276/ZmOLReu3xydTu5zF3Wa0eg3830/ocr',
    collected: 12500,
    target: 15000,
    participants: 21,
    timeLeft: '2д 3ч'
  },
  {
    id: 2,
    title: 'PlayStation 5 с двумя джойстиками',
    price: 299,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/4497080/T74ZVLBeujFRWNRiXo6n8A1473/ocr',
    collected: 34000,
    target: 39000,
    participants: 44,
    timeLeft: '1д 12ч'
  },
  // добавь больше карточек по образцу
];

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-black flex justify-around py-2 border-t border-neutral-800 z-50">
    <NavIcon icon={<Search size={20} />} label="Поиск" active />
    <NavIcon icon={<Heart size={20} />} label="Избранное" />
    <NavIcon icon={<PlusCircle size={20} />} label="Добавить" />
    <NavIcon icon={<Bell size={20} />} label="Уведомления" />
    <NavIcon icon={<User size={20} />} label="Профиль" />
  </div>
);

const NavIcon = ({ icon, label, active }) => (
  <div className="flex flex-col items-center text-xs">
    <div className={clsx("mb-1", active ? 'text-white' : 'text-gray-500')}>{icon}</div>
    <span className={clsx("text-[10px]", active ? 'text-white' : 'text-gray-500')}>{label}</span>
  </div>
);

const RecommendationsPage = () => {
  return (
    <div className="min-h-screen pb-20 bg-neutral-950 text-white px-2">
      <input
        type="text"
        placeholder="Поиск товаров.."
        className="w-full p-2 mt-2 mb-3 rounded bg-neutral-800 text-white placeholder-gray-400"
      />

      <div className="flex overflow-x-auto space-x-2 pb-2">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={clsx(
              'px-3 py-1 rounded-full text-sm whitespace-nowrap',
              i === 0 ? 'bg-white text-black' : 'bg-neutral-700 text-gray-300'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="mt-4 mb-2 text-sm font-semibold text-white">Рекомендации</h2>
      <div className="grid grid-cols-2 gap-3">
        {mockItems.map((item) => (
          <div key={item.id} className="bg-neutral-900 rounded-2xl p-2 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-xl mb-2"
            />
            <h3 className="text-sm font-semibold leading-tight mb-1">{item.title}</h3>
            <p className="text-xs text-gray-400 mb-1">Цена билета: <span className="text-white font-medium">{item.price}₽</span></p>
            <p className="text-xs text-gray-400 mb-1">Собрано: {item.collected.toLocaleString()} / {item.target.toLocaleString()}₽</p>
            <p className="text-xs text-gray-500">👥 {item.participants} • ⏱ {item.timeLeft}</p>
            <Heart size={14} className="absolute top-2 right-2 text-white" />
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default RecommendationsPage;
