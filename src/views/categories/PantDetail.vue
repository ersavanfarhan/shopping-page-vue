<template>
    <br><br>
    <div class="container-detail">
        <h1><strong>Detail Product</strong></h1>
        <div class="product-detail">
            <div class="img-container">
                <img class="detail-img" :src="'./img/' + pants.gambar" />
            </div>
            <form class="detail-form" v-on:submit.prevent>
                <h3>{{ pants.nama }}</h3>
                <h5>IDR {{ pants.harga }}</h5>
                <p><i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quae eligendi blanditiis perspiciatis
                        optio repellat iusto nobis magnam expedita? Eveniet fuga recusandae et ea voluptates eaque unde
                        cum qui ipsam.</i></p>
                <div class="color-size">
                    <div class="color">
                        <h6>Color:</h6>
                        <select class="form-select" v-model="pesanan.color">
                            <option>Red</option>
                            <option>Black</option>
                            <option>Blue</option>
                        </select>
                    </div>
                    <div class="size">
                        <h6>Size:</h6>
                        <select class="form-select" v-model="pesanan.size">
                            <option>30</option>
                            <option>31</option>
                            <option>32</option>
                        </select>
                    </div>
                </div>

                <div class="quantity">
                    <h6>Quantity:</h6>
                    <input type="number" min="1" v-model="pesanan.quantity">
                </div>

                <button class="btn btn-primary" @click="addChart">ADD TO CHART<span class="material-symbols-outlined">
                        shopping_cart</span>
                </button>
            </form>
        </div>
    </div>


</template>

<script>
import axios from 'axios'

export default {
    name: 'PantDetail',

    data() {
        return {
            pants: [],
            pesanan: {}
        }
    },

    methods: {
        addChart() {
            if (this.pesanan.quantity) {
                this.pesanan.product = this.pants
                axios.post('http://localhost:3000/cart', this.pesanan)
                    .then(() => {
                        confirm("Your Product Has Been Added");
                    })
                    .catch((error) => console.log(error))
            }
            else {
                alert("Please fill the quantity")
            }
        }
    },

    async mounted() {
        const pant = await axios.get('http://localhost:3000/pant/' + this.$route.params.id)
        this.pants = pant.data;
    }
}
</script>

<style scoped>
h1 {
    border-bottom: 0.5vh solid rgb(94, 34, 3);
}

.img-container {
    width: 100%;
}

.detail-img {
    width: 100%;
    padding: 2vw;
}

.color-size {
    display: flex;
    gap: 5vw;
    align-self: center;
}

.btn-primary {
    width: 100%;
    text-align: center;
}

.material-symbols-outlined {
    vertical-align: middle;
}

@media screen and (max-width: 576px) {
    .container-detail {
        padding: 5vw;
    }

    .product-detail {
        width: 100%;
        margin-top: 2vw;
        margin-bottom: 2vw;
        display: grid;
        justify-content: space-between;
    }

    p {
        text-align: justify;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }

    .color,
    .size {
        display: flex;
        gap: 3vw;
    }

    .quantity {
        margin: 5vw 0vw 5vw 0vw;
    }
}

@media screen and (min-width: 576px) {
    .container-detail {
        padding: 5vw;
    }

    .product-detail {
        width: 100%;
        margin-top: 2vw;
        margin-bottom: 2vw;
        display: flex;
        justify-content: space-between;
    }

    .detail-form {
        width: 100%;
        margin-left: 1vw;
    }

    p {
        margin: 2vw 0vw 2vw 0vw;
        text-align: justify;
    }

    .color,
    .size {
        display: flex;
        gap: 1vw;
    }

    .quantity {
        margin: 2vw 0vw 2vw 0vw;
    }
}

@media screen and (min-width: 992px) {
    .container-detail {
        padding: 2vw 12vw;
    }
}
</style>