<template>
    <v-text-field
      v-model="searchText"
      :label="label"
      :placeholder="placeholder"
      @input="handleInput"
      clearable
    ></v-text-field>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: "Search",
      },
      placeholder: {
        type: String,
        default: "Type your search here",
      },
    },
    data() {
      return {
        searchText: "",
      };
    },
    methods: {
      handleInput() {
        this.$emit("search", this.searchText);
      },
    },
  };
  </script>
  