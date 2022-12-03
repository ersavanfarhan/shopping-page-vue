<template>
    <div class="search-container">
        <div class="search-list">
            <div class="search-tool">
                <input class="form-control me-2" placeholder="Find product here">
                <button class="btn btn-outline-success">Search</button>
            </div>
            <ul class="product-list-sm">
                <li>
                    <router-link :to="{ name: 'Shoes' }">Shoes</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Jacket' }">Jacket</router-link>
                </li>
                <li><a href="/">Sandal</a></li>
                <li><a href="/">Hat</a></li>
                <li><a href="/">Shirt</a></li>
                <li><a href="/">Pant</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Belt</a></li>
                        <li><a class="dropdown-item" href="#">Gloves</a></li>
                        <li><a class="dropdown-item" href="#">Mountaineering</a></li>
                        <li><a class="dropdown-item" href="#">Wallet</a></li>
                        <li><a class="dropdown-item" href="#">Badge</a></li>
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
                <li><a href="/">Sandal</a></li>
                <li><a href="/">Hat</a></li>
                <li><a href="/">Shirt</a></li>
                <li><a href="/">Pant</a></li>
                <li><a href="/">Belt</a></li>
                <li><a href="/">Gloves</a></li>
                <li><a href="/">Mountaineering</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Wallet</a></li>
                        <li><a class="dropdown-item" href="#">Badge</a></li>
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
                <li><a href="/">Sandal</a></li>
                <li><a href="/">Hat</a></li>
                <li><a href="/">Shirt</a></li>
                <li><a href="/">Pant</a></li>
                <li><a href="/">Belt</a></li>
                <li><a href="/">Gloves</a></li>
                <li><a href="/">Mountaineering</a></li>
                <li><a href="/">Wallet</a></li>
                <li><a href="/">Badge</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBar"
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