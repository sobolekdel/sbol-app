import React from 'react';
import { Search, Heart, PlusCircle, Bell, User } from 'lucide-react';
import clsx from 'clsx';

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки'];

const mockItems = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max 128GB',
    price: 199,
    image: 'https://avatars.mds.yandex.net/get-mpic/5220628/img_id6087516576322886610.jpeg/orig',
    collected: 12500,
    target: 15000,
    participants: 21,
    timeLeft: '2д 3ч'
  },
  {
    id: 2,
    title: 'PlayStation 5 с двумя джойстиками',
    price: 299,
    image: 'https://avatars.mds.yandex.net/get-mpic/1070538/img_id8734209476250660548.jpeg/orig',
    collected: 34000,
    target: 39000,
    participants: 44,
    timeLeft: '1д 12ч'
  },
  {
    id: 3,
    title: 'MacBook Pro 14"',
    price: 359,
    image: 'https://avatars.mds.yandex.net/get-mpic/5234704/img_id8368623463915092227.jpeg/orig',
    collected: 60000,
    target: 85000,
    participants: 59,
    timeLeft: '5д 4ч 22м'
  },
  {
    id: 4,
    title: 'Sony WH-1000XM5',
    price: 599,
    image: 'https://avatars.mds.yandex.net/get-mpic/1234789/img_id4581240008765685214.jpeg/orig',
    collected: 7500,
    target: 10000,
    participants: 17,
    timeLeft: '7ч 10м'
  },
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

const NavIcon = ({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <div className="flex flex-col items-center text-xs">
    <div className={clsx("mb-1", active ? 'text-white' : 'text-gray-500')}>{icon}</div>
    <span className={clsx("text-[10px]", active ? 'text-white' : 'text-gray-500')}>{label}</span>
  </div>
);

const RecommendationsPage = () => {
  return (
    <div className="min-h-screen pb-24 bg-neutral-950 text-white px-3">
      {/* Поиск и категории */}
      <div className="flex items-center space-x-2 mt-3 mb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Ваш город: Москва"
            className="w-full pl-9 pr-3 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400"
          />
        </div>
        <select className="bg-neutral-800 text-gray-300 text-sm rounded-full px-3 py-1">
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Категории */}
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
            <h3 className="text-sm font-semibold leading-tight mb-1 line-clamp-2 min-h-[36px]">{item.title}</h3>
            <button className="text-xs bg-green-600 rounded-full px-3 py-0.5 mb-1 font-medium">Билет — {item.price}₽</button>
            <p className="text-[11px] text-gray-400 mb-1">Собрано: {item.collected.toLocaleString()} / {item.target.toLocaleString()}₽</p>
            <p className="text-[11px] text-gray-500">👥 {item.participants} • ⏱ {item.timeLeft}</p>
            <Heart size={14} className="absolute top-2 right-2 text-white" />
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default RecommendationsPage;
