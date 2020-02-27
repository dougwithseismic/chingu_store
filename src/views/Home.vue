<template>
  <div class="home">
<v-card  max-width="350px">
<button @click="toggleColor" >Button!</button>
<h3>Product Title</h3>
<p :class="{ cardIsActive: active}">{{sayHello}} is a product description {{$store.state.counter}} for our simple store product!</p>

<v-img src=""></v-img>

</v-card>

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
    sayHello() {
      return this.$store.state.counter + 1
    }
  }
}
</script>

<style lang="scss">

  .cardIsActive { background-color: red}

 </style>
