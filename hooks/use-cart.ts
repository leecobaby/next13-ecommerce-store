import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'react-hot-toast';


import type { Product } from '@/types';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((i) => i.id === data.id);
      if (existingItem) {
        return toast("Item already in cart")
      }

      set({ items: [...currentItems, data] })
      toast.success("Item added to cart")
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((i) => i.id !== id)] })
      toast.success("Item removed from cart")
    },
    removeAll: () => set({ items: [] })
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
)