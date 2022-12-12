<template>
    <br><br>
    <div class="container">
        <h1><strong>Detail Product</strong></h1>
        <div class="product-detail">
            <div class="img-container">
                <img class="detail-img" :src="'./img/' + shoes.gambar" />
            </div>
            <div class="detail-info">
                <h3>{{ shoes.nama }}</h3>
                <h5>IDR {{ shoes.harga }}</h5>
                <p><i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quae eligendi blanditiis perspiciatis
                        optio repellat iusto nobis magnam expedita? Eveniet fuga recusandae et ea voluptates eaque unde
                        cum qui ipsam.</i></p>
                <div class="color-size d-flex">
                    <div class="color">
                        <h6>Color:</h6>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Color 1</option>
                            <option value="2">Color 2</option>
                            <option value="3">Color 3</option>
                        </select>
                    </div>
                    <div class="size">
                        <h6>Size:</h6>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Size 1</option>
                            <option value="2">Size 2</option>
                            <option value="3">Size 3</option>
                        </select>
                    </div>
                </div>
                <div class="button">
                    <button class="btn btn-danger" >BUY NOW<span class="material-symbols-outlined">
                            shopping_cart</span>
                    </button>
                    <button class="btn btn-primary" >ADD TO WISHLIST<span class="material-symbols-outlined">
                            shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios'

export default {
    name: 'ShoesDetail',

    data() {
        return {
            shoes: []
        }
    },

    async mounted() {
        const shoes = await axios.get('http://localhost:3000/shoes/' + this.$route.params.id)
        this.shoes = shoes.data;
    }
}
</script>

<style scoped>
.container {
    padding: 1vw 5vw;
}

h1 {
    border-bottom: 0.5vh solid rgb(94, 34, 3);
}

.product-detail {
    margin-top: 2vw;
    margin-bottom: 2vw;
    display: flex;
    justify-content: space-between;
}

.img-container {
    width: 100vw;
}

.detail-img {
    width: 100%;
}

p {
    text-align: justify;
    margin-top: 2vw;
    margin-bottom: 2vw;
}

.detail-info {
    margin-left: 3vw;
}

.color-size,
.color,
.size {
    gap: 1vw;
    align-self: center;
}

.button {
    display: flex;
    gap: 1vw;
}

.btn-danger, .btn-primary {
    display: flex;
    margin-top: 2vw;
}
</style>