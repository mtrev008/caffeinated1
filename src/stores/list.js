import { defineStore } from 'pinia'

export const useListStore = defineStore({
  id: 'list',
  state: () => ({
    reviews: []
  }),
  getters: {
    getTotal: (state) => {
      let total = 0.0;
      for (const review of state.reviews) {
        total += parseFloat(review.price);
      }
      return total;
    }
  },
  actions: {
    addReview(review) {
      if (review) {
        this.reviews.push(review);
      }
    },
    deleteReview(review) {
      if (review) {
        this.reviews = this.reviews.filter((i) => i.id !== review.id)
      }
    },
  }
})
