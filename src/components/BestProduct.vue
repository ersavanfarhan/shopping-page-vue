<template>
  <div class="best-container">
    <router-link class="best-product" v-for="best in bests" :key="best.id" :to="('/' + best.categories + '/')">
      <img class="best-img" :src="('./img/' + best.gambar)" />
      <h6>{{ best.nama }}</h6>
      <p>IDR {{ best.harga }}</p>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BestProduct",

  data() {
    return {
      bests: []
    }
  },

  async mounted() {
    const response = await axios.get('http://localhost:3000/best-seller')
    this.bests = response.data
    // console.log("berhasil", response)
  }
}
</script>

<style scoped>
.best-product {
  display: grid;
  text-align: center;
  border: 3px solid rgb(94, 34, 3);
  border-radius: 1em;
  background-color: white;
  transition: transform .3s;
}

.best-product:hover {
  transform: scale(1.2);
}

a {
  text-decoration: none;
  color: rgb(94, 34, 3);
}

.best-img {
  width: 100%;
  padding: 1em;
}

@media screen and (max-width: 576px) {
  .best-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .best-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
}

@media screen and (min-width: 992px) {
  .best-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
}
</style>