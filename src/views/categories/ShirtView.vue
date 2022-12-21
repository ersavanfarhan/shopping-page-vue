<template>
    <br><br>
    <img class="shirt-banner" src="../../assets/Banner_shirt.png" />
    <SearchBar />
    <div class="shirt-container">
        <h1>{{ title }}</h1>
        <div class="shirt-product">
            <router-link :to="('/shirt/' + shirt.id)" class="shirt-item" v-for="shirt in shirts" :key="shirt.id">
                <img class="shirt-img" :src="'./img/' + shirt.gambar" />
                <h6>{{ shirt.nama }}</h6>
                <h6>IDR {{ shirt.harga }}</h6>
            </router-link>
        </div>
    </div>
</template>
    
<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "ShirtView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "SHIRT",
            shirts: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/shirt')
        this.shirts = response.data;
    }
}
</script>
    
<style scoped>
.shirt-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.shirt-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.shirt-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.shirt-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .shirt-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .shirt-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .shirt-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .shirt-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .shirt-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .shirt-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>