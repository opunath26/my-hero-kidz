"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  const fetchCartCount = async () => {
    if (!session?.user?.email) {
      setCartCount(0);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/cart");
      if (res.ok) {
        const data = await res.json();
        const totalItems = data.items?.reduce(
          (acc, item) => acc + (item.quantity || 1),
          0
        ) || 0;
        setCartCount(totalItems);
      }
    } catch (error) {
      console.error("Failed to fetch cart count:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchCartCount();
    } else if (status === "unauthenticated") {
      setCartCount(0);
    }
  }, [status, session]);

  return (
    <CartContext.Provider value={{ cartCount, fetchCartCount, loading }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);