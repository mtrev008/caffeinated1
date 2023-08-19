
<template>
  <div class="store/read">
    <h1>This is the Store Read Page</h1>

    <!-- flex this table so it looks better -->
    <table v-if="cartStore.items.length > 0">
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Id</th>
    </tr>
    <tr v-for="item in cartStore.items">
      <td>{{ item.name || 'Unknown Name' }}</td>
      <td>{{ item.price || 'Unknown Price'}}</td>
      <td>{{ item.id || 'Unknown Id' }}</td>
    </tr>
    </table>
    <p>Total: {{ cartStore.getTotal }}</p>

  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useCartStore } from '../../stores/cart'

export default {
  computed: {
    ...mapStores(useCartStore),
  },
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
