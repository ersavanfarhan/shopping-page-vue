<template>
    <!-- Banner Partnership -->
    <div class="banner">
        <div>
            <img class="banner-img-sm" src="../assets/partner-banner.png" />
        </div>
        <div class="intro">
            <br><br><br>
            <h1 style="font-weight: bolder;">JOIN WITH US</h1>
            <p>There are more than 50 companies across the world trust our store to provide
                a high quality and safety asset for their outdoor activities. Together, let us
                support Indonesian local enterprises with the spirit of our government to build a better economy and
                tourism sector.
            </p>
        </div>
        <div class="banner-img-lg">
            <img src="../assets/partner-banner.png" />
        </div>
    </div>

    <!-- Terstimoni -->
    <div class="testimoni">
        <h3><strong>What Did They Say?</strong></h3>
        <div class="testimoni-item">
            <div>
                <img class="testi-img-left" src="../assets/testi1.png" />
            </div>
            <div class="quotes">
                <h5><strong>
                    "It is a great opportunity for me learn a lot about
                    mountaineering. It is important
                    to concert safety in any time of my activities after all."
                </strong></h5>
                <p>Ersavan - Product Manager of BUMN</p>
            </div>
        </div>
        <div class="testimoni-item">
            <div class="quotes">
                <h5><strong>
                    "It has been 5 years since I joined with outdoor store, and now
                    we are planning to expand our coorporation domestically either a cross the world. If you have
                    spirit of young enterpreneurship, I suggest you to join us immediately."
                </strong></h5>
                <p>Farhan - CEO of Steel Company</p>
            </div>
            <div>
                <img class="testi-img-right" src="../assets/testi2.png" />
            </div>
        </div>
        <div class="testimoni-item">
            <div>
                <img class="testi-img-left" src="../assets/testi3.png" />
            </div>
            <div class="quotes">
                <h5><strong>
                    "It is a great opportunity for me learn a lot about
                    mountaineering. It is important
                    to concert safety in any time of my activities after all."
                </strong></h5>
                <p>Ersavan - Product Manager of BUMN</p>
            </div>
        </div>
    </div>


    <div class="our-partner">
        <h3 style="font-weight: bold; text-align: center;">Our Partner</h3>
        <div class="logo-row">
            <div class="logo-item">
                <img class="logo-img" width="80%" src="../assets/Logo-BUMN.png" />
            </div>
            <div class="logo-item">
                <img class="logo-img" width="40%" src="../assets/logo-g20.png" />
            </div>
            <div class="logo-item">
                <img class="logo-img" src="../assets/pupr.png" />
            </div>
            <div class="logo-item">
                <img class="logo-img" width="50%" src="../assets/Logo-ugm.png" />
            </div>
            <div class="logo-item">
                <img class="logo-img" width="80%" src="../assets/wonderful-indo.png" />
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PartnershipView"
}
</script>

<style scoped>
* {
    text-align: justify;
}

@media screen and (max-width: 992px) {
    .banner-img-sm {
        width: 100%;
        opacity: 30%;
        position: absolute;
    }

    .banner-img-lg {
        display: none;
    }

    .intro {
        padding: 2vw 5vw;
    }

    .testimoni {
        padding: 0vw 5vw;
    }

    .testimoni-item {
        padding: 2vw 5vw;
        display: flex;
        font-size: 80%;
    }

    .testi-img-left {
        max-width: 20vw;
        margin-right: 10px;
    }

    .testi-img-right {
        max-width: 20vw;
        margin-left: 10px;
    }

    .our-partner {
        padding: 2vw 12vw;
    }

    .logo-row {
        display: flex;
        gap: 25px;
    }

    .logo-item {
        text-align: center;
        align-self: center;
    }

    .logo-img {
        max-width: 100%;
    }
}

@media screen and (min-width: 992px) {
    .banner {
        display: flex;
        justify-content: space-between;
    }
    .banner-img-sm {
        display: none;
    }

    .banner-img-lg {
        width: 100%;
    }

    .intro {
        padding: 2vw 0vw 0vw 12vw;
    }

    .testimoni {
        padding: 0vw 12vw;
    }

    .testimoni-item {
        padding: 2vw 5vw;
        display: flex;
        font-size: 100%;
    }

    .testi-img-left {
        max-width: 10vw;
        margin-right: 10px;
    }

    .testi-img-right {
        max-width: 10vw;
        margin-left: 10px;
    }

    .our-partner {
        padding: 2vw 12vw;
    }

    .logo-row {
        display: flex;
        gap: 25px;
    }

    .logo-item {
        text-align: center;
        align-self: center;
    }

    .logo-img {
        max-width: 100%;
    }
}
</style>