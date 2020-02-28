<template lang="html">
  <div class="product-detail">
    {{$route.params.slug}}
    Product id: {{product.id}}
    <v-btn @click="addItemToCart(product.id)">ADDTOCART</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return {
      product: null,
    }
  },
  methods:{
    addItemToCart(id){
      this.$store.dispatch('addToCart', id)
    }
  },
  mounted(){
    this.product = this.$store.getters.getProductFromSlug(this.$route.params.slug)
  }
}
</script>

<style lang="scss" scoped>
</style>


example.com/3
