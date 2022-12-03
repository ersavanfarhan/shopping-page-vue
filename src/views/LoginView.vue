<template>
    <div class="login-page">
        <br><br><br>
        <form class="login-box">
            <div class="login-container">
                <div class="login-header">
                    <h2 style="font-weight: bold;">LOGIN</h2>
                    <p>Please login with your registered account</p>
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
                <div>
                    <label class="show-btn" @click="toggleShowPassword">
                        <span class="badge text-bg-warning" v-if="buttonType">{{ titleShow }}</span>
                        <span class="badge text-bg-warning" v-if="!buttonType">{{ titleHide }}</span>
                    </label>
                </div>
                <div>
                    <button class="btn btn-success" @click="checkLogin()">Sign In</button>
                </div>
                <p>Haven't Registered? Register <router-link :to="{ name: 'Register' }">here</router-link></p>
                
            </div>
        </form>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: 'LoginView',

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
        },

        checkLogin() {
            var inputEmail = document.getElementById("inputEmail").value,
                inputPassword = document.getElementById("inputPassword").value,
                emailKey = "qqqq",
                passwordKey = "qqqq";
            if (inputEmail == emailKey && inputPassword == passwordKey) {
                router.push("user");
                return true;
            } else {
                alert('Incorrect login, please enter  email: ' + emailKey + ' and password: ' + passwordKey)
                return false;
            }
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

@media screen and (max-width: 992px) {
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
}

@media screen and (min-width: 992px) {
    .login-box {
        max-width: 100%;
        padding: 3rem;
        margin: 5vw 30vw;
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
}
</style>