'use client';
import Link from 'next/link';
import { Search, Heart, PlusCircle, Bell, User } from 'lucide-react';

export default function BottomNav() {
  return (
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
}
