'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/search', label: 'Поиск' },
    { href: '/favorites', label: 'Избранное' },
    { href: '/create', label: 'Добавить' },
    { href: '/notifications', label: 'Уведомления' },
    { href: '/profile', label: 'Профиль' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-gray-800 text-white z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, idx) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              href={item.href}
              key={idx}
              className={`flex flex-col items-center text-xs transition ${
                isActive ? 'text-white' : 'text-gray-500'
              }`}
            >
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
