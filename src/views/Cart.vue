<template lang="html">
  <div class="cart">
    <div v-if="cart.length>0" class="cart-items">

      <div v-for="item in productsInCart" :key="item.id"  class="cart-item">
      <!-- { "id": 2, "name": "Gaming chair", "slug": "gaming-chair-2", "description": "Chair for gamers.", "imagesrc": "https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg", "price": 15, "sku": "002ABC", "quantity": 1  -->
     <img class="item-image" :src="item.imagesrc"/>
      <h3>{{item.name}}</h3>
     <div class="quantity-controls">
      <v-btn
        color="kitten"
        @click="decreaseItemQuantity(item.id)"
        :small="$vuetify.breakpoint.xsOnly"
      >
        <v-icon>mdi-minus</v-icon>

      </v-btn>

        <p>{{item.quantity}}</p>

      <v-btn
        @click="increaseItemQuantity(item.id)"
        class="green"
        :small="$vuetify.breakpoint.xsOnly"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
     </div>

     <div class="item-price">
       ${{item.price*item.quantity}}
     </div>

      </div>

    <v-row>
      <v-col class="text-right">
        <span class="total">TOTAL: ${{cartTotal}}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-right">
        <v-btn class="warning">CHECKOUT</v-btn>
      </v-col>
    </v-row>

  </div>
  <!-- end of cart -->


  <div class="text-center" v-if="cart.length==0">
    <h3>No items in cart yet. Please go to store to add some nice chairs.</h3>
    <router-link tag="div" :to="{name: 'Home'}">
      <v-btn class="primary" :class="{'mt-5': $vuetify.breakpoint.smAndUp}">To products page</v-btn>
    </router-link>
  </div>


  </div>
</template>

<script>
export default {
  name: "Cart",
  data: () => {
    return {
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
    },
    cartTotal(){
      let sum = 0;
      for (var i = 0; i < this.productsInCart.length; i++) {
        sum += this.productsInCart[i].price*this.productsInCart[i].quantity
      }
      return sum;
    },
    cart(){
      return this.$store.state.cart;
    }
  },
  methods:{
    decreaseItemQuantity(id){
      this.$store.dispatch('removeItemFromCart', id)

    },
    increaseItemQuantity(id){
      this.$store.dispatch('addToCart', id)

    },
  },
  mounted() {

  },
  watch:{

  }
};
</script>

<style lang="scss" scoped>
h3{
  @media(max-width:600px){
    font-size: 13px;
  }
}
.cart-items {
  display: flex;
  flex-direction: column;
}

.cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 20px 10px;
  border: 1px solid grey;
  border-radius: 10px;
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

  @media(max-width:600px){
    flex-direction: column;
  }

}

.item-image {
  max-width: 64px;

  @media(max-width:600px){
    max-width: 35px;
  }
}

.total{
  border-top: 2px solid black;
  font-size: 30px;
  width: 100%;
  display: inline-block;
  padding: 20px 50px;
}
</style>
