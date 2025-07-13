'use client'

import React from 'react'
import { Search, Heart, PlusCircle, Bell, User } from 'lucide-react'
import clsx from 'clsx'

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки']

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
  {
    id: 3,
    title: 'MacBook Pro 14"',
    price: 349,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/2851510/LQ17e2R7lX7uhs5a6H_Txg1460/ocr',
    collected: 49000,
    target: 58000,
    participants: 59,
    timeLeft: '5ч 42м'
  },
  {
    id: 4,
    title: 'Sony WH-1000XM5',
    price: 59,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/2500842/hTbZz_mzk7NNb67XzGHGsw9496/ocr',
    collected: 7500,
    target: 10000,
    participants: 17,
    timeLeft: '7ч 10м'
  },
]

const NavIcon = ({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <div className="flex flex-col items-center text-xs">
    <div className={clsx('mb-1', active ? 'text-white' : 'text-gray-500')}>{icon}</div>
    <span className={clsx('text-[10px]', active ? 'text-white' : 'text-gray-500')}>{label}</span>
  </div>
)

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-black flex justify-around py-2 border-t border-neutral-800 z-50">
    <NavIcon icon={<Search size={20} />} label="Поиск" active />
    <NavIcon icon={<Heart size={20} />} label="Избранное" />
    <NavIcon icon={<PlusCircle size={20} />} label="Добавить" />
    <NavIcon icon={<Bell size={20} />} label="Уведомления" />
    <NavIcon icon={<User size={20} />} label="Профиль" />
  </div>
)

const RecommendationsPage = () => {
  return (
    <div className="min-h-screen pb-20 bg-neutral-950 text-white px-2">
      {/* Поиск */}
      <input
        type="text"
        placeholder="Поиск товаров.."
        className="w-full p-2 mt-2 mb-3 rounded bg-neutral-800 text-white placeholder-gray-400"
      />

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

      {/* Заголовок */}
      <h2 className="mt-4 mb-2 text-sm font-semibold text-white">Рекомендации</h2>

      {/* Карточки */}
      <div className="grid grid-cols-2 gap-3">
        {mockItems.map((item) => (
          <div key={item.id} className="bg-neutral-900 rounded-2xl p-2 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-xl mb-2"
            />
            <h3 className="text-sm font-semibold leading-tight mb-1">{item.title}</h3>
            <p className="text-xs text-gray-400 mb-1">
              Цена билета: <span className="text-white font-medium">{item.price}₽</span>
            </p>
            <p className="text-xs text-gray-400 mb-1">
              Собрано: {item.collected.toLocaleString()} / {item.target.toLocaleString()}₽
            </p>
            <p className="text-xs text-gray-500">👥 {item.participants} • ⏱ {item.timeLeft}</p>
            <Heart size={14} className="absolute top-2 right-2 text-white" />
          </div>
        ))}
      </div>

      {/* Нижняя навигация */}
      <BottomNav />
    </div>
  )
}

export default RecommendationsPage
