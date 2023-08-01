<template>
  <router-link class="line" to="/home"> <v-toolbar 
  dark
  :elevation="8"  class="mb-0" title="Home"  >

</v-toolbar></router-link>
  <router-view />
</template>

<script >
// import Home from './components/LoginVue.vue';
  export default {
    name:'App',
    data() {
      return {
        
      }
    },
    components:{
      // Home
    }
  }
</script>
<style scoped>
.line{
  text-decoration-line: none;
}
.error-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.error-text {
  text-align: center;
}
</style>