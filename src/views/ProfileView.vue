<template>
  <br><br>
  <div class="profile-container">
    <h1><strong>Profile</strong></h1>
    <div class="profile-header">
      <img class="profile-img" src="../assets/testi2.png" />
      <div class="profile-menu">
        <h3>Hello, {{ userName.first }}</h3>
        <div class="profile-button">
          <h6 type="button" id="dashboard-button" @click="dashboard">Dashboard</h6>
          <h6 type="button" id="setting-button" @click="setting">Setting</h6>
          <h6 type="button" id="voucher-button" @click="voucher">Voucher</h6>
          <h6 type="button">Other</h6>
        </div>
      </div>
    </div>

    <div id="profile-dashboard" v-show="!status">
      <DashboardProfile />
    </div>

    <div id="profile-setting" v-show="status">
      <SettingProfile />
    </div>

    <div id="profile-voucher" v-show="status">
      <VoucherProfile />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import SettingProfile from '../components/SettingProfile.vue'
import DashboardProfile from '../components/DashboardProfile.vue'
import VoucherProfile from '../components/VoucherProfile.vue'

export default {
  name: "UserView",
  components: {
    DashboardProfile,
    SettingProfile,
    VoucherProfile
  },

  data() {
    return {
      status: false,
      userName: {}
    }
  },

  methods: {
    dashboard() {
      const dashboard = document.getElementById("profile-dashboard");
      const setting = document.getElementById("profile-setting");
      const voucher = document.getElementById("profile-voucher");
      dashboard.style.display = "block"
      setting.style.display = "none"
      voucher.style.display = "none"
    },

    setting() {
      const dashboard = document.getElementById("profile-dashboard");
      const setting = document.getElementById("profile-setting");
      const voucher = document.getElementById("profile-voucher");
      dashboard.style.display = "none"
      setting.style.display = "block"
      voucher.style.display = "none"
    },

    voucher() {
      const dashboard = document.getElementById("profile-dashboard");
      const setting = document.getElementById("profile-setting");
      const voucher = document.getElementById("profile-voucher");
      dashboard.style.display = "none"
      setting.style.display = "none"
      voucher.style.display = "block"
    },
  },

  async mounted() {
    const user = await axios.get('http://localhost:3000/user/1')
    this.userName = user.data
  }
};
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .profile-container {
    padding: 5vw;
    min-height: 60vh;
  }

  .profile-header {
    width: 100%;
    height: 100%;
    margin-top: 3vw;
    display: flex;
    position: relative;
  }

  .profile-img {
    width: 20vw;
  }

  .profile-menu {
    width: 100%;
    padding-left: 25vw;
    position: absolute;
    bottom: 0;
    left: 0%;
  }

  .profile-button {
    display: flex;
    justify-content: space-between;
  }

  h6 {
    margin: 0;
    font-size: small;
  }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .profile-container {
    padding: 5vw;
    min-height: 70vh;
  }

  .profile-header {
    width: 100%;
    height: 100%;
    margin-top: 5vw;
    display: flex;
    position: relative;
  }

  .profile-img {
    width: 10vw;
  }

  .profile-menu {
    width: 100%;
    padding-left: 12vw;
    position: absolute;
    bottom: 0;
    left: 0%;
  }

  .profile-button {
    display: flex;
    justify-content: space-between;
  }

  h6 {
    margin: 0;
  }
}

@media screen and (min-width: 992px) {
  .profile-container {
    padding: 2vw 12vw;
    min-height: 80vh;
  }

  .profile-header {
    width: 100%;
    height: 100%;
    margin-top: 2vw;
    display: flex;
    position: relative;
  }

  .profile-img {
    width: 10vw;
  }

  .profile-menu {
    width: 100%;
    padding-left: 12vw;
    position: absolute;
    bottom: 0;
    left: 0%;
  }

  .profile-button {
    display: flex;
    justify-content: space-between;
  }

  h6 {
    margin: 0;
  }
}
</style>
