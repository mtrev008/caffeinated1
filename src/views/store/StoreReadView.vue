
<template>
  <div class="store/read">
    <h1>This is the Store Read Page</h1>

    <!-- flex this table so it looks better -->
    <table v-if="shopStore.items.length > 0">
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Id</th>
    </tr>
    <tr v-for="item in shopStore.items">
      <td>{{ item.name || 'Unknown Name' }}</td>
      <td>{{ item.price || 'Unknown Price'}}</td>
      <td>{{ item.id || 'Unknown Id' }}</td>
    </tr>
    </table>
    <p>Total: {{ shopStore.getTotal }}</p>

  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useShopStore } from '../../stores/shop'

export default {
  computed: {
    ...mapStores(useShopStore),
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
