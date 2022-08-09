<template>
<div class="go-exit">
    <div class="container">
        <div class="header-block">
            <div class="color-header-img" @click="$router.push('/')">
                <h1 class="logo-kinotale">KinoTale</h1>
            </div>
            <div class="major-block">
                <div class="site-registr">
                    <p>Тут ви можете зареєструватися на сайті</p>
                </div>
                <div class="login">
                    <div class="block-flex">
                        <p class="login-p">Логін</p>
                        <p class="cursiv">(мінімум 3 символи англ. Без крапок)</p>
                    </div>
                    <input v-model="username" id="userName" placeholder="Login" type="text" class="input-log">
                </div>
                <div class="login">
                    <div class="block-flex">
                        <p class="login-p">E-mail</p>
                        <p class="cursiv">(введіть діючий email)</p>
                    </div>
                    <input v-model="email" id="email" placeholder="e-mail" type="email" class="input-log">
                </div>
                <div class="password">
                    <div class="block-flex">
                        <p class="login-p">Пароль</p>
                        <p class="cursiv">(мінімум 6 символів)</p>
                    </div>
                    <input v-model="password" id="password" placeholder="Пароль" type="password" class="input-log">
                    <div class="toconfirm">
                        <p class="login-p">Підтвердити пароль</p>
                        <input v-model="repeatPassword" placeholder="Підтвердити пароль" type="password" class="input-log">
                    </div>
                    <div class="btn-exit">
                        <button class="btn" @click="registration()"> Реєстрація</button>
                    </div>
                    <div class="registration-link">
                        <a @click="$router.push('/exit')" href="">Війти</a>
                        <a @click="$router.push('/')" class="back-to-home" href="">Повернутися на головну</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'Registration',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    methods: {
        async registration() {
            const body = {
                username: this.username,
                email: this.email,
                password: this.password,
                repeatPassword: this.repeatPassword,
            }
            const goToregistration = await fetch('http://localhost:3000/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            this.$router.push('/')
            const data = await goToregistration.json()
            console.log(data)
            localStorage.setItem('user' ,JSON.stringify(data.user));  
            this.$router.go(0);
        },
    },
}
</script>

<style scoped>
h1 {
    color: aliceblue;
}

.container {
    background-color: rgb(24, 90, 189);
    width: 350px;
    height: 550px;
    color: white;
    margin-bottom: 50px;
}

.logo-flex {
    display: flex;
}

.logo-kinotale {
    color: rgb(255, 217, 0);
    margin-top: 3px;
    font-family: Snell Roundhand, cursive;
    font-style: italic;
}

.tale {
    color: rgb(255, 217, 0);
}

.go-exit {
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-top: 50px;
}

.major-block {
    margin-left: 30px;
}

.email p {
    font-size: 16px;
    font-weight: bold;
}

.header-block {
    width: 100%;
    height: 50px;
}

.logo-img {
    margin-left: 100px;
    width: 14em;
    height: 3.2em;
}

.color-header-img {
    background-color: rgb(24, 90, 189);
    display: flex;
    margin-left: 100px;
}

.login {
    margin-top: 10px;
}

.login-p {
    font-size: 16px;
    font-weight: bold;
}

.password {
    margin-top: 10px;
}

.login-p {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}

.input-log {
    width: 90%;
    height: 30px;
    margin-top: 5px;
}

.btn-exit {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    margin-right: 35px;
}

.btn {
    background-color: rgb(255, 217, 0);
    width: 150px;
    height: 30px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: white;
}

.btn:hover {
    color: white;
    background-color: rgb(209, 178, 5);
}

.registration-link {
    margin-top: 30px;
    display: flex;
    justify-items: center;
}

.registration-link a {
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
    color: white;
}

.forgot-password {
    margin-left: 15px;
}

.registration-link a:hover {
    color: rgb(255, 217, 0);
}

.back-to-home {
    font-size: 16px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
}

.back-to-home:hover {
    color: rgb(255, 217, 0);
}

.block-flex {
    display: flex;
}

.cursiv {
    font-style: oblique;
    margin-top: 10px;
}

.site-registr {
    font-size: 18px;
    text-align: center;
    font-style: oblique;
    margin-top: 10px;
}

@media screen and (min-width: 1920px) {
  .logo-kinotale {
    font-size: 60px;
    margin-left: 50px;
  }
}

@media screen and (min-width: 1920px) {
  .go-exit {
    margin-top: 140px;
  }
}

@media screen and (min-width: 1920px) {
  .container {
    width: 580px;
    height: 800px;
  }
}

@media screen and (min-width: 1920px) {
  .input-log::placeholder {
    font-size: 24px;
  }
}

@media screen and (min-width: 1920px) {
  .input-log {
    height: 55px;
    width: 92%;
    /* margin-left: 5px; */
  }
}

@media screen and (min-width: 1920px) {
  .login p {
    font-size: 28px;
  }
}

@media screen and (min-width: 1920px) {
  .password p {
    font-size: 28px;
  }
}

@media screen and (min-width: 1920px) {
  .remember-me input{
    width: 25px;
    height: 25px;
    margin-top: 11px;
  }
}

@media screen and (min-width: 1920px) {
  .btn{
    font-size: 28px;
    width: 250px;
    height: 50px;
    margin-right: 5px;
  }
}

@media screen and (min-width: 1920px) {
  .registration-link a {
    font-size: 28px;
  }
}

@media screen and (min-width: 1920px) {
  .site-registr p {
    font-size: 26px;
    margin-right: 20px;
  }
}
</style>
