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
        slug: "kids-chair-for-toddlers",
        description: 'Chair for toddlers.',
        imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 5,
        sku: '004ABC'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
