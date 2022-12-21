<template>
    <br><br>
    <img class="jacket-banner" src="../../assets/Banner_jacket.png" />
    <SearchBar />
    <div class="jacket-container">
        <h1>{{ title }}</h1>
        <div class="jacket-product">
            <router-link :to="('/jacket/' + jacket.id)" class="jacket-item" v-for="jacket in jackets" :key="jacket.id">
                <img class="jacket-img" :src="'./img/' + jacket.gambar" />
                <h6>{{ jacket.nama }}</h6>
                <h6>IDR {{ jacket.harga }}</h6>
            </router-link>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "JacketView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "JACKET",
            jackets: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/jacket')
        this.jackets = response.data;
        // console.log("berhasil", response)
    }
}
</script>

<style scoped>
.jacket-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.jacket-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.jacket-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.jacket-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .jacket-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .jacket-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .jacket-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .jacket-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .jacket-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .jacket-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>