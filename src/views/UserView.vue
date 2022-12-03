<template>
  <div>
    <!-- <img class="slide" src="../assets/Banner.png" v-show="status" />
    <img class="slide" src="../assets/Banner2.png" v-show="status"/>
    <img class="slide" src="../assets/Banner3.png" v-show="status"/>
    <img class="hidden" src="../assets/Banner1.png" /> -->

    <div class="banner">
      <div class="slider" v-for="(slide, index) in slides" :key="index.alt">
        <img class="slide" :src="slide.image" v-show="slide.status" @load="startBanner" />
      </div>
    </div>

    <h2>{{ count }}</h2>
    <button @click="btnPrev">prev</button>
    <button @click="btnNext">Nex</button>
  </div>

  <!-- <div class="slider" v-for="(slide, index) in slides" :key="index.alt">
    <img class="slide" :src="slide.image" v-show="status" />
  </div> -->
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      pesan: "hello",
      count: 0,
      // status: true,
      slides: [
        {
          image: require("../assets/Banner1.png"),
          alt: "Banner1",
          status: true,
        },
        {
          image: require("../assets/Banner2.png"),
          alt: "Banner2",
          status: true,
        },
        {
          image: require("../assets/Banner3.png"),
          alt: "Banner3",
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
        console.log(images[this.count]);
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
        console.log(images[this.count]);
      }
    },
  },

  computed: {},
};
</script>

<style scoped>
.slide {
  width: 100%;
}
.hidden {
  width: 100%;
  opacity: 0;
}

</style>
