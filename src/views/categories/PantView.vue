<template>
    <br><br>
    <img class="pant-banner" src="../../assets/Banner_pant.png" />
    <SearchBar />
    <div class="pant-container">
        <h1>{{ title }}</h1>
        <div class="pant-product">
            <router-link :to="('/pant/' + pant.id)" class="pant-item" v-for="pant in pants" :key="pant.id">
                <img class="pant-img" :src="'./img/' + pant.gambar" />
                <h6>{{ pant.nama }}</h6>
                <h6>IDR {{ pant.harga }}</h6>
            </router-link>
        </div>
    </div>
</template>
    
<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "PantView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "PANT",
            pants: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/pant')
        this.pants = response.data;
    }
}
</script>
    
<style scoped>
.pant-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.pant-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.pant-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.pant-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .pant-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .pant-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .pant-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .pant-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .pant-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .pant-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>