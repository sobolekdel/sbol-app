// app/page.tsx

import React from 'react';
import { Search, SlidersHorizontal, Clock } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import '@/styles/globals.css';

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки'];

const products = [
  {
    id: 1,
    title: 'iPhone 13 Pro 128GB',
    price: '56 000 ₽',
    image:
      'https://27.img.avito.st/image/1/1.ayg03LaopDeTKfHNSKiZgFvmqj2v7MPSUPA2DRbpoT6R.gIhLJP84AoTUlzN0HPvcu-vzNVwN8hP7Jg3UeN7SGbQ',
  },
  {
    id: 2,
    title: 'PlayStation 5 Digital Edition',
    price: '41 500 ₽',
    image:
      'https://54.img.avito.st/image/1/1.UOnWprapkkqYfK8NqFGEf1aXkEUTfApUrX3RMG6rkkaY.P1-f69dbzpYHiV6nNS34WXzrxMPmvQQKD5z3MWHWqaU',
  },
  {
    id: 3,
    title: 'Xiaomi Vacuum Cleaner G10',
    price: '11 999 ₽',
    image:
      'https://35.img.avito.st/image/1/1.puMNn7aoyteqHOUnvFtFGsUnzdlpHISswjLnb6Erytea.2-z7a5C3ORW-YI2pBMDpo8TRNka3Y3MxN8MKYpRMcqI',
  },
  {
    id: 4,
    title: 'MacBook Air M1 2020',
    price: '72 000 ₽',
    image:
      'https://33.img.avito.st/image/1/1.Q5IwlbaouXqGS5guheGe9x1mvHlyq4MI_wN4jI8quXqG.8EKHz9SglEmV_KqEwDuzHkMO8Rt7cZZBWwJZ1GJ3Q1I',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 bg-black text-white px-2">
      <div className="sticky top-0 z-10 bg-black py-2">
        <div className="flex items-center gap-2 px-2 py-1 border border-zinc-700 rounded-xl">
          <Search size={16} className="text-zinc-400" />
          <input
            type="text"
            placeholder="Поиск товаров.."
            className="bg-transparent outline-none text-sm flex-1 placeholder-zinc-500"
          />
        </div>

        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className="bg-zinc-800 text-white text-sm rounded-full px-3 py-1 whitespace-nowrap hover:bg-zinc-700"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-sm mt-4 mb-2 font-semibold px-1">Рекомендации</h2>
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 rounded-xl overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-2">
              <p className="text-xs line-clamp-2 mb-1">{product.title}</p>
              <p className="text-sm font-semibold text-green-400">{product.price}</p>
            </div>
            <div className="absolute top-2 right-2 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
