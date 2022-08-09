<template>
<header class="header">
    <div class="container _container">
        <div class="wrap-container">
            <div class="logo-flex" @click="$router.push('/')">
                <!-- <h1 class="logo-kinotale">Kino</h1><h1 class="logo-kinotale tale">Tale</h1> -->
                <h1 class="logo-kinotale">KinoTale</h1>
                <!--<img @click="$router.push('/')" class="logo-img" src="~@/assets/img/lo.png" alt="logo"> -->
            </div>
            <div class="input-whis-btn">
                <input class="input-header"
                @change="searchMovies"
                type="text" placeholder="Пошук...">
                <span v-if="user" class="username">{{user.username }}</span>
            </div>
        </div>
    </div>
</header>
</template>

<script>

import {
    VUE_APP_API_HOST
} from './../constants.js'

export default {
    name: 'Header',
    data(){
         return {
            user: null,
            VUE_APP_API_HOST
        }
    },
    beforeMount() {
        this.user = JSON.parse(localStorage.getItem('user'))   
    },
    methods:{
        searchMovies(event){
            this.$emit('search', event.target.value)
        },
    }
}
</script>

<style scoped>

.container {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.wrap-container {
    min-width: 78%;
    display: flex;
    justify-content: space-between;
}

.header {
    max-width: 100%;
    background-color: rgb(25, 109, 236);
    height: 50px;
    border-bottom: 0 solid #000;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 99999;
    box-shadow: 0 1px 1px 0 rgb(255 255 255 / 30%), 0 0px 0px rgb(0 0 0 / 40%) inset;
}

.logo-flex {
    display: flex;
}

.logo-kinotale {
    color: rgb(255, 217, 0);
    margin-top: 3px;
    font-family: Snell Roundhand, cursive;
    font-style: italic;
    cursor: default;
}

.input-header {
    height: 30px;
    width: 2500%;
    margin-top: 11px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    background: url('~@/assets/img/search.png') no-repeat 96% 6px;
    background-size: 6%;
    padding-left: 10px;
    background-color: whitesmoke;
}

.input-whis-btn {
    width: 400px;
    width: 37%;
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
}

.username{
    font-size: 20px;
    color: rgb(255, 217, 0);
    display: flex;
    align-items: center;
    font-family: Snell Roundhand, cursive;
    font-style: italic;
    cursor: default;
    margin-left: 10px;
}

@media screen and (min-width: 1920px) {
  .header {
    height: 70px;
  }
}

@media screen and (min-width: 1920px) {
  .logo-kinotale {
    /* margin-top: 10px; */
    font-size: 50px;
  }
}

@media screen and (min-width: 1920px) {
  .username {
    /* margin-top: 10px; */
    font-size: 30px;
  }
}

@media screen and (min-width: 1920px) {
  .input-header {
    margin-top: 16px;
    /* font-size: 30px; */
    height: 40px;
  }
}

@media screen and (min-width: 1920px) {
  .input-header::placeholder{
    font-size: 20px;
  }
}
</style>
