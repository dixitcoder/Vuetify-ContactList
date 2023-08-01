<template>
    <v-app>
      <v-main>
        <v-container>
          <SearchBar @search="performSearch" />
          <v-list>
            <v-list-item
              v-for="item in searchResults"
              :key="item.id"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import SearchBar from "@/components/SearchBar.vue";
  
  export default {
    components: {
      SearchBar,
    },
    data() {
      return {
        searchResults: [], // Holds the results from the API
      };
    },
    methods: {
      async performSearch(searchText) {
        try {
          // Replace this with your actual API endpoint
          const apiUrl = `https://example-api.com/search?q=${searchText}`;
  
          // Simulate an API call using fetch
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          // Update the searchResults with the API response
          this.searchResults = data;
        } catch (error) {
          console.error("Error fetching search results:", error);
          this.searchResults = []; // Clear search results on error
        }
      },
    },
  };
  </script>
  