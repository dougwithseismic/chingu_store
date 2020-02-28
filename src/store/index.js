import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Desk chair #23',
        slug: 'desk-chair-23',
        description: 'Very comfy desk chair.',
        imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 10,
        sku: '001ABC'
      },
      {
        id: 2,
        name: 'Gaming chair',
        slug: 'gaming-chair-2',
        description: 'Chair for gamers.',
        imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 15,
        sku: '002ABC'
      },
      {
        id: 3,
        name: 'Kitchen chair',
        slug: 'kitchen-chair-prague-finest',
        description: 'Nice chair for kitchens.',
        imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 50,
        sku: '003ABC'
      },
      {
        id: 4,
        name: "Kid's chair",
        slug: 'kids-chair-for-toddlers',
        description: 'Chair for toddlers.',
        imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 5,
        sku: '004ABC'
      }
    ],
    cart: [
      {
        productid: 2,
        quantity: 1
      },
      {
        productid: 1,
        quantity: 2
      }
    ]
  },
  mutations: {
    addToCart(state, id) {
      //check if product is already in cart
      let productInCartList = state.cart.filter((object) => object.productid == id)
      if (productInCartList.length === 1) {
        productInCartList[0].quantity += 1
      } else {
        state.cart.push({
          productid: id,
          quantity: 1
        })
      }
    },
    resetCart(state) {
      state.cart = []
    },
    removeItemFromCart(state, id) {
      // Find objects in cart with productid
      let productInCart = state.cart.filter((object) => object.productid == id)[0]

      // If we find find it, decrease quantity by one, or remove completely if there's only quanity === 1
      if (productInCart.quantity === 1) {
        console.log('decrease quantity', productInCart)
        state.cart = state.cart.filter((o) => o.productid !== productInCart.productid)
      } else {
        productInCart.quantity = productInCart.quantity - 1
      }
    }
  },
  actions: {
    addToCart({ commit }, id) {
      commit('addToCart', id)
    },
    resetCart({ commit }) {
      commit('resetCart')
    },
    removeItemFromCart({ commit }, id) {
      // Decreases the quanity of a product by 1.
      commit('removeItemFromCart', id)
    }
  },
  getters: {
    getProductFromSlug: (state) => (slug) => {
      return state.products.filter((p) => p.slug === slug)[0]
    },
    getProductFromId: (state) => (id) => {
      return state.products.filter((product) => product.id === id)[0]
    }
  }
})
