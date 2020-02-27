<template>
  <div class="home">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4"
        class="text-center"
        v-for="chair in $store.state.products"
        :key="chair.id"
      >
        <router-link tag="div" :to="{name:'detail', params: {id:chair.id}}">
          <v-card
            max-width="350px"
          >
            <h3>{{chair.name}}</h3>
            <p :class="{ cardIsActive: active}">{{chair.description}}</p>
            <p>{{chair.price}}</p>
            <v-img max-width="100" :src="chair.imagesrc"></v-img>

          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data: () => {
    return {
      active: false,
      message: "hello!",
      name: "joe"
    }
  },
  methods: {
    toggleColor () {
      this.active = !this.active
    },

  },
  computed: {

  }
}
</script>

<style lang="scss">

  .cardIsActive { background-color: red}

 </style>
