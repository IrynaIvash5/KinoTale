<template>

<div class="container">
    <div class="wrap-container">
            <div class="block-icon">
                <div  class="iconblockfilm" @click="$router.push({ path: `/pageFilm/${movie._id}`})"> 
                <img  :src="getImg(movie.imgUrl)" alt=""></div>
            </div>  
    </div>
</div>

</template>

<script>

import addIcons from '@/mixins/addIconsMovies.mixin'

export default {
    name: 'IconsBlock',
    mixins: [addIcons],
     props: {
        movie: {
            type: Object,    
        }
    },
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
    max-width: 90%;
    /* width: 100%; */
    display: flex;
}

.block-icon{
    /* height: 200px; */
    width: 100%;
}

.iconblockfilm{
    background-color: black;
    /* width: 135px; */
    height: 200px;
    width: 100%;
    cursor: pointer;
    margin: 7px;
    margin-top: 20px;
    word-wrap: break-word;
}

 .iconblockfilm img {
        height: 100%;
        width: 100%;
    }

@media screen and (min-width: 960px) {
  .iconblockfilm {
    width: 100%;
    height: 200px;
  }
}

@media screen and (min-width: 1920px) {
  .iconblockfilm {
    /* width: 100%; */
    width: 204px;
    height: 300px;
  }
}
</style>