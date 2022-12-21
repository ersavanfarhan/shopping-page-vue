<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="our-store">
                <h6>OUR STORE</h6>
                <ul>
                    <li>Malioboro Street 13, Yogyakarta City 55213</li>
                    <li>Karangmalang Blok B, Caturtunggal, Depok, Sleman 55281</li>
                </ul>
                <div class="social-media">
                    <img class="icon-img" src="../assets/fb-01.png" />
                    <img class="icon-img" src="../assets/ig-01.png" />
                </div>
            </div>
            <div class="menu">
                <h6>INFORMATION</h6>
                <div class="menu-list">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Term' }">Terms and Conditions</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'Career' }">Career</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'Contact' }">Contact Us</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Payment' }">Payment Method</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Partnership' }">Partnership</router-link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterBar",
};
</script>

<style scoped>
footer {
    background-color: rgb(94, 34, 3);
    width: 100%;
    color: white;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
    font-weight: lighter;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: black;
}

@media screen and (max-width: 576px) {
    .footer-container {
        font-size: 0.6rem;
        padding: 5vw 5vw;
        display: grid;
    }

    .social-media {
        margin-top: 10px;
        display: flex;
        gap: 5px;
    }

    .icon-img {
        max-width: 5%;
    }

    .menu {
        text-align: right;
    }

    .menu-list {
        display: flex;
        gap: 30px;
        justify-content: end;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .footer-container {
        font-size: 0.6rem;
        padding: 2vw 5vw;
        display: flex;
        justify-content: space-between;
    }

    .our-store {
        width: 50%;
    }

    .social-media {
        margin-top: 10px;
        display: flex;
        gap: 5px;
    }

    .icon-img {
        max-width: 5%;
    }

    .menu-list {
        display: flex;
        gap: 3em;
    }
}

@media screen and (min-width: 992px) {
    .footer-container {
        font-size: 0.8rem;
        padding: 2vw 12vw;
        display: flex;
        justify-content: space-between;
    }

    .our-store {
        width: 50%;
    }

    .social-media {
        margin-top: 10px;
        display: flex;
        gap: 5px;
    }

    .icon-img {
        max-width: 5%;
    }

    .menu-list {
        display: flex;
        gap: 3em;
    }
}
</style>