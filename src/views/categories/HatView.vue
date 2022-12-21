<template>
    <br><br>
    <img class="hat-banner" src="../../assets/Banner_hat.png" />
    <SearchBar />
    <div class="hat-container">
        <h1>{{ title }}</h1>
        <div class="hat-product">
            <router-link :to="('/hat/' + hat.id)" class="hat-item" v-for="hat in hats" :key="hat.id">
                <img class="hat-img" :src="'./img/' + hat.gambar" />
                <h6>{{ hat.nama }}</h6>
                <h6>IDR {{ hat.harga }}</h6>
            </router-link>
        </div>
    </div>
</template>
    
<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "HatView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "HAT",
            hats: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/hat')
        this.hats = response.data;
    }
}
</script>
    
<style scoped>
.hat-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.hat-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.hat-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.hat-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .hat-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .hat-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .hat-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .hat-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .hat-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .hat-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>