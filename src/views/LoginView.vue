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
                    <div class="input input-group">
                        <input id="inputPassword" :type="inputType" class="form-control" placeholder="Type your password" required>
                        <div type="button" class="input-group-text" @click="toggleShowPassword">
                            <span class="material-symbols-outlined" v-if="buttonType">
                                visibility_off
                            </span>
                            <span class="material-symbols-outlined" v-if="!buttonType">
                                visibility
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-success" @click="checkLogin()">Sign In</button>
                </div>
                <p>Don't have an account yet? Register <router-link :to="{ name: 'Register' }">here</router-link></p>

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
            buttonType: true
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
                emailKey = "myemail",
                passwordKey = "login";
            if (inputEmail == emailKey && inputPassword == passwordKey) {
                router.push("/");
            } if (inputEmail == emailKey && inputPassword == passwordKey) {
                localStorage.setItem('authenticated', true);
            } 
            else {
                alert('Incorrect login, please enter email: ' + emailKey + ' and password: ' + passwordKey)
            }
        }
    }
}
</script>

<style scoped>
.login-page {
    background: url("../assets/login-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
}

@media screen and (max-width: 992px) {
    .login-page {
    min-height: 80vh;
    }

    .login-box {
        max-width: 100%;
        padding: 3vw 5vw;
        margin: 5vw 5vw;
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
    .login-page {
    min-height: 120vh;
    }

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
}
</style>