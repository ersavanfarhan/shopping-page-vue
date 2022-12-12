<template>
    <br><br>
    <h1>Product detail {{ $route.params.id }}</h1>
    <h3>ini {{ jackets.nama }}</h3>
</template>

<script>
import axios from 'axios'

export default {
    name: 'JacketDetail',

    data() {
        return {
            jackets: []
        }
    },

    async mounted() {
        const jacket = await axios.get('http://localhost:3000/jacket/' + this.$route.params.id)
        this.jackets = jacket.data;
    }
}
</script>

<style scoped>

</style>