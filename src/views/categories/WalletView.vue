<template>
    <br><br>
        <img class="jacket-banner" src="../../assets/Banner_jacket.png" />
        <SearchBar />
        <div class="wallet-container">
            <h1>{{ title }}</h1>
            <div class="wallet-product">
                <a class="wallet-item" v-for="wallet in wallets" :key="wallet.id">
                    <img class="wallet-img" :src="'./img/' + wallet.gambar" />
                    <h6>{{ wallet.nama }}</h6>
                    <p>IDR {{ wallet.harga }}</p>
                </a>
            </div>
        </div>
    </template>
    
    <script>
    import SearchBar from '@/components/SearchBar.vue';
    import axios from 'axios';
    
    export default {
        name: "WalletView",
        components: {
            SearchBar
        },
    
        data() {
            return {
                title: "WALLET",
                wallets: []
            }
        },
    
        async mounted() {
            const response = await axios.get('http://localhost:3000/wallet')
            this.wallets = response.data;
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
    
    .wallet-item {
        display: grid;
        text-align: center;
        border: 3px solid rgb(94, 34, 3);
        border-radius: 1em;
    }
    
    a {
        text-decoration: none;
        color: rgb(94, 34, 3);
    }
    
    .wallet-img {
        width: 100%;
        padding: 1em;
    }
    
    @media screen and (max-width: 576px) {
        .wallet-container {
            padding: 1vw 5vw;
        }
    
        .wallet-product {
            margin-top: 2vw;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;
        }
    }
    
    @media screen and (min-width: 576px) and (max-width: 992px) {
        .wallet-container {
            padding: 1vw 12vw;
        }
    
        .wallet-product {
            margin-top: 2vw;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
        }
    }
    
    @media screen and (min-width: 992px) {
        .wallet-container {
            padding: 1vw 12vw;
        }
    
        .wallet-product {
            margin-top: 2vw;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
        }
    }
    </style>