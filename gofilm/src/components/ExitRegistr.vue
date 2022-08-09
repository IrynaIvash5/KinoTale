<template>
<div style="display: flex">
    <div class="vertborder"></div>
    <div class="block-exit-registr">
        <div class="flex-block">
            <button class="btn" @click="$router.push('/exit')">Вхід</button>
            <button class="btn" @click="$router.push('/registration')">Реєстрація</button>
        </div>

        <!-- <div class="info"> -->

        <div class="list-top">
            <button @click="getPremier()" class="btn-premiere">ПРЕМ'ЄРИ</button>
            <button @click="showListFavorite()"
             class="btn-premiere list">СПИСОК ОБРАНОГО
             
            </button>
            <!-- <div class="length-favorite">11</div> -->
        </div>
        <!-- </div> -->

    </div>
</div>
</template>

<script lang="ts">
export default {
    name: 'ExitRegisrt',
    methods: {
        getPremier() {
            this.$emit('premiere', true)
        },
        showListFavorite(){
            
        }
    }
}
</script>

<style scoped>
/* .length-favorite{
    border-radius: 90%;
    color: black;
    padding: 1px;
    font-size: 12px;
    background-color: yellow;
    width: 13px;
    height: 13px;
} */
.vertborder {
    margin-top: 15px;
    border-left: 1px solid yellow;
    height: 220px;
}

.block-exit-registr {
    margin-right: 17px;
    padding-top: 10px;
    opacity: 1;
}

.btn {
    font-weight: 600;
    background-color: rgb(25, 109, 236);
    border-radius: 5px;
    border: none;
    color: white;
    margin: 5px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.flex-block {
    display: flex;
}

.btn:hover {
    background-color: rgb(24, 90, 189);
    color: yellow;
}

.yers {
    display: flex;
    flex-direction: column;
    padding: 9px;
}

.yers a {
    padding: 3px;
    color: rgb(127, 167, 228);
}

.yers a:hover {
    color: rgb(17, 71, 153);
}

.yers h4 {
    text-transform: uppercase;
}

.info {
    display: flex;
    justify-content: space-between;
}

.list-top {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    /* line-height: 1.5; */
}

.btn-premiere {
    color: rgb(127, 167, 228);
    margin-left: 40px;
    background-color: black;
}

.btn-premiere:hover {
    color: rgb(236, 222, 25);
}

.list {
    margin-right: 5px;
}

.navigation {
    font-weight: 600;
}

@media screen and (min-width: 960px) {
  .btn {
    width: 155px;
    height: 30px;
    font-size: 17px;
  }
}

@media screen and (min-width: 1920px) {
  .btn {
    width: 200px;
    height: 40px;
    font-size: 24px;
  }
}

/* @media screen and (min-width: 960px) {
  .btn-premiere {
    width: 155px;
    height: 30px;
    font-size: 17px;
  }
} */

@media screen and (min-width: 1920px) {
  .btn-premiere {
    font-size: 20px;
    /* margin-left: 15px; */
  }
}

@media screen and (min-width: 1920px) {
  .block-exit-registr{
    margin-right: 5px;
    padding-top: 15px;
  }
}
</style>
