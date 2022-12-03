<template>
  <br><br><br>
  <!-- About Section -->
  <div class="about-container">
    <h1><strong>About Us</strong></h1>
    <div class="about-intro">
      <div class="about-img">
        <img class="about-img-sm" src="../assets/outdoorPRO.png" />
      </div>
      <p class="text">Omah outdoor was an Indonesian interprise that began their journey since 2018. Omah outdoor was
        founded
        by two famous businessmen, Farhan McCallister and his friend, Frankie Ersavan when they have just finished
        their study at Universitas Gadjah Mada in that time. In the beginning, Omah Outdoor only focused on camping
        equipment rental with limited number of asset. By that time, many people have interests in any kind of outdoor
        activity such as hiking, especially on day off or weekends.</p>
        <p>Our first store was at Karangmalang with more than
        10 employees. Omah Outdoor was nearly out of bussiness following the covid-19 pandemic during that time. After
        pandemic in 2022, The Ministry of Tourism led partnership between local enterprises to support and develop the
        business community in new normal era. By that time our second store was officially opened at Malioboro. Now, we
        have hired more than 100 employees and keep growing every year.</p>
    </div>
  </div>

  <!-- Community section -->
  <div class="about-community">
    <h3><strong>Our Community</strong></h3>
    <p class="text">Meet people in our community to accomplish our mission to save the earth. By joining our community,
      we are
      concerned ourselves against environment issues and together we will keep informing you about our programs and news
      update in the forum section. Join and share your briliant idea here.
    </p>
    <div class="documentation">
      <div class="documentation-item">
        <img class="documentation-img" src="../assets/zero-plastic.jpg" />
        <p class="title">Zero Plastic</p>
      </div>
      <div class="documentation-item">
        <img class="documentation-img" src="../assets/animal-abuse.jpg" />
        <p class="title">Animal Abuse</p>
      </div>
      <div class="documentation-item">
        <img class="documentation-img" src="../assets/zero-food-waste.jpg" />
        <p class="title">Food Wasting</p>
      </div>
      <div class="documentation-item">
        <img class="documentation-img" src="../assets/stop-logging.jpg" />
        <p class="title">Illegal Logging</p>
      </div>
      <div class="documentation-item">
        <img class="documentation-img" src="../assets/Reboisasi.jpg" />
        <p class="title">Go Green</p>
      </div>
    </div>
    <button class="btn btn-success">Join Community</button>
  </div>

  <!-- App Section -->
  <div class="app-container">
    <div class="left-section">
      <img class="mockup-img" src="../assets/app-mockup.png" />
    </div>
    <div class="right-section">
      <h3><strong>Mobile App</strong></h3>
      <p >Now are now available on Play Store and App Store.</p>
      <div class="download-link">
        <img class="download-img" src="../assets/app-store.png" />
        <img class="download-img" src="../assets/play-store.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .about-container {
    padding: 2vw 5vw;
    text-align: justify;
  }

  .about-img {
    text-align: center;
    padding: 10vw 0vw;
  }

  .about-img-sm {
    width: 50%;
  } 

  .about-community {
    padding: 2vw 5vw;
    text-align: justify;
    display: grid;
    gap: 10px;
  }

  .documentation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .documentation-item {
  width: 100%;
  border: 3px solid black;
  border-radius: 1rem;
  text-align: center;
  background-color: black;
}

.documentation-img {
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.title {
  margin: 5px 0px 5px 0px;
  color: white;
}

.app-container {
  padding: 2vw 5vw;
}

.left-section {
  display: none;
}

.download-link {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.download-img {
  max-width: 50%;
}
}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .about-container {
    padding: 2vw 5vw;
    text-align: justify;
  }

  .about-img {
    text-align: center;
    padding: 5vw 0vw;
  }

  .about-img-sm {
    width: 50%;
  } 

  .about-community {
    padding: 2vw 5vw;
    text-align: justify;
  }

  .documentation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  .documentation-item {
  width: 100%;
  border: 3px solid black;
  border-radius: 1rem;
  text-align: center;
  background-color: black;
}

.documentation-img {
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.title {
  margin: 5px 0px 5px 0px;
  color: white;
}

.app-container {
  padding: 2vw 5vw 0vw 5vw;
  display: flex;
  gap: 20px
}

.mockup-img {
  max-width: 100%;
}

.download-link {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.download-img {
  max-width: 50%;
}
}

@media screen and (min-width: 992px) {
  .about-container {
    padding: 2vw 12vw;
    text-align: justify;
  }

  .about-img {
    text-align: center;
    padding: 3vw 0vw;
  }

  .about-img-sm {
    width: 30%;
  } 

  .about-community {
    padding: 2vw 12vw;
    text-align: justify;
  }

  .documentation {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  .documentation-item {
  width: 100%;
  border: 3px solid black;
  border-radius: 1rem;
  text-align: center;
  background-color: black;
}

.documentation-img {
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.title {
  margin: 5px 0px 5px 0px;
  color: white;
}

.app-container {
  padding: 2vw 12vw 0vw 12vw;
  display: flex;
  justify-content: space-between;
}

.mockup-img {
  max-width: 100%;
}

.right-section {
  width: 100%;
  text-align: right;
}

.download-img {
  max-width: 15%;
}
}

</style>
