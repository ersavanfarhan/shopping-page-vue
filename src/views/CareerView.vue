<template>
  <div class="career-container">
    <br><br><br>
    <div class="career-intro">
      <h1><strong>Work With Us</strong></h1>
      <p>Join our company and many relation here to make a better place for you. Prove us that you are the one we
        looking for
        to lead our company to be the best outdoor equipment provider in Indonesia. Find your relevant jobs here and
        discover your
        opportunity with benefits we offer. We are appriciate every single work for those who want to learn more.</p>
    </div>
    <div class="job-position">
      <div class="job-list">
        <JobCard />
      </div>
    </div>

    <div class="about-career">
      <h3><strong>About Working Here</strong></h3>
      <div class="benefit">
        <div class="benefit-item">
          <span class="material-symbols-outlined">payments</span>
          <div class="content">
            <h5><strong>Competitive Salary</strong></h5>
            <p>To put it simply, competitive salary means that what’s being offered is equal to (or more than) the
              industry average for similar positions in the same location.So although the salary isn’t specifically
              listed
              – that doesn’t mean you can’t estimate a ballpark figure
              based on your own research.</p>
          </div>
        </div>

        <div class="benefit-item">
          <span class="material-symbols-outlined">restaurant</span>
          <div class="content">
            <h5><strong>Free Food & Beverages</strong></h5>
            <p>A free office lunch is definitely a huge perk in the eyes of many employees but what are the actual
              benefits and are there any negative aspects of receiving or offering a free company lunch?We’ll take an
              in-depth look at free lunch in the office and what it means for companies and employees, as
              well which companies offer their employees lunch.</p>
          </div>
        </div>

        <div class="benefit-item">
          <span class="material-symbols-outlined">devices</span>
          <div class="content">
            <h5><strong>Workstation Assistance</strong></h5>
            <p>Workplace benefits are perks employers offer to their employees to compensate them, in addition to a
              salary. Before accepting a job offer, it's helpful to understand what benefits are included in your offer
              so
              you can evaluate the complete package.</p>
          </div>
        </div>

        <div class="benefit-item">
          <span class="material-symbols-outlined">health_and_safety</span>
          <div class="content">
            <h5><strong>Health Assurance</strong></h5>
            <p>Health benefits refer to any benefits under a coverage plan. These usually consist of some combination of
              dental, medical, and vision care offered by employers as a form of compensation to employees.</p>
          </div>
        </div>

        <div class="benefit-item">
          <span class="material-symbols-outlined">kitesurfing</span>
          <div class="content">
            <h5><strong>Vacation</strong></h5>
            <p>Vacation pay is a benefit that employers typically give full-time employees that allows the employees to
              take a paid vacation. Most full-time jobs start with two weeks paid vacation with the option to earn more
              throughout years of service.</p>
          </div>
        </div>

        <div class="benefit-item">
          <span class="material-symbols-outlined">monitoring</span>
          <div class="content">
            <h5><strong>Career Growth</strong></h5>
            <p>Career growth is the journey towards your big-picture career vision. It's the way you move from your
              first
              job out of college to eventually leading your own team. Whether you want to be a CEO or start a non-profit
              organization, career growth is the long-term process of moving towards your ultimate professional goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from '../components/JobCard.vue';

export default {
  name: "CareerView",
  components: {
    JobCard
  }
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .career-container {
    padding: 2vw 5vw;
  }

  .career-intro {
    text-align: justify;
  }

  .job-position {
    margin-bottom: 32px;
  }

  .job-list {
    margin-top: 20px;
    display: grid;
    gap: 20px;
  }

  #read-dtl-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .benefit {
    margin-top: 15px;
    display: grid;
    gap: 20px;
  }

  .benefit-item {
    display: flex;
  }

  .benefit-item .content {
    margin: 0;
    margin-left: 10px;
    text-align: justify;
  }
}

@media screen and (min-width: 992px) {
  .career-container {
    padding: 2vw 12vw;
  }

  .career-intro {
    text-align: justify;
  }

  .job-position {
    margin-bottom: 32px;
  }

  .job-list {
    margin-top: 20px;
    display: grid;
    gap: 1vw;
  }

  #read-dtl-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .benefit {
    margin-top: 15px;
    display: grid;
    gap: 20px;
  }

  .benefit-item {
    display: flex;
  }

  .benefit-item .content {
    margin: 0;
    margin-left: 10px;
    text-align: justify;
  }
}

</style>