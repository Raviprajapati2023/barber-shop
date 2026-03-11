"use client";

import { useShop } from "@/lib/shop-context";

export default function ShopName() {
  const { name } = useShop();
  return <>{name}</>;
}
