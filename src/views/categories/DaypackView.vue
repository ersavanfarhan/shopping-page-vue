<template>
    <br><br>
    <img class="daypack-banner" src="../../assets/Banner_daypack.png" />
    <SearchBar />
    <div class="daypack-container">
        <h1>{{ title }}</h1>
        <div class="daypack-product">
            <router-link :to="('/daypack/' + daypack.id)" class="daypack-item" v-for="daypack in daypacks" :key="daypack.id">
                <img class="daypack-img" :src="'./img/' + daypack.gambar" />
                <h6>{{ daypack.nama }}</h6>
                <p>IDR {{ daypack.harga }}</p>
            </router-link>
        </div>
    </div>
</template>
    
<script>
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: "DaypackView",
    components: {
        SearchBar
    },

    data() {
        return {
            title: "DAYPACK",
            daypacks: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/daypack')
        this.daypacks = response.data;
    }
}
</script>
    
<style scoped>
.daypack-banner {
    width: 100%;
}

h1 {
    padding: 0.8rem 0rem;
    border-bottom: 1vh solid rgb(94, 34, 3);
    color: rgb(94, 34, 3);
}

.daypack-item {
    padding: 10px;
    display: grid;
    text-align: center;
    border: 3px solid rgb(94, 34, 3);
    border-radius: 1em;
    background-color: white;
    transition: transform .3s;
}

.daypack-item:hover {
    transform: scale(1.2);
}
a {
    text-decoration: none;
    color: rgb(94, 34, 3);
}

.daypack-img {
    width: 100%;
    padding: 1em;
}

@media screen and (max-width: 576px) {
    .daypack-container {
        padding: 1vw 5vw;
        margin-bottom: 15vw;
    }

    .daypack-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .daypack-container {
        padding: 1vw 12vw;
        margin-bottom: 10vw;
    }

    .daypack-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 992px) {
    .daypack-container {
        padding: 1vw 12vw;
        margin-bottom: 5vw;
    }

    .daypack-product {
        margin-top: 2vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
}
</style>