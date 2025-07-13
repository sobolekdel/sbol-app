'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Heart,
  PlusCircle,
  Bell,
  User,
} from 'lucide-react'

import clsx from 'clsx'

const navItems = [
  { href: '/search', label: 'Поиск', icon: Home },
  { href: '/favorites', label: 'Избранное', icon: Heart },
  { href: '/create', label: 'Добавить', icon: PlusCircle },
  { href: '/notifications', label: 'Уведомления', icon: Bell },
  { href: '/profile', label: 'Профиль', icon: User },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-gray-800 text-white z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex flex-col items-center text-xs transition',
                active ? 'text-white' : 'text-gray-500'
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
