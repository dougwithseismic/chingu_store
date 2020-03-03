<template lang="html">
  <div class="product-detail">
    {{$route.params.slug}}

    <div v-if="product">
      <v-btn @click="addItemToCart(product.id)">ADDTOCART</v-btn>
      <v-btn @click="resetCart">RESETCART</v-btn>
      <v-btn @click="removeItemFromCart(product.id)">Remove Product</v-btn>
    </div>

    <div v-if="!product">Loading..</div>

    <v-snackbar
        v-model="showSnackbar"
        :timeout="1000"
        bottom
        color="primary"
      >
      <span class="text-center">
        Added to cart.
      </span>

    </v-snackbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      showSnackbar: false,
    };
  },
  methods: {
    addItemToCart(id) {
      this.$store.dispatch("addToCart", id);
      this.showSnackbar = true;
    },
    resetCart() {
      this.$store.dispatch("resetCart");
    },
    removeItemFromCart(id) {
      this.$store.dispatch("removeItemFromCart", id);
    }
  },
  mounted() {
    this.product = this.$store.getters.getProductFromSlug(
      this.$route.params.slug
    );
  }
};
</script>

<style lang="scss" scoped>
span{
  width:100%;
}
</style>


example.com/3
