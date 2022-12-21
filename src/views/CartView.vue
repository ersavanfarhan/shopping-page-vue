<template>
    <br><br>
    <div class="cart-container">
        <h1><strong>My cart</strong></h1>
        <div class="empty-cart" v-show="empty">
            <img class="empty-img" src="../assets/emptycart.png" />
        </div>

        <div class="cart-item" v-for="cart in carts" :key="cart.id">
            <div class="image-container">
                <img class="cart-img" :src="'./img/' + cart.product.gambar" />
            </div>
            <div class="cart-nav">
                <div class="cart-detail">
                    <h4>{{ cart.product.nama }}</h4>
                    <h6>{{ cart.color }} - {{ cart.size }}</h6>
                    <h6>{{ cart.quantity }} pc(s)</h6>
                    <h6>Total : IDR {{ cart.quantity * cart.product.harga }}</h6>
                </div>
                <form class="cart-button" type="button" v-on:submit.prevent>
                    <div class="pay" type="button">
                        <span id="icon" class="material-symbols-outlined">payments</span>
                    </div>

                    <div class="delete" type="button" @click="deleteCart(cart.id)">
                        <span id="icon" class="material-symbols-outlined">delete</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "cartView",
    data() {
        return {
            empty: false,
            carts: [],
            pembayaran: "OK"
        };
    },

    methods: {
        async getData() {
            const carts = await axios.get("http://localhost:3000/cart/");
            this.carts = carts.data
            if (this.carts.length == 0) {
                this.empty = true
            }
        },

        deleteCart(id) {
            axios.delete("http://localhost:3000/cart/" + id).then(() => {
                this.getData();
            });
        }
    },

    mounted() {
        this.getData();
    }
};
</script>

<style scoped>
h1 {
    margin-bottom: 5vw;
}

h4,
h6 {
    margin: 0;
}

.cart-item {
    display: flex;
    margin-bottom: 1vw;
    border: 2px solid black;
    border-radius: 1rem;
}

.cart-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.cart-detail {
    padding: 1vw 0vw 1vw 0vw;
    display: grid;
    justify-content: space-between;
}

.cart-button {
    height: 100%;
    display: flex;
    color: white;
}

#icon {
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
}

@media screen and (max-width: 576px) {
    .cart-container {
        padding: 5vw;
        min-height: 50vh;
    }

    .empty-cart {
        width: 100%;
        min-height: 60vh;
        text-align: center;
        position: relative;
    }

    .empty-img {
        width: 50%;
        opacity: 20%;
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%, 50%);
    }

    .image-container {
        max-width: 30vw;
        padding: 1vw;
    }

    .cart-img {
        width: 100%;
    }

    .pay {
        height: 100%;
        padding-left: 5vw;
        padding-right: 5vw;
        background-color: rgb(235, 154, 2);
        position: relative;
    }

    .delete {
        height: 100%;
        padding-left: 5vw;
        padding-right: 5vw;
        background-color: rgb(230, 4, 4);
        position: relative;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .cart-container {
        padding: 5vw;
        min-height: 90vh;
    }

    .empty-cart {
        width: 100%;
        min-height: 50vh;
        text-align: center;
        position: relative;
    }

    .empty-img {
        width: 25%;
        opacity: 20%;
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%, 50%);
    }

    .image-container {
        max-width: 15vw;
        padding: 1vw;
    }

    .cart-img {
        width: 100%;
    }

    .pay {
        height: 100%;
        padding-left: 3vw;
        padding-right: 3vw;
        background-color: rgb(235, 154, 2);
        position: relative;
    }

    .delete {
        height: 100%;
        padding-left: 3vw;
        padding-right: 3vw;
        background-color: rgb(230, 4, 4);
        position: relative;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
}

@media screen and (min-width: 992px) {
    .cart-container {
        padding: 2vw 12vw;
        min-height: 80vh;
    }

    .empty-cart {
        width: 100%;
        min-height: 35vh;
        text-align: center;
        position: relative;
    }

    .empty-img {
        width: 25%;
        opacity: 20%;
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%, 50%);
    }

    .image-container {
        max-width: 10vw;
        padding: 1vw;
    }

    .cart-img {
        width: 100%;
    }

    .pay {
        height: 100%;
        padding-left: 2vw;
        padding-right: 2vw;
        background-color: rgb(235, 154, 2);
        position: relative;
    }

    .delete {
        height: 100%;
        padding-left: 2vw;
        padding-right: 2vw;
        background-color: rgb(230, 4, 4);
        position: relative;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
}
</style>
