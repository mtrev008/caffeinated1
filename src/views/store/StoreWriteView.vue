<template>
    <div class="store/write">
      <h1>This is the Store Write Page</h1>
  
      Item Name:<input type="text" v-model="itemName" />
      <br>
      Item Price:<input type="text" v-model="itemPrice" />
      <br>
      Item Id:<input type="text" v-model="itemId" />
      <br>
      <button @click="addItemToCart()">Add</button>
      <br>
      <button @click="removeItemFromCart()">Remove</button>
  
    </div>
  </template>
  
  <script>
  import { mapStores } from 'pinia'
  import { useCartStore } from '../../stores/cart'
  
  export default {
    data() {
      return {
        itemName: null,
        itemPrice: null,
        itemId: null,
      };
    },
    computed: {
      ...mapStores(useCartStore),
    },
    methods: {
      async addItemToCart() {
        if (this.itemName != null && this.itemPrice != null && this.itemId != null) {
          try {
            console.log('Calling addItemToCart');
  
            this.cartStore.addItem({
              name: this.itemName,
              price: this.itemPrice,
              id: this.itemId,
            });
  
            console.log('Completed addItemToCart');
          } catch(err) {
            console.error(err);
          }
        }
      },
      async removeItemFromCart() {
        if (this.itemId != null) {
          try {
            console.log('Calling removeItemFromCart');
  
            this.cartStore.deleteItem({
              id: this.itemId,
            });
  
            console.log('Completed removeItemFromCart');
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
      align-items: center;
    }
  }
  </style>
  