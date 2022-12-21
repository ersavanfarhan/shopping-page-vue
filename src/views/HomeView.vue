<template>
  <br><br>
  <div class="home-container">

    <!-- Banner Promo -->
    <div class="banner">
      <router-link class="slider" v-for="(slide, index) in slides" :key="index" :to="{ name: slide.link }" >
        <img class="slide" :src="slide.image" v-show="slide.status" @load="startBanner" />
      </router-link>
      <div class="banner-btn">
        <span class="material-symbols-outlined" type="button" @click="btnPrev">arrow_back_ios</span>
        <span class="material-symbols-outlined" type="button" @click="btnNext">arrow_forward_ios</span>
      </div>
    </div>

    <!-- Search Menu -->
    <div class="search-menu">
      <SearchBar />
    </div>

    <!-- Motto https://www.youtube.com/watch?v=zJeOXq20AjY -->
    <div class="motto">
      <img class="motto-img" src="../assets/Motto.png" />
      <a href="https://www.youtube.com/watch?v=zJeOXq20AjY" target="_blank"><button class="btn btn-success">Watch
          Videos</button></a>
    </div>

    <!-- New Arrival -->
    <div class="new-arrival">
      <h1><strong>New Arrival</strong></h1>
      <div class="card-item d-flex">
        <NewProduct />
      </div>
    </div>

    <!-- Voucher -->
    <div class="voucher">
      <a href="#"><img class="voucher-img" src="../assets/voucher1.png" /></a>
      <a href="#"><img class="voucher-img" src="../assets/membershipcard.png" /></a>
    </div>

    <!-- Best Seller -->
    <div class="best-seller">
      <h1><strong>Best Seller</strong></h1>
      <div class="card-item d-flex">
        <BestProduct />
      </div>
    </div>

    <!-- Articles -->
    <div class="articles">
      <h1><strong>Articles</strong></h1>
      <div class="article-item">
        <ArticleCard />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import NewProduct from '../components/NewProduct.vue';
import BestProduct from '../components/BestProduct.vue';
import ArticleCard from '../components/ArticleCard.vue';

export default {
  name: "HomeView",
  components: {
    NewProduct,
    BestProduct,
    ArticleCard,
    SearchBar
  },

  data() {
    return {
      count: 0,
      slides: [
        {
          image: require("../assets/Banner1.png"),
          link: "Daypack",          
          status: true,
        },
        {
          image: require("../assets/Banner2.png"),
          link: "Mountaineering",
          status: true,
        },
        {
          image: require("../assets/Banner3.png"),
          link: "Career",
          status: true,
        },
      ],
    };
  },

  methods: {
    startBanner() {
      const images = document.getElementsByClassName("slide");
      for (let i = 0; i < images.length; i++) {
        images[1].style.display = "none";
        images[2].style.display = "none";
      }
    },

    btnNext() {
      const images = document.getElementsByClassName("slide");
      this.count += 1;
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
      }

      if (this.count > images.length - 1) {
        this.count = 0;
      } if (images[this.count]) {
        images[this.count].style.display = "block"
      }
    },

    btnPrev() {
      const images = document.getElementsByClassName("slide");
      this.count -= 1;
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
      }

      if (this.count < 0) {
        this.count = images.length - 1;
      } if (images[this.count]) {
        images[this.count].style.display = "block"
      }
    },

    
  }
}
</script>

<style scoped>
.banner {
  position: relative;
}

.slide {
  width: 100%;
}

.banner-btn {
  width: 100%;
  padding: 0vw 2vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
}

@media screen and (max-width: 576px) {
  .motto {
    position: relative;
    padding: 2vw 5vw;
  }

  .motto-img {
    width: 100%;
  }

  .motto .btn {
    position: absolute;
    bottom: 10%;
    right: 7%;
    font-size: 60%;
  }

  .new-arrival {
    padding: 2vw 5vw;
    color: rgb(94, 34, 3);
  }

  .voucher {
    width: 100%;
    padding: 2vw 5vw;
    display: flex;
    gap: 10px;
  }

  .voucher-img {
    width: 100%;
  }

  .best-seller {
    padding: 2vw 5vw;
    color: rgb(94, 34, 3);
  }

  .articles {
    padding: 2vw 5vw 5vw 5vw;
    color: rgb(94, 34, 3);
    text-align: justify;
  }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .motto {
    position: relative;
    padding: 2vw 5vw;
  }

  .motto-img {
    width: 100%;
  }

  .motto .btn {
    position: absolute;
    bottom: 10%;
    right: 7%;
    font-size: 60%;
  }

  .new-arrival {
    padding: 2vw 5vw;
    color: rgb(94, 34, 3);
  }

  .voucher {
    width: 100%;
    padding: 2vw 5vw;
    display: flex;
    gap: 10px;
  }

  .voucher-img {
    width: 100%;
  }

  .best-seller {
    padding: 2vw 5vw;
    color: rgb(94, 34, 3);
  }

  .articles {
    padding: 2vw 5vw 5vw 5vw;
    color: rgb(94, 34, 3);
    text-align: justify;
  }
}

@media screen and (min-width: 992px) {
  .motto {
    position: relative;
    padding: 2vw 12vw;
  }

  .motto-img {
    width: 100%;
  }

  .motto .btn {
    position: absolute;
    bottom: 10%;
    right: 14%;
    font-size: 100%;
  }

  .new-arrival {
    padding: 2vw 12vw;
    color: rgb(94, 34, 3);
  }


  .voucher {
    width: 100%;
    padding: 2vw 12vw;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .voucher-img {
    width: 100%;
  }

  .best-seller {
    padding: 2vw 12vw;
    color: rgb(94, 34, 3);
  }

  .articles {
    padding: 2vw 12vw 5vw 12vw;
    color: rgb(94, 34, 3);
    text-align: justify;
  }
}
</style>
