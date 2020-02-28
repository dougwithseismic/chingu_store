<template>
  <div class="home">
    <div class="category-heading">
      <h1>Desk Chairs</h1>
      <p>Find your favourite new swivel chair, as long as it's black and silver with five wheels. Here we'd be able to put some dynamic text pulled from a category page for SEO fluff.</p>
    </div>
    <v-row justify="center" class="product-view">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="text-center"
        v-for="chair in $store.state.products"
        :key="chair.id"
      >
        <router-link tag="div" :to="{name:'detail', params: {slug: chair.slug, id:chair.id}}">
          <div class="product-card">
            <img class="product-card-image" :src="chair.imagesrc" />
            <h3>{{chair.name}}</h3>
            <p :class="{ cardIsActive: active}">{{chair.description}}</p>
            <p>€{{chair.price}}</p>
          </div>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      active: false,
      message: "hello!",
      name: "joe"
    };
  },
  methods: {
    toggleColor() {
      this.active = !this.active;
    }
  },
  computed: {}
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  margin: auto;
}

.product-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  margin: 1em;
  border-color: none;
  cursor: pointer;
}

.product-card h3 {
  margin: 1rem 0 0;
}

.product-card-image {
  width: 100%;
  height: 100%;
}
</style>
