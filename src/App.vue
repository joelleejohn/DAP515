<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="9" offset=1 align-self="center">
            <v-sheet
              min-height="70vh"
              rounded="lg"
              id="contentSheet"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
          <v-col cols="1"><router-view name="sidebar"></router-view></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
  #contentSheet {
    height: min-content;
  }
</style>
<script>
import AppBar from './components/AppBar.vue';

  export default {
    components: { AppBar },
  }
</script>