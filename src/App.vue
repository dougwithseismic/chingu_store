<template>
  <!-- App.vue -->

  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <Navigation></Navigation>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/common/Navigation";

export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
  .container.container--fluid{
    padding: 0;
    max-width:1500px;
    
    &>div{
      padding: 12px;
    }
  }
</style>
