<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h3><v-icon class="mdi-48px ma-1">mdi-data-matrix-scan</v-icon>Part Storage Matching</h3>
      <v-spacer></v-spacer>

      <v-btn 
        @click="$router.push('/about')"
        target="_blank"
        text
      >
        <span class="mr-2">
              <v-icon  class="mdi-5px" >mdi-cached</v-icon>
         </span>
      </v-btn>  

  </v-app-bar>

    <v-content>
            <router-view></router-view>
    </v-content>
    
  </v-app>


</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
  }),
};
</script>
