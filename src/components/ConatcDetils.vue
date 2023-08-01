<template>
    <div v-if="product">
        <br><br>
        <v-card max-width="448" class="mx-auto">
            <v-layout>
        
              <v-main>
                <v-container fluid>
                  <v-card
                    border
                    class="mb-2"
                    density="compact"
                    :prepend-avatar="product.image"
                    :subtitle="product.email"
                    :title="product.firstName"
                    variant="text"
                  >
                    <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>
        
                    <v-card-text>
                      {{ product.university }}
                    </v-card-text>
                  </v-card>
                  <v-bottom-navigation>
                    <v-btn value="recent">
                      <v-icon>mdi-instagram</v-icon>
                      instagram
                    </v-btn>
                  
                    <v-btn value="favorites">
                      <v-icon>mdi-facebook</v-icon>
                      <a href="">facebook</a>
                    </v-btn>
                  
                    <v-btn value="nearby">
                      <v-icon>mdi-whatsapp</v-icon>
                 <a href=""> whatsapp</a>
                    </v-btn>
                  </v-bottom-navigation>
                </v-container>
              </v-main>
            </v-layout>
          </v-card>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});
function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// Vue Js using 
export default {
    data() {
      return {
        product: null,
      };
    },
    created() {
      // Fetch the product details from the API when the component is created
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        const productId = this.$route.params.productId;
        // Replace this URL with the actual API endpoint for fetching a single product
        const apiUrl = `https://dummyjson.com/users/${productId}`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            this.product = data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  <style scoped>
 a{
    text-decoration-line: none;
    color: black;
 }
</style>