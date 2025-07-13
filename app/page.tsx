// app/page.tsx — финальный код главной страницы SBOL с полным функционалом

'use client';

import { useState, useMemo } from 'react';
import BottomNav from '@/components/BottomNav';
import { Search, SlidersHorizontal, Clock } from 'lucide-react';
import '@/styles/globals.css';

const allItems = [
  { title: 'iPhone 14 Pro', price: 450, category: 'Смартфоны', date: '2025-07-13' },
  { title: 'Кроссовки Nike', price: 120, category: 'Одежда', date: '2025-07-12' },
  { title: 'PS5 Digital Edition', price: 320, category: 'Консоли', date: '2025-07-10' },
  { title: 'Смарт-часы Huawei', price: 99, category: 'Гаджеты', date: '2025-07-09' },
  { title: 'MacBook Pro M3', price: 900, category: 'Ноутбуки', date: '2025-07-08' },
];

const categories = ['Все', 'Смартфоны', 'Одежда', 'Консоли', 'Гаджеты', 'Ноутбуки'];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setCategory] = useState('Все');
  const [sortBy, setSortBy] = useState<'new' | 'cheap'>('new');
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    let result = allItems.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === 'Все' || item.category === selectedCategory)
    );

    if (sortBy === 'cheap') {
      result = result.sort((a, b) => a.price - b.price);
    } else {
      result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return result;
  }, [search, selectedCategory, sortBy]);

  const toggleFavorite = (title: string) => {
    setFavorites(prev =>
      prev.includes(title) ? prev.filter(fav => fav !== title) : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="sticky top-0 bg-black z-10 p-4">
        <div className="flex gap-2 items-center mb-4">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск товаров..."
            className="bg-zinc-900 px-4 py-2 rounded-xl w-full text-sm outline-none"
          />
          <button onClick={() => setSortBy(sortBy === 'new' ? 'cheap' : 'new')}>
            {sortBy === 'new' ? <Clock size={18} /> : <SlidersHorizontal size={18} />}
          </button>
        </div>

        <div className="flex gap-2 overflow-auto text-sm text-white">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap ${
                selectedCategory === cat ? 'bg-white text-black' : 'bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-lg font-semibold px-4 pt-6 pb-2">Рекомендации</h1>
      <div className="grid grid-cols-2 gap-4 px-4">
        {filteredItems.map((item, i) => (
          <div key={i} className="bg-zinc-900 p-3 rounded-xl relative">
            <button
              onClick={() => toggleFavorite(item.title)}
              className="absolute top-2 right-2 text-sm"
            >
              {favorites.includes(item.title) ? '💖' : '🤍'}
            </button>
            <div className="aspect-square bg-zinc-800 rounded mb-2"></div>
            <div className="text-sm font-medium mb-1 line-clamp-2">{item.title}</div>
            <div className="text-green-500 text-xs font-semibold">{item.price} ₽ за билет</div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
