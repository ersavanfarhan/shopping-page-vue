<template>
    <br><br>
        <img class="jacket-banner" src="../../assets/Banner_jacket.png" />
        <SearchBar />
        <div class="belt-container">
            <h1>{{ title }}</h1>
            <div class="belt-product">
                <a class="belt-item" v-for="belt in belts" :key="belt.id">
                    <img class="belt-img" :src="'./img/' + belt.gambar" />
                    <h6>{{ belt.nama }}</h6>
                    <p>IDR {{ belt.harga }}</p>
                </a>
            </div>
        </div>
    </template>
    
    <script>
    import SearchBar from '@/components/SearchBar.vue';
    import axios from 'axios';
    
    export default {
        name: "BeltView",
        components: {
            SearchBar
        },
    
        data() {
            return {
                title: "BELT",
                belts: []
            }
        },
    
        async mounted() {
            const response = await axios.get('http://localhost:3000/belt')
            this.belts = response.data;
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
    
    .belt-item {
        display: grid;
        text-align: center;
        border: 3px solid rgb(94, 34, 3);
        border-radius: 1em;
    }
    
    a {
        text-decoration: none;
        color: rgb(94, 34, 3);
    }
    
    .belt-img {
        width: 100%;
        padding: 1em;
    }
    
    @media screen and (max-width: 576px) {
        .belt-container {
            padding: 1vw 5vw;
        }
    
        .belt-product {
            margin-top: 2vw;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;
        }
    }
    
    @media screen and (min-width: 576px) and (max-width: 992px) {
        .belt-container {
            padding: 1vw 12vw;
        }
    
        .belt-product {
            margin-top: 2vw;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
        }
    }
    
    @media screen and (min-width: 992px) {
        .belt-container {
            padding: 1vw 12vw;
        }
    
        .belt-product {
            margin-top: 2vw;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
        }
    }
    </style>