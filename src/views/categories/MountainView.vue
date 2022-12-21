<template>
    <br><br>
    <img class="jacket-banner" src="../../assets/Banner_jacket.png" />
    <SearchBar />
    <div class="mountaineering-container">
        <h1>{{ title }}</h1>
        <div class="mountaineering-product">
            <router-link :to="('/mountaineering/' + mountaineering.id)" class="mountaineering-item"
                v-for="mountaineering in mountaineerings" :key="mountaineering.id">
                <img class="mountaineering-img" :src="'./img/' + mountaineering.gambar" />
                <h6>{{ mountaineering.nama }}</h6>
                <p>IDR {{ mountaineering.harga }}</p>
            </router-link>
        </div>
    </div>
</template>
    
<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "MountainView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "Mountaineering",
            mountaineerings: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/mountaineering')
        this.mountaineerings = response.data;
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

.mountaineering-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.mountaineering-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.mountaineering-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .mountaineering-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .mountaineering-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .mountaineering-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .mountaineering-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .mountaineering-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .mountaineering-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>