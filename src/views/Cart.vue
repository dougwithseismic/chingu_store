<template lang="html">
  <div class="cart">
    <div v-if="cart" class="cart-items">
      {{productsInCart}}
      <div v-for="item in productsInCart" :key="item.id"  class="cart-item">
      <!-- { "id": 2, "name": "Gaming chair", "slug": "gaming-chair-2", "description": "Chair for gamers.", "imagesrc": "https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg", "price": 15, "sku": "002ABC", "quantity": 1  -->
     <img class="item-image" :src="item.imagesrc"/>
      <h3>{{item.name}}</h3>
     <div class="quantity-controls">
      <v-btn><v-icon>mdi-minus</v-icon></v-btn>
           <p>{{item.quantity}}</p>
      <v-btn><v-icon>mdi-plus</v-icon></v-btn> 
     </div>
      



      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Cart",
  data: () => {
    return {
      cart: null
    };
  },
  computed: {
    productsInCart() {
      return this.cart.map(p => {
        return {
          ...this.$store.getters.getProductFromId(p.productid),
          quantity: p.quantity
        };
      });
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
  }
};
</script>

<style lang="scss" scoped>
.cart-items {
  display: flex;
  flex-direction: column;
}

.cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.quantity-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;

  p {
    padding: 0 1rem;
    margin: 0 1rem;
  }
}

.v-btn {
}

.item-image {
  max-width: 64px;
}
</style>
