<template>
    <div class="login-page">
        <br><br><br>
        <form class="login-box">
            <div class="login-container">
                <div class="login-header">
                    <h2 style="font-weight: bold;">SIGN UP FOR FREE</h2>
                    <p>Please fill out the form below</p>
                </div>
                <div class="input-name">
                    <div class="first-name">
                        <h6>First Name :</h6>
                        <input class="form-control" type="text" placeholder="Type your first name" required>
                    </div>
                    <div class="last-name">
                        <h6>Last Name :</h6>
                        <input class="form-control" type="text" placeholder="Type your last name" required>
                    </div>
                </div>
                <div class="input">
                    <h6>E-mail :</h6>
                    <input class="form-control" id="inputEmail" type="e-mail" placeholder="Type your e-mail address"
                        required>
                </div>
                <div class="input">
                    <h6>Password :</h6>
                    <input class="form-control" id="inputPassword" :type="inputType" placeholder="Type your password"
                        required>
                </div>
                <div class="input">
                    <h6>Confirm Password :</h6>
                    <input class="form-control" id="inputConfirm" :type="inputType" placeholder="Confirm your password"
                        required>
                </div>
                <div>
                    <label class="show-btn" @click="toggleShowPassword">
                        <span class="badge text-bg-warning" v-if="buttonType">{{ titleShow }}</span>
                        <span class="badge text-bg-warning" v-if="!buttonType">{{ titleHide }}</span>
                    </label>
                </div>
                <div>
                    <button class="btn btn-success" @click="checkLogin()">Sign Up</button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: "RegisterView",

    data() {
        return {
            inputType: "password",
            buttonType: true,
            titleShow: 'Show Password',
            titleHide: 'Hide Password'
        }
    },
    methods: {
        toggleShowPassword() {
            this.inputType = this.inputType === "password" ? "text" : "password";
            this.buttonType = !this.buttonType
        }
    }
}
</script>
  
<style scoped>
.login-page {
    background: url("../assets/login-bg.jpg");
    min-height: 180vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
}

@media screen and (max-width: 576px) {
    .login-box {
        max-width: 100%;
        padding: 20px 50px 20px 50px;
        margin: 5vw;
        border-radius: 1em;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        text-align: center;
        box-shadow: 0px 0px 10px 0px black;
    }

    .login-container {
        max-width: 100%;
        display: grid;
        gap: 20px;
    }

    .input-name {
        width: 100%;
        display: grid;
        gap: 20px;
    }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
    .login-box {
        max-width: 100%;
        padding: 3rem;
        margin: 5vw 12vw;
        border-radius: 1em;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        text-align: center;
        box-shadow: 0px 0px 10px 0px black;
    }

    .login-container {
        max-width: 100%;
        display: grid;
        gap: 20px;
    }

    .input-name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 5px;
        text-align: left;
    }

    .first-name, .last-name {
        width: 100%;
    }
}

@media screen and (min-width: 992px) {
    .login-box {
        max-width: 100%;
        padding: 3rem;
        margin: 5vw 25vw;
        border-radius: 1em;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        text-align: center;
        box-shadow: 0px 0px 10px 0px black;
    }

    .login-container {
        max-width: 100%;
        display: grid;
        gap: 20px;
    }

    .input-name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 5px;
        text-align: left;
    }

    .first-name, .last-name {
        width: 100%;
    }
}
</style>