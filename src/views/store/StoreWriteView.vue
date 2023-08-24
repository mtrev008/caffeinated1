<template>
    <div class="store/write">
      <h1>This is the Store Write Page</h1>
  
      List Review Title:<input type="text" v-model="reviewTitle" />
      <br>
      List Id:<input type="text" v-model="reviewId" />
      <br>
      List review:<input type="text" v-model="review" />
      <br>
      <button @click="addReviewToList()">Add</button>
      <br>
      <button @click="removeReviewFromList()">Remove</button>
  
    </div>
  </template>
  
  <script>
  import { mapStores } from 'pinia'
  import { useListStore } from '../../stores/list'
  
  export default {
    data() {
      return {
        reviewName: null,
        reviewPrice: null,
        reviewId: null,
      };
    },
    computed: {
      ...mapStores(useListStore),
    },
    methods: {
      async addReviewToList() {
        if (this.reviewName != null && this.reviewPrice != null && this.reviewId != null) {
          try {
            console.log('Calling addReviewToList');
  
            this.listStore.addReview({
              name: this.reviewTitle,
              reviewId: this.reviewId,
              review: this.review,
            });
  
            console.log('Completed addReviewToList');
          } catch(err) {
            console.error(err);
          }
        }
      },
      async removeReviewFromList() {
        if (this.reviewId != null) {
          try {
            console.log('Calling removeReviewFromList');
  
            this.listStore.deleteReview({
              id: this.reviewId,
            });
  
            console.log('Completed removeReviewFromList');
          } catch(err) {
            console.error(err);
          }
        }
      },
    }
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-reviews: center;
    }
  }
  </style>
  