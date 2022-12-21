<template>
    <br><br>
    <img class="shoes-banner" src="../../assets/Banner_shoes.png" />
    <SearchBar />
    <div class="shoes-container">
        <h1>{{ title }}</h1>
        <div class="shoes-product">
            <router-link :to="('/shoes/' + shoe.id)" class="shoes-item" v-for="shoe in shoes" :key="shoe.id">
                <img class="shoes-img" :src="'./img/' + shoe.gambar" />
                <h6>{{ shoe.nama }}</h6>
                <h6>IDR {{ shoe.harga }}</h6>
            </router-link>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "ShoesView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "SHOES",
            shoes: []
        };
    },
    async mounted() {
        const response = await axios.get("http://localhost:3000/shoes");
        this.shoes = response.data;
        // console.log("berhasil", response)
    }
}
</script>

<style scoped>
.shoes-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.shoes-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.shoes-item:hover {
    transform: scale(1.2);
}

a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.shoes-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .shoes-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .shoes-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .shoes-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .shoes-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .shoes-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .shoes-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>