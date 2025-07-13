'use client';

import React, { useState, useEffect } from 'react';
import { Search, Heart, PlusCircle, Bell, User } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки'];

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
  const [favorites, setFavorites] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [city, setCity] = useState('Тула');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  useEffect(() => {
    if (search.length > 1) {
      fetch(`/api/suggest?q=${search}`)
        .then(res => res.json())
        .then(data => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  }, [search]);

  const filteredItems = items.filter(item =>
    (selectedCategory === 'Все' || item.category === selectedCategory) &&
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    item.city === city &&
    item.price >= minPrice &&
    item.price <= maxPrice
  );

  return (
    <div className="min-h-screen pb-24 bg-neutral-950 text-white px-4">
      <div className="relative mt-2 mb-3 flex items-center">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder={`Поиск товаров... Ваш город: ${city}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full mt-1 bg-neutral-800 rounded-md w-full z-10">
            {suggestions.map((s, i) => (
              <li
                key={i}
                onClick={() => setSearch(s)}
                className="px-4 py-2 text-sm hover:bg-neutral-700 cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-2">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={clsx(
              'px-3 py-1 rounded-full text-sm whitespace-nowrap',
              selectedCategory === cat ? 'bg-white text-black' : 'bg-neutral-700 text-gray-300'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="mt-4 mb-3 text-lg font-bold text-white">Рекомендации</h2>

      <div className="grid grid-cols-2 gap-4">
        {filteredItems.map((item) => (
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

      <BottomNav />
    </div>
  );
};

export default RecommendationsPage;
