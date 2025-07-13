'use client';

import BottomNav from '@/components/BottomNav';

const mockItems = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    image: 'https://via.placeholder.com/300x300?text=iPhone+14',
    price: '85 000 ₽',
  },
  {
    id: 2,
    title: 'PlayStation 5',
    image: 'https://via.placeholder.com/300x300?text=PS5',
    price: '42 500 ₽',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <h2 className="text-xl font-semibold px-4 pt-4">Рекомендации</h2>
      <div className="grid grid-cols-2 gap-2 p-4">
        {mockItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#222] p-2 rounded-xl flex flex-col gap-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-sm">{item.title}</div>
            <div className="text-green-400 font-semibold">{item.price}</div>
          </div>
        ))}
      </div>

      <BottomNav />
    </main>
  );
}
