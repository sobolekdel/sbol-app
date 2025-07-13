"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  const [username, setUsername] = useState("Гость");

  useEffect(() => {
    const savedUser = localStorage.getItem("sbol_username");
    if (savedUser) setUsername(savedUser);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 p-4 space-y-6">
        <h1 className="text-2xl font-bold">Добро пожаловать, {username}!</h1>
        <p className="text-sm text-gray-400">
          Это главная страница SBOL. Здесь вы сможете участвовать в розыгрышах, просматривать объявления и управлять своим профилем.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/search">
            <Button className="w-full">Поиск</Button>
          </Link>
          <Link href="/favorites">
            <Button className="w-full">Избранное</Button>
          </Link>
          <Link href="/ads">
            <Button className="w-full">Объявления</Button>
          </Link>
          <Link href="/profile">
            <Button className="w-full">Профиль</Button>
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
