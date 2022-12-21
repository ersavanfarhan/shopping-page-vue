<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="btn-group">
      <span class="navbar-toggler-icon" type="button" data-bs-toggle="dropdown"></span>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link class="dropdown-item" :to="{ name: 'Profile' }">Profile</router-link></li>
        <li><router-link class="dropdown-item" :to="{ name: 'About' }">About Us</router-link></li>
        <li type="button" class="dropdown-item" @click="checkLogout">Log Out</li>
      </ul>
    </div>

    <router-link :to="{ name: 'Cart' }" v-show="iconNavbar">
      <span type="button" class="material-symbols-outlined">
        shopping_cart
        <span
          class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
      </span>
    </router-link>
  </nav>
  <router-view />
</template>

<script>
import router from '@/router';

export default {
  name: "NavBar",

  data() {
    return {
      iconNavbar: true
    }
  },

  methods: {
    checkLogout() {
      localStorage.setItem('authenticated', false)
      router.push("/login");
      this.iconNavbar = false
    },

    showIcon: function() {
      const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
      if (!isAuthenticated) {
        this.iconNavbar = false
      } 
    }
  },

  mounted() {
        this.showIcon();
    }
};
</script>

<style scoped>
.navbar {
  padding: 1rem;
  width: 100%;
  position: fixed;
  z-index: 1;
}

.btn-group {
  display: flex;
  gap: 0.5vw;
}

.material-symbols-outlined {
  position: relative;
  color: white;
  vertical-align: middle;
}
</style>
