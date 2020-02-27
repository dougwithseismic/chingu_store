import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id: 1,
        name: 'Desk chair #23',
        description: 'Very comfy desk chair.',
        imagesrc : 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 10,
      },
      {
        id: 2,
        name: 'Gaming chair',
        description: 'Chair for gamers.',
        imagesrc : 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 15,
      },
      {
        id: 3,
        name: 'Kitchen chair',
        description: 'Nice chair for kitchens.',
        imagesrc : 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 50,
      },
      {
        id: 4,
        name: "Kid's chair",
        description: 'Chair for toddlers.',
        imagesrc : 'https://images-na.ssl-images-amazon.com/images/I/71lbhX4s69L._AC_SL1500_.jpg',
        price: 5,
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
