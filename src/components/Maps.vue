<template>
    <GoogleMap :api-key="mapsapi" style="width: 800px; height: 800px" :center="center" :zoom="12">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 33.980377, lng: -117.376339 };

    return { center };
  },
  data() {
    return {mapsapi: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY};
  },
});
</script>