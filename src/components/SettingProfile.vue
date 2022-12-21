<template>
  <div class="profile-setting">
    <div class="name">
      <div class="first-name">
        <label>First Name :</label>
        <input class="form-control" :placeholder="users.first" v-model="update.first" />
      </div>

      <div class="last-name">
        <label>Last Name :</label>
        <input class="form-control" :placeholder="users.last" v-model="update.last" />
      </div>
    </div>

    <div class="email">
      <label>Registered E-mail :</label>
      <input class="form-control" type="e-mail" :placeholder="users.email" v-model="update.email" />
    </div>

    <div class="birthday">
      <label>Birthday :</label>
      <input class="form-control" type="date" :placeholder="users.dob" v-model="update.dob" />
    </div>

    <div class="bio">
      <label>Bio :</label>
      <textarea class="form-control" :placeholder="users.bio" v-model="update.bio"></textarea>
    </div>

    <div class="save-btn">
      <button class="btn btn-primary" @click="saveSetting">Save</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SettingProfile",

  data() {
    return {
      users: [],
      update: {}
    }
  },

  methods: {
    saveSetting() {
      if (this.update.first || this.update.last || this.update.email || this.update.dob || this.update.bio) {
        axios.post('http://localhost:3000/user/', this.update)
          .then(() => {
            confirm("Your Profile Has Been Updated");
          })
          .catch((error) => console.log(error))
      }
    }
  },

  async mounted() {
    const user = await axios.get('http://localhost:3000/user/1')
    this.users = user.data
  }
}
</script>

<style scoped>
.profile-setting {
    margin-top: 5vw;
    display: grid;
    gap: 2vw;
  }

  .first-name,
  .last-name {
    width: 100%;
  }
@media screen and (max-width: 576px) {
  .name {
    display: grid;
    gap: 2vw;
  }

  .btn-primary {
    width: 100%;
  }
}

@media screen and (min-width: 576px) {
  .name {
    display: flex;
    gap: 2vw;
  }
}
</style>