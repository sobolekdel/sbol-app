'use client';
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Card from '../components/Card';
import BottomNav from '../components/BottomNav';

const RecommendationsPage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

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

  return (
    <div className="min-h-screen pb-24 bg-neutral-950 text-white px-4">
      <div className="relative mt-6 mb-4 flex items-center">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Поиск товаров... Ваш город: Тула"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full mt-1 bg-neutral-800 rounded-md w-full z-10">
            {suggestions.map((s, i) => (
              <li key={i} onClick={() => setSearch(s)} className="px-4 py-2 text-sm hover:bg-neutral-700 cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
      <h2 className="text-xl font-bold mb-4">Рекомендации</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => <Card key={item.id} item={item} />)}
      </div>
      <BottomNav />
    </div>
  );
};

export default RecommendationsPage;
