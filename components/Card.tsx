'use client';
import { Heart } from 'lucide-react';
import clsx from 'clsx';

export default function Card({ item }) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-2 relative hover:bg-neutral-800 transition">
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
      <button className="absolute top-2 right-2">
        <Heart size={14} className={clsx('text-white')} />
      </button>
    </div>
  );
}
