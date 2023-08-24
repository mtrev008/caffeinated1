
<template>
  <div class="store/read">
    <h1>This is the Review Read Page</h1>

    <!-- flex this table so it looks better -->
    <table v-if="listStore.reviews.length > 0">
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Id</th>
    </tr>
    <tr v-for="review in listStore.reviews">
      <td>{{ review.title || 'Unknown Title' }}</td>
      <td>{{ review.id || 'Unknown Id' }}</td>
      <td>{{ review.ReviewId || 'Unknown Review Id' }}</td>
      <td>{{ review.Review || 'Unknown Review' }}</td>
    </tr>
    </table>
    <p>Total: {{ listStore.getTotal }}</p>

  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useListStore } from '../../stores/list'

export default {
  computed: {
    ...mapStores(useListStore),
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
