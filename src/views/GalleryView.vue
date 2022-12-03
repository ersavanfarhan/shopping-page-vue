<template>
  <br><br><br>
  <div class="container">
    <h1><strong>Gallery</strong></h1>
    <p>Every product we sell makes every moment worth satisfiying that you never regret it. It is time for your turn
      to feel as the same way as our customers by capturing your own unforgetable experiences.
    </p>
    <div class="slider">
      <div class="item">
        <img class="photo" src="../assets/gallery_1.jpg" />
      </div>

      <div class="item">
        <img class="photo" src="../assets/gallery_2.jpg" />
      </div>

      <div class="item">
        <img class="photo" src="../assets/gallery_3.jpg" />
      </div>

      <div class="item">
        <img class="photo" src="../assets/gallery_4.jpg" />
      </div>

      <div class="item">
        <img class="photo" src="../assets/gallery_5.jpg" />
      </div>

      <div class="item">
        <img class="photo" src="../assets/gallery_6.jpg" />
      </div>
    </div>

    <h3><strong>#instagramable</strong></h3>
    <!-- Feeds for small -->
    <div class="feed-sm">
      <img class="insta1" src="../assets/Insta1.jpg" />
      <img class="insta2" src="../assets/Insta2.jpg" />
      <img class="insta3" src="../assets/Insta3.jpg" />
      <img class="insta7" src="../assets/Insta7.jpg" />
      <img class="insta6" src="../assets/Insta6.jpg" />
      <img class="insta4" src="../assets/Insta4.jpg" />
      <img class="insta5" src="../assets/Insta5.jpg" />
      <img class="insta9" src="../assets/Insta9.jpg" />
    </div>

    <!-- Feeds for medium and large -->
    <div class="feed-lg">
      <div class="left">
        <img class="insta1" src="../assets/Insta1.jpg" />
      </div>
      <div class="middle">
        <img class="insta2" src="../assets/Insta2.jpg" />
        <img class="insta3" src="../assets/Insta3.jpg" />
        <img class="insta7" src="../assets/Insta7.jpg" />
        <img class="insta6" src="../assets/Insta6.jpg" />
      </div>
      <div class="right">
        <img class="insta4" src="../assets/Insta4.jpg" />
        <div class="right-bottom">
          <img class="insta5" src="../assets/Insta5.jpg" />
          <img class="insta9" src="../assets/Insta9.jpg" />
        </div>
      </div>
    </div>
  </div>

</template>
  
<script>
export default {
  name: "GalleryView"
};

</script>
  
<style scoped>
@media screen and (max-width: 576px) {
  .container {
    padding: 2vw 5vw;
    text-align: justify;
  }

  .slider {
    display: flex;
    margin-bottom: 50px;
    width: 100%;
    height: 30vh;
    overflow: hidden;
  }

  @keyframes slide_animation {
    50% {
      transform: translateX(-360vw);
    }

    100% {
      transform: translateX(0vw);
    }
  }

  .item {
    width: 100%;
    height: 100%;
    animation: slide_animation 50s infinite;
  }

  .photo {
    max-width: 120vw;
    max-height: 30vh;
  }

  .feed-lg {
    display: none;
  }

  .feed-sm {
    margin-bottom: 20px;
    width: 100%;
    display: grid;
    gap: 0.8rem;
  }

  .feed-sm img {
    border-radius: 0.8rem;
    width: 100%;
  }


}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .container {
    padding: 2vw 5vw;
    text-align: justify;
  }

  .slider {
    display: flex;
    margin-bottom: 50px;
    width: 100%;
    height: 30vh;
    overflow: hidden;
  }

  @keyframes slide_animation {
    50% {
      transform: translateX(-200vw);
    }

    100% {
      transform: translateX(0vw);
    }
  }

  .item {
    width: 100%;
    height: 100%;
    animation: slide_animation 50s infinite;
  }

  .photo {
    max-width: 120vw;
    max-height: 30vh;
  }

  .feed-sm, .feed-lg {
    display: none;
  }

  .feed-lg {
    margin-bottom: 20px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    gap: 0.8rem;
  }

  .feed-lg img {
    border-radius: 0.8rem;
  }

  .left {
    width: 45%;
  }

  .left .insta1 {
    width: 100%;
    height: 100%;
  }

  .middle {
    width: 15%;
    display: grid;
    gap: 0.8rem;
  }

  .middle .insta2,
  .insta3,
  .insta7,
  .insta6 {
    width: 100%;
  }

  .right {
    width: 40%;
    display: grid;
    gap: 0.8rem;
  }

  .right .insta4 {
    width: 100%;
    height: 100%;
  }

  .right-bottom {
    width: 50%;
    display: flex;
    gap: 0.8rem;
  }

  .insta5,
  .insta9 {
    width: 100%;
    height: 100%;
  }


}

@media screen and (min-width: 992px) {
  .container {
    padding: 2vw 12vw;
    text-align: justify;
  }

  .slider {
    display: flex;
    margin-bottom: 50px;
    max-width: 100%;
    max-height: 30vh;
    overflow: hidden;
  }

  @keyframes slide_animation {
    50% {
      transform: translateX(-86vw);
    }

    100% {
      transform: translateX(0vw);
    }
  }

  .item {
    width: 100%;
    animation: slide_animation 30s infinite;
  }

  .photo {
    width: 25vw;
    height: 30vh;
  }

  .feed-sm, .feed-md {
    display: none;
  }

  .feed-lg {
    margin-bottom: 20px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    gap: 0.8rem;
  }

  .feed-lg img {
    border-radius: 0.8rem;
  }

  .left {
    width: 45%;
  }

  .left .insta1 {
    width: 100%;
    height: 100%;
  }

  .middle {
    width: 15%;
    display: grid;
    gap: 0.8rem;
  }

  .middle .insta2,
  .insta3,
  .insta7,
  .insta6 {
    width: 100%;
  }

  .right {
    width: 40%;
    display: grid;
    gap: 0.8rem;
  }

  .right .insta4 {
    width: 100%;
    height: 100%;
  }

  .right-bottom {
    width: 50%;
    display: flex;
    gap: 0.8rem;
  }

  .insta5,
  .insta9 {
    width: 100%;
    height: 100%;
  }
}
</style>