// app/page.tsx

export default function Home() {
  const items = [
    {
      id: 1,
      title: 'iPhone 14 Pro',
      price: '450 ₽ за билет',
      image: 'https://via.placeholder.com/300x200?text=iPhone+14+Pro',
    },
    {
      id: 2,
      title: 'Кроссовки Nike',
      price: '120 ₽ за билет',
      image: 'https://via.placeholder.com/300x200?text=Nike+Shoes',
    },
    {
      id: 3,
      title: 'PS5 Digital Edition',
      price: '320 ₽ за билет',
      image: 'https://via.placeholder.com/300x200?text=PS5',
    },
    {
      id: 4,
      title: 'Смарт-часы Huawei',
      price: '99 ₽ за билет',
      image: 'https://via.placeholder.com/300x200?text=Huawei+Watch',
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🎯 Рекомендации</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-zinc-900 rounded-xl p-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm text-green-400">{item.price}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
