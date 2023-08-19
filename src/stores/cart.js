import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: []
  }),
  getters: {
    getTotal: (state) => {
      let total = 0.0;
      for (const item of state.items) {
        total += parseFloat(item.price);
      }
      return total;
    }
  },
  actions: {
    addItem(item) {
      if (item) {
        this.items.push(item);
      }
    },
    deleteItem(item) {
      if (item) {
        this.items = this.items.filter((i) => i.id !== item.id)
      }
    },
  }
})
