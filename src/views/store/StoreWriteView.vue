<template>
    <div class="store/write">
      <h1>This is the Store Write Page</h1>
  
      Item Name:<input type="text" v-model="itemName" />
      <br>
      Item Price:<input type="text" v-model="itemPrice" />
      <br>
      Item Id:<input type="text" v-model="itemId" />
      <br>
      <button @click="addItemToShop()">Add</button>
      <br>
      <button @click="removeItemFromShop()">Remove</button>
  
    </div>
  </template>
  
  <script>
  import { mapStores } from 'pinia'
  import { useShopStore } from '../../stores/shop'
  
  export default {
    data() {
      return {
        itemName: null,
        itemPrice: null,
        itemId: null,
      };
    },
    computed: {
      ...mapStores(useShopStore),
    },
    methods: {
      async addItemToShop() {
        if (this.itemName != null && this.itemPrice != null && this.itemId != null) {
          try {
            console.log('Calling addItemToShop');
  
            this.shopStore.addItem({
              name: this.itemName,
              price: this.itemPrice,
              id: this.itemId,
            });
  
            console.log('Completed addItemToShop');
          } catch(err) {
            console.error(err);
          }
        }
      },
      async removeItemFromShop() {
        if (this.itemId != null) {
          try {
            console.log('Calling removeItemFromShop');
  
            this.shopStore.deleteItem({
              id: this.itemId,
            });
  
            console.log('Completed removeItemFromShop');
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
  