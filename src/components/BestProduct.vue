<template>
    <div class="best-container">
    <a class="best-product" v-for="product in products" :key="product.id" href="#">
      <img class="product-img" :src="('./img/' + product.gambar)"/>
      <h6>{{ product.nama }}</h6>
      <p>IDR {{ product.harga }}</p>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "BestProduct",

    data() {
        return {
            products: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/best-seller')
        this.products = response.data
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