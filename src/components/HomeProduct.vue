<template>
  <!-- vue js title  -->
  <Login />
    <v-carousel :show-arrows="true">
      <v-carousel-item
        v-for="(item,i) in items4"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  <v-card
  class="mx-auto pa-1"
  max-width="1010"
>
<v-list>
  <v-list-item
  prepend-avatar="../assets/Screenshot_20230620-223313_Photos.png "
  title="Dixit Patel"
  :subtitle="email"
>
</v-list-item>
      <v-list-subheader style="text-align: center;margin:auto">Contact Details</v-list-subheader>
      <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
   <v-list-item lines="three"
      v-for="item in items"
      :key="item.id"
      :value="item"
      :title="item.firstName"
      :subtitle="item.phone"
      :prepend-avatar="item.image"
      color="primary"
      rounded="shaped"
    >
    <router-link class="link" :to="{ name: 'product', params: { productId: item.id } }">{{item.email}}</router-link>
   <v-list-item-title v-text="item.text" ></v-list-item-title>
    </v-list-item>
  </v-list>
    <div class="text-center text-body-2 mb-12">
 {{ email }} last Numbar. 
    </div>
  </v-card>
</template>
<script>
import Login from '../components/Error.vue'
import SearchBar from "../components/SearchBar.vue";
export default {
  data() {
    return {
      products: [],
      searchTerm: '',
      items: [],
      searchResult: [],
      email:'dixitcoder@gmail.com',
      items7: [
        {
          src: 'backgrounds/bg.jpg',
        },
        {
          src: 'backgrounds/md.jpg',
        },
        {
          src: 'backgrounds/bg-2.jpg',
        },
        {
          src: 'backgrounds/md2.jpg',
        },
      ],
      selection: [],
      items4: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ],
    };
  },
  components(){SearchBar,Login} ,
 async mounted() {
    const items = await fetch('https://dummyjson.com/users');
    const json = await items.json();
    let item = json.users;
               this.items=item
  },
  methods: {
    fetchProductList() {
      // Replace this URL with the actual API endpoint for the product list
      const apiUrl = 'https://dummyjson.com/users';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          let json = data.users ;
          this.items   = json;
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToNextPage() {
      this.$router.push("/");
    },
    performSearch(query) {
      if (query) {
        this.searchResult = this.items.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.searchResult = [];
      }
    }
  },
  computed: {
    filteredItems() {
      if (this.searchResult.length > 0) {
        return this.searchResult;
      } else {
        return this.items;
      }
    },
  }
};
</script>
<style>
.link{
  color: rgb(226, 0, 0);
  text-decoration: none;
  color: rgb(104, 87, 87);
}
</style>