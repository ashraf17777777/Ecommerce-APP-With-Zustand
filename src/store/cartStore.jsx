import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // Add to cart logic
  addToCart: (product) =>
    set((state) => {
      // Ben-shof law el product mwgod aslan
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // Law mwgod, n-update el quantity bs
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
        return { cart: updatedCart };
      }

      // Law msh mwgod, n-defo w n-khali el quantity = 1
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  // Remove one by one logic
  removeFromCart: (prodId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === prodId);

      if (existingItem && existingItem.quantity > 1) {
        // Law akthar men wahed, n-na2as wahed bs
        const updatedCart = state.cart.map((item) =>
          item.id === prodId ? { ...item, quantity: item.quantity - 1 } : item,
        );
        return { cart: updatedCart };
      }

      // Law hwa wahed bs, n-shelo khales men el array
      return { cart: state.cart.filter((item) => item.id !== prodId) };
    }),

  clearCart: () => set({ cart: [] }),
}));
