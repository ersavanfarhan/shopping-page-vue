<template>
  <div class="arrival-container">
    <a class="new-product" v-for="product in products" :key="product.id" :href="product.link">
      <img class="product-img" :src="'./img/' + product.gambar" />
      <h6>{{ product.nama }}</h6>
      <p>IDR {{ product.harga }}</p>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "NewProduct",

  data() {
    return {
      products: []
    }
  },

  async mounted() {
    const response = await axios.get('http://localhost:3000/new-arrival')
    this.products = response.data
    // console.log("berhasil", response)
  }
}
</script>

<style scoped>
.arrival-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }

  .new-product {
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
  }

  a {
    text-decoration: none;
    color: rgb(94, 34, 3);
  }

  .product-img {
    width: 100%;
    padding: 1em;
  }

@media screen and (max-width: 576px) {
  .arrival-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .arrival-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
}

@media screen and (min-width: 992px) {
  .arrival-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
}
</style>