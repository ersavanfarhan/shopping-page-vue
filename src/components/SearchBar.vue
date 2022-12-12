<template>
    <div class="search-container">
        <div class="search-list">
            <form class="search-tool" :action="('http://localhost:8080/?#/' + keyword)">
                <input class="form-control me-2" placeholder="Find product here" v-model="keyword">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="product-list-sm">
                <li>
                    <router-link :to="{ name: 'Shoes' }">Shoes</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Jacket' }">Jacket</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Sandal' }">Sandal</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Hat' }">Hat</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Shirt' }">Shirt</router-link>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ name: 'Pant' }">Pant</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Belt' }">Belt</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Glove' }">Glove</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Mountaineering' }">Mountaineering</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Wallet' }">Wallet</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Daypack' }">Daypack</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="product-list-md">
                <li>
                    <router-link :to="{ name: 'Shoes' }">Shoes</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Jacket' }">Jacket</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Sandal' }">Sandal</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Hat' }">Hat</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Shirt' }">Shirt</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Pant' }">Pant</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Belt' }">Belt</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Glove' }">Glove</router-link>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{ name: 'Mountaineering' }">Mountaineering</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Wallet' }">Wallet</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Daypack' }">Daypack</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="product-list-lg">
                <li>
                    <router-link :to="{ name: 'Shoes' }">Shoes</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Jacket' }">Jacket</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Sandal' }">Sandal</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Hat' }">Hat</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Shirt' }">Shirt</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Pant' }">Pant</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Belt' }">Belt</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Glove' }">Glove</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Mountaineering' }">Mountaineering</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Wallet' }">Wallet</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Daypack' }">Daypack</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBar",

    data() {
        return {
            keyword: ''
        }
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
}

li:hover {
    box-shadow: inset 0 -3px 0 rgb(94, 34, 3);
}

a {
    text-decoration: none;
    font-size: medium;
    color: black;
}

@media screen and (max-width: 576px) {
    .search-container {
        padding: 2vw 5vw;
    }

    .search-tool {
        display: flex;
        justify-content: space-between;
    }

    .product-list-sm {
        margin-top: 15px;
        margin-bottom: 0px;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    .product-list-md,
    .product-list-lg {
        display: none;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .search-container {
        padding: 2vw 5vw;
    }

    .search-tool {
        display: flex;
        justify-content: space-between;
    }

    .product-list-md {
        margin-top: 15px;
        margin-bottom: 0px;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    .product-list-sm,
    .product-list-lg {
        display: none;
    }
}

@media screen and (min-width: 992px) {
    .search-container {
        padding: 1vw 12vw;
        position: relative;
    }

    .search-tool {
        display: flex;
        justify-content: space-between;
    }

    .product-list-lg {
        margin-top: 15px;
        margin-bottom: 0px;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    .product-list-sm,
    .product-list-md {
        display: none;
    }
}
</style>