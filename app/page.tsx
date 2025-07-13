'use client';

import Image from 'next/image';
import BottomNav from '@/components/BottomNav';
import '@/styles/globals.css';

const products = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    price: 450,
    image: '/images/iphone.jpg',
  },
  {
    id: 2,
    title: 'Кроссовки Nike',
    price: 120,
    image: '/images/nike.jpg',
  },
  {
    id: 3,
    title: 'PS5 Digital Edition',
    price: 320,
    image: '/images/ps5.jpg',
  },
  {
    id: 4,
    title: 'Смарт-часы Huawei',
    price: 99,
    image: '/images/huawei.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white pb-16">
      <h1 className="text-xl font-bold p-4">🔥 Рекомендации</h1>
      <div className="grid grid-cols-2 gap-4 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-neutral-900 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={300}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h2 className="text-sm font-semibold">{product.title}</h2>
              <p className="text-green-500 text-xs">{product.price} ₽ за билет</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
