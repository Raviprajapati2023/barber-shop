"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

export interface ShopConfig {
  name: string;
  slug: string;
}

const DEFAULT_SHOP: ShopConfig = {
  name: "The Sharp Blade",
  slug: "sharp-blade",
};

const ShopContext = createContext<ShopConfig>(DEFAULT_SHOP);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [shop, setShop] = useState<ShopConfig>(DEFAULT_SHOP);
  const pathname = usePathname();

  // On first load: read from URL param or localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("shop");

    if (raw) {
      localStorage.setItem("shop", raw);
      setShop({ name: raw, slug: raw.toLowerCase().replace(/\s+/g, "-") });
    } else {
      const saved = localStorage.getItem("shop");
      if (saved) {
        setShop({ name: saved, slug: saved.toLowerCase().replace(/\s+/g, "-") });
      }
    }
  }, []);

  // Re-inject ?shop= into URL on every route change so it never disappears
  useEffect(() => {
    const saved = localStorage.getItem("shop");
    if (!saved) return;
    const url = new URL(window.location.href);
    url.searchParams.set("shop", saved);
    window.history.replaceState({}, "", url.toString());
  }, [pathname]);

  return <ShopContext.Provider value={shop}>{children}</ShopContext.Provider>;
}

export function useShop() {
  return useContext(ShopContext);
}

/** Splits "The Royal Barbers" → { prefix: "The", main: "Royal Barbers" } */
export function splitShopName(name: string): { prefix: string | null; main: string } {
  if (name.toLowerCase().startsWith("the ")) {
    return { prefix: "The", main: name.slice(4) };
  }
  return { prefix: null, main: name };
}
