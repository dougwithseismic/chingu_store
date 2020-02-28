<template>
  <section class="navigation-bar">
    <div class="container">
      <div class="logo">Chingu</div>
      <div class="nav-content">
        <ul class="nav-item-list">
          <router-link tag="li" to="/">Visit Store</router-link>
          <li>View Cart</li>
          <li>Checkout</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navigation",
  components: {}
};
</script>

<style scoped>
.navigation-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 960px;
}

.logo {
  padding: 1rem;
  font-weight: 900;
}

.nav-item-list {
  display: flex;
  flex-direction: row;
}

.nav-item-list li {
  padding-left: 0;
  padding: 1rem;
  list-style: none;
  cursor: pointer;
}
.nav-item-list li:hover {
  font-weight: 900;
}
</style>

