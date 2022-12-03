<template>
  <nav class="navbar navbar-dark bg-dark p-2">
      <div class="btn-group">
        <span class="navbar-toggler-icon" type="button" data-bs-toggle="dropdown"></span>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link class="dropdown-item" :to="{ name: 'Partnership' }">Partnerships</router-link></li>
          <li><router-link class="dropdown-item" :to="{ name: 'About' }">About Us</router-link></li>
        </ul>
      </div>
      <router-link :to="{ name: 'Login' }"><button class="btn btn-success">LOGIN</button></router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}

  .navbar {
    width: 100%;
    position: fixed;
    z-index: 1;
  }
</style>
