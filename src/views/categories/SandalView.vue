<template>
<br><br>
    <img class="sandal-banner" src="../../assets/Banner_sandal.png" />
    <SearchBar />
    <div class="sandal-container">
        <h1>{{ title }}</h1>
        <div class="sandal-product">
            <router-link :to="('/sandal/' + sandal.id)" class="sandal-item" v-for="sandal in sandals" :key="sandal.id">
                <img class="sandal-img" :src="'./img/' + sandal.gambar" />
                <h6>{{ sandal.nama }}</h6>
                <h6>IDR {{ sandal.harga }}</h6>
            </router-link>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "SandalView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "SANDAL",
            sandals: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/sandal')
        this.sandals = response.data;
    }
}
</script>

<style scoped>
.sandal-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.sandal-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.sandal-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.sandal-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .sandal-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .sandal-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .sandal-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .sandal-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .sandal-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .sandal-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>