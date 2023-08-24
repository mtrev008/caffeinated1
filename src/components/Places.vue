<script>
import axios from 'axios';

export default {
  // ...
  methods: {
    async searchCafes(cityName) {
      const apiKey = import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafe+in+${cityName}&key=${apiKey}`
      );
      
      const cafes = response.data.results;
      // Use the cafes data to display markers on the map
    },
  },
};
</script>
