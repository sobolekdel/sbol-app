export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      price: 199,
      image: "/iphone.jpg",
      collected: 12000,
      target: 15000,
      participants: 25,
      timeLeft: "2д 3ч",
      category: "Смартфоны",
      city: "Тула"
    },
    {
      id: 2,
      title: "PlayStation 5",
      price: 299,
      image: "/ps5.jpg",
      collected: 34000,
      target: 39000,
      participants: 44,
      timeLeft: "1д 12ч",
      category: "Консоли",
      city: "Тула"
    },
    {
      id: 3,
      title: "ВАЗ 2115",
      price: 150,
      image: "https://10.img.avito.st/image/1/1.3Th39ra4cdFBQfPcQcnvHhJXc9fJV_PHQVpz08dfedvB.gbFhzghc_MN4_vBiLLVyTNUA4yOuhJ5TSQtP2GJZrRA?cqp=2.TSzMy-m0u9ojo94xoNTr4TIkcUBjMu1L_y5Z6Lr-VHA-3xfoRpsvf1jN4IBF36LEO13sxOCjYv9KRoXzpmAFvKTQ",
      collected: 20000,
      target: 30000,
      participants: 34,
      timeLeft: "3д 5ч",
      category: "Авто",
      city: "Тула"
    }
    // Добавь еще 7
  ]);
}
