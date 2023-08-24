<template>
  <div>
    <GoogleMap :api-key="mapsapi" style="width: 1000px; height: 1000px" :center="center" :zoom="12">
      <Marker v-for="marker in markers" :key="marker.id" :options="{ position: marker.position }" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
// import { SearchBar } from "./SearchBar.vue"
// import { geocodeResponse } from "./SearchBar.vue"
// import { SearchBar } from "./SearchBar.vue"

export default defineComponent({
  components: { GoogleMap, Marker },
  // props: {
  //   apiKey: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY,
  // },
  data() {
    return {
      center: { lat: 33.980377, lng: -117.376339 },
      mapsapi: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY,
      markers: [],
    };
  },
  methods: {
    async updateCenter(response) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${this.mapsapi}&query=cafe+in+${encodeURIComponent(city)}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.results.length > 0) {
            this.center = data.results[0].geometry.location;
            this.markers = data.results.map(result => ({
              id: result.id,
              position: result.geometry.location,
            }));
          }
        }
      } catch (error) {
        console.error("Error updating center:", error);
      }
    },
  },
  // watch: {
  //   center(response) {
  //     // You can perform additional actions when the center changes
  //   },
  // },
});
</script>