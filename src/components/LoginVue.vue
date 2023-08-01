<template>
    <div>
        <br>
        <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
                <v-card
                class="mx-auto"
                max-width="434"
                rounded="0"
              >
                <v-img
                  height="100%"
                  cover
                  src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                >
                  <v-avatar
                    color=""
                    size="300"
                    rounded="3"
                  >
                    <v-img cover src="../assets/Screenshot_20230620-223313_Photos-removebg-preview.png"></v-img>
                  </v-avatar>
                  <v-list-item
                    class="text-white"
                    title="Dixit Patel"
                    subtitle="Web Devlompent"
                  ></v-list-item>
                  <v-list-item
                  class="text-white"
                  title="username:dixitcoder@gmail.com"
                  subtitle="password: 123456"
                ></v-list-item>
                </v-img>
              </v-card>
              <v-text-field
                v-model="username"
                label="UserName"
                :rules="usernameRules"
              ></v-text-field>
        
              <v-text-field
                v-model="password"
                label="Password"
                :rules="passwordRules"
              ></v-text-field>
        
              <v-btn @click="Login()" type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
    </div>
</template>
<script >
let username = 'dixitcoder@gmail.com'
let password = 123456
 export default {
    data: () => ({
      username: 'dixitcoder@gmail.com',
      usernameRules: [
        value => {
          if (value?.length > 8) return true
          return 'First name must be at least 8 characters.'
        },
      ],
      password: '123456',
      passwordRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'Last name can not contain digits.'
        },
      ],
    }),
    methods: {
      Login(){
        if(username==this.username && password==this.password){
            this.$router.push({path: '/home'});
        }
      }  
    },
  }
</script>