<template>
<div class="go-exit">
    <div class="container">
        <div class="header-block">
            <div class="color-header-img" @click="$router.push('/')">
                <h1 class="logo-kinotale">KinoTale</h1>
            </div>
            <div class="major-block">
                <div class="login">
                    <p>Логін</p>
                    <input v-model="username" type="text" placeholder="Login" class="input-log">
                </div>
                <div class="password">
                    <p>Пароль</p>
                    <input v-model="password" type="password" placeholder="Пароль" class="input-log">
                    <div class="remember-me">
                        <input type="checkbox" name="" id="" class="size-checkbox">
                        <p>Запам'ятати мене</p>
                    </div>
                    <div class="btn-exit">
                        <button @click="login()"  class="btn"> Вхід</button>
                    </div>
                    <div class="registration-link">
                        <a @click="$router.push('/registration')" href="">Реєстрація</a>
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
    name: 'Exit',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async login() {
            const body = {
                username: this.username,
                password: this.password
            }
             
            const goToExit = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const data = await goToExit.json()
            if(data.status === 'success'){
                this.$router.push('/')                
                console.log("Ви успішно увішли!")
            }else{
                console.log("Ви не увішли!")
            }
            console.log(data)
            localStorage.setItem('user' ,JSON.stringify(data.user));
                   
        }
        
    }
}
</script>

<style scoped>

.container {
    background-color: rgb(24, 90, 189);
    width: 350px;
    height: 400px;
    color: white;
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

.header-block {
    width: 100%;
    height: 50px;
    /* background-color: black; */
}

.logo-img {
    margin-left: 100px;
    width: 14em;
    height: 3.2em;
}

.color-header-img {
    background-color: rgb(24, 90, 189);
    margin-left: 100px;
    display: flex;
}

.login {
    margin-top: 10px;
}

.login p {
    font-size: 16px;
    font-weight: bold;
}

.password {
    margin-top: 10px;
}

.password p {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}

.input-log {
    width: 90%;
    height: 30px;
    margin-top: 5px;
}

.remember-me {
    display: flex;
    margin-top: 10px;
}

.remember-me input {
    width: 20px;
    height: 20px;
    margin-top: 10px;
}

.remember-me p {
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
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
    color: white;
    margin-right: 20px;
}

.forgot-password {
    margin-left: 15px;
    /* color: white; */
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

@media screen and (min-width: 1920px) {
  .logo-kinotale {
    font-size: 60px;
    margin-left: 50px;
  }
}

@media screen and (min-width: 1920px) {
  .container {
    width: 580px;
    height: 600px;
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
    margin-right: 20px;
  }
}

@media screen and (min-width: 1920px) {
  .registration-link a {
    font-size: 28px;
  }
}

@media screen and (min-width: 1920px) {
  .go-exit {
    margin-top: 140px;
  }
}
</style>
