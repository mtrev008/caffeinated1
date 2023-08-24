<template>
    <div>
      <input type="text" v-model="query" placeholder="Enter city and state">
      <button @click="search">Search</button>
      <ul>
        <li v-for="suggestion in suggestions" :key="suggestion.place_id" @click="selectSuggestion(suggestion)">
          {{ suggestion.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // import GoogleAutocomplete from '@google/maps';
  
  export default {
    name: 'SearchBar',
    data() {
      return {
        query: '',
        suggestions: [],
      };
    },
    // mounted() {
    //   const autocomplete = new GoogleAutocomplete();
    //   autocomplete.types = 'establishment:cafe';
    //   autocomplete.componentRestrictions = { country: 'us' };
    //   autocomplete.onPlacesChanged = (places) => {
    //     this.suggestions = places;
    //   };
    // },
    methods: {
      async search() {
        console.log("About to search")
        const geocodeResponse = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?key=${import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY}&address=${encodeURIComponent(this.query)}`
        );
        console.log("Search completed")
        console.log(geocodeResponse)
  
        if (geocodeResponse.ok) {
          const data = await geocodeResponse.json();
          if (data.results.length > 0) {
            this.$emit('city-selected', data.results[0].geometry.location);
          }
        }
      },
      selectSuggestion(suggestion) {
        this.query = suggestion.name;
        this.search();
      },
    },
    // props: {
    //   apiKey: import.meta.env.VITE_API_YOUR_GOOGLE_MAPS_API_KEY,
    // },
  };
  </script>
  