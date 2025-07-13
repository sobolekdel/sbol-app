'use client';

import React, { useState } from 'react';
import { Search, Heart, PlusCircle, Bell, User } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки'];

const mockItems = [
  {
    id: 1,
    title: 'ВАЗ 2115',
    price: 199,
    image: 'https://10.img.avito.st/image/1/1.3Th39ra4cdFBQfPcQcnvHhJXc9fJV_PHQVpz08dfedvB.gbFhzghc_MN4_vBiLLVyTNUA4yOuhJ5TSQtP2GJZrRA?cqp=2.TSzMy-m0u9ojo94xoNTr4TIkcUBjMu1L_y5Z6Lr-VHA-3xfoRpsvf1jN4IBF36LEO13sxOCjYv9KRoXzpmAFvKTQ',
    collected: 12500,
    target: 15000,
    participants: 21,
    timeLeft: '2д 3ч'
  },
  {
    id: 2,
    title: 'Колеса R14',
    price: 299,
    image: 'https://40.img.avito.st/image/1/1.vT3ZSba4EdTv_pPZr3ewRqrrE9Jn6JPC7-UT1mngGd5v.R53_4NaCNyZytZtW7Z4xTBB-sIuGKMZmRVph7BErMVU',
    collected: 34000,
    target: 39000,
    participants: 44,
    timeLeft: '1д 12ч'
  },
  {
    id: 3,
    title: 'Гараж в Туле',
    price: 359,
    image: 'https://80.img.avito.st/image/1/1.HoTPzLa5sm35ezBg__wC1qhtsGtxbTB7-WCwb315tm8.aTihFEMye-QvSStKSoJIf4rrEuJiMUxsrpnfoglu0ag',
    collected: 60000,
    target: 85000,
    participants: 59,
    timeLeft: '5д 42ч'
  },
  {
    id: 4,
    title: 'Лада Гранта',
    price: 599,
    image: 'https://70.img.avito.st/image/1/1.0Yl_H7a4fWBJqP9tUQSaoRq-f2bBvv92SbN_Ys-2dWrJ.VTZNKFvzyO5fHNW5Kb81R6jYzFJqJ8eo46AWP2yajEI',
    collected: 7500,
    target: 10000,
    participants: 17,
    timeLeft: '7ч 10м'
  },
];

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-black flex justify-around py-2 border-t border-neutral-800 z-50">
    <Link href="/search" className="flex flex-col items-center text-xs text-white">
      <Search size={20} />
      <span className="text-[10px]">Поиск</span>
    </Link>
    <Link href="/favorites" className="flex flex-col items-center text-xs text-gray-500">
      <Heart size={20} />
      <span className="text-[10px]">Избранное</span>
    </Link>
    <Link href="/create" className="flex flex-col items-center text-xs text-gray-500">
      <PlusCircle size={20} />
      <span className="text-[10px]">Добавить</span>
    </Link>
    <Link href="/notifications" className="flex flex-col items-center text-xs text-gray-500">
      <Bell size={20} />
      <span className="text-[10px]">Уведомления</span>
    </Link>
    <Link href="/profile" className="flex flex-col items-center text-xs text-gray-500">
      <User size={20} />
      <span className="text-[10px]">Профиль</span>
    </Link>
  </div>
);

const RecommendationsPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');

  const toggleFavorite = (id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const filteredItems = search.length > 0
    ? mockItems.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen pb-24 bg-neutral-950 text-white px-4">
      <div className="max-w-screen-md mx-auto">
        <div className="relative mt-2 mb-3">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-gray-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск товаров... Ваш город: Тула"
              className="w-full pl-10 pr-3 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400"
            />
          </div>
          {search && filteredItems.length > 0 && (
            <div className="absolute z-50 w-full bg-neutral-900 rounded-xl mt-1 border border-neutral-700">
              {filteredItems.map(item => (
                <Link
                  key={item.id}
                  href={`/item/${item.id}`}
                  className="block px-4 py-2 text-sm hover:bg-neutral-800 transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

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

        <h2 className="mt-4 mb-3 text-lg font-bold text-white">Рекомендации</h2>

        <div className="grid grid-cols-2 gap-4">
          {mockItems.map((item) => (
            <Link
              href={`/item/${item.id}`}
              key={item.id}
              className="bg-neutral-900 rounded-2xl p-2 relative hover:bg-neutral-800 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover rounded-xl mb-2"
              />
              <h3 className="text-sm font-semibold leading-tight mb-1 line-clamp-2">{item.title}</h3>
              <div className="absolute top-2 left-2 bg-green-500 text-black text-[10px] px-2 py-[2px] rounded-full font-bold">
                Билет — {item.price}₽
              </div>
              <p className="text-xs text-gray-400 mb-1">Собрано: {item.collected.toLocaleString()} / {item.target.toLocaleString()}₽</p>
              <p className="text-xs text-gray-500">👥 {item.participants} • ⏱ {item.timeLeft}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(item.id);
                }}
                className="absolute top-2 right-2"
              >
                <Heart size={14} className={clsx(favorites.includes(item.id) ? 'text-red-500' : 'text-white')} />
              </button>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default RecommendationsPage;
