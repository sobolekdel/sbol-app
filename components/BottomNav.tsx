'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, PlusSquare, Bell, User } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  {
    href: '/search',
    label: 'Поиск',
    icon: <Search className="w-5 h-5" />,
  },
  {
    href: '/favorites',
    label: 'Избранное',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    href: '/create',
    label: 'Добавить',
    icon: <PlusSquare className="w-5 h-5" />,
  },
  {
    href: '/notifications',
    label: 'Уведомления',
    icon: <Bell className="w-5 h-5" />,
  },
  {
    href: '/profile',
    label: 'Профиль',
    icon: <User className="w-5 h-5" />,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-gray-800 text-white z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex flex-col items-center text-xs transition',
                isActive ? 'text-white' : 'text-gray-500'
              )}
            >
              {item.icon}
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
