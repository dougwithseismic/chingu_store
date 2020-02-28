<template lang="html">
  <div class="product-detail">
    {{$route.params.slug}}
    
    <div v-if="product">    
    <v-btn @click="addItemToCart(product.id)">ADDTOCART</v-btn>
    <v-btn @click="resetCart">RESETCART</v-btn>
    <v-btn @click="removeItemFromCart(2)">Remove ProductID 2 from cart</v-btn> 
    </div>
    <div v-if="!product">Loading..</div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    };
  },
  methods: {
    addItemToCart(id) {
      this.$store.dispatch("addToCart", id);
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
</style>


example.com/3
