<template>
<div class="mayor-container">
    <Header @search="searchMovies"/>
    <div class="container">
        <div class="wrap-container">
            <div class="block">
                <div class="block-film-name">
                    <h1>{{movie.name}}</h1>
                    <div class="flex-films">
                        <div class="img-film">
                            <img :src="getImg(movie.imgUrl)" alt="">
                        </div>
                        <div class="info-film">
                            <div class="table">
                                <p class="duration color">Тривалість:</p>
                                <p class="duration color">Статус:</p>
                                <p class="duration color">Рік:</p>
                                <p class="duration color">Країна:</p>
                                <p class="duration color">Жанр:</p>
                                <p class="duration color">Переклад:</p>
                                <p class="duration color">Озвучка:</p>
                                <p class="duration color">Режисер:</p>
                                <p class="duration color">В ролях:</p>
                            </div>

                            <div class="info">
                                <p>{{movie.duration}}</p>
                                <p>{{movie.status}}</p>
                                <p>{{movie.premiere}}</p>
                                <p>{{movie.age}}</p>
                                <p>{{movie.country}}</p>
                                <div class="inline-ganres">
                                    <div class="actors-block" v-for="(ganres, i) in movie.ganres" :key="i">
                                    <p>{{ganres}}</p>
                                </div>
                                </div>
                                <p>{{movie.translate}}</p>
                                <p>{{movie.voiceActing}}</p>
                                <p>{{movie.director}}</p>
                                <div class="actors-block left">
                                    <router-link class="actors-href" tag="button"
                                    v-for="(actor, i) in movie.actors" :key="i"
                                     :to="{path: '/', query: {filter: actor}}">
                                    {{actor}}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <p class="description-movie">Коротко про фільм</p>
                        <p>{{movie.description}} </p>
                    </div>
                    <div class="video-film">
                        <!-- <video  class="video" 
                        controls 
                        ></video> -->
                        <iframe class="video-width" width="700" height="400" :src="this.movie.watchUrl" frameborder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="block-like">                      
                            <button @click="patchLikes('counterUp')" class="like-btn-img"><p class="counter">{{this.movie.likes.counterUp.length}}<p/></button>
                            <button @click="patchLikes('counterDown')" class="like-btn-img bad"><p class="counter">{{this.movie.likes.counterDown.length}}<p/></button>
                            <button @click="patchLikes('counterLove')" class="emoji love"><p class="counter-emoji">{{this.movie.likes.counterLove.length}}<p/></button>
                            <button @click="patchLikes('counterAngry')" class="emoji angry"><p class="counter-emoji">{{this.movie.likes.counterAngry.length}}<p/></button>
                            <button @click="patchLikes('counterCryning')" class="emoji cryning"><p class="counter-emoji">{{this.movie.likes.counterCryning.length}}<p/></button>
                            <button @click="patchLikes('counterGlasses')" class="emoji glasses"><p class="counter-emoji">{{this.movie.likes.counterGlasses.length}}<p/></button>
                            <button @click="patchLikes('counterHappy')" class="emoji happy"><p class="counter-emoji">{{this.movie.likes.counterHappy.length}}<p/></button>
                            <button @click="patchLikes('counterNeutral')" class="emoji neutral"><p class="counter-emoji">{{this.movie.likes.counterNeutral.length}}<p/></button>
                            <button @click="patchLikes('counterSad')" class="emoji sad"><p class="counter-emoji">{{this.movie.likes.counterSad.length}}<p/></button>
                            <button @click="patchLikes('counterSmail')" class="emoji smail"><p class="counter-emoji">{{this.movie.likes.counterSmail.length}}<p/></button>
                            <button @click="patchLikes('counterVomiting')" class="emoji vomiting"><p class="counter-emoji">{{this.movie.likes.counterVomiting.length}}<p/></button>
                    </div>
                    <BlockComment :movie="movie"/>
                </div>
                <div class="exit-registraton">
                    <ExitRegistr />
                </div>
                
               
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from './../components/Header.vue'
import Footer from './../components/Footer.vue'
import BlockComment from '../components/BlockComment.vue'
import ExitRegistr from './../components/ExitRegistr.vue'
import addIcons from '@/mixins/addIconsMovies.mixin'
import getMovie from '@/mixins/getMovie.mixin'
// import IconsBlock from '../components/IconsBlock.vue'
// import paginationMixin from '@/mixins/pagination.mixin'
import {
    VUE_APP_API_HOST
} from './../constants.js'


export default {
    name: 'PageFilm',
    mixins: [addIcons, getMovie],
    components: {
        Header,
        ExitRegistr,
        BlockComment,
        Footer
    },
    data(){
        return {
            movie: {},
            clonMovies: [],
            VUE_APP_API_HOST
        }
    },
    mounted() {
        this.moveUp()
    },
    methods: {
        moveUp() {
            window.scrollTo(0, 0);
        },
        searchActor(actor){
            this.$emit('filter', actor)
        },
        searchMovies(searchValue){
            this.$router.push({path: '/', query: {search: searchValue}})
        },
        async patchLikes(likeName){
            this.user = JSON.parse(localStorage.getItem('user'))  
            const body = {
                movieId: this.movie._id,
                likeName: likeName,
                userId: this.user._id
            }
            if(body.userId){
                const patches = await this.$axios.patch('http://localhost:3000/likeMovie', body)
                await this.getFilm(this.movie._id)
            }else{
                alert('Користувач не зареєстрований')
            }
        }
    },
}
</script>

<style scoped>

.mayor-container{
    overflow: hidden;
}

.container {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.icon {
    margin-right: 33px;
    display: block;
    /* justify-content: ; */
}

.wrap-container {
    max-width: 80%;
    width: 80%;
}

.block {
    background-color: black;
    color: white;
    width: 100%;
    height: 99%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}

.block h1 {
    cursor: pointer;
    font-family: Comic Sans MS, Comic Sans, cursive;
    color: rgb(255, 217, 0);
}

.block-film-name {
    margin-top: 10px;
    margin-left: 10px;
    opacity: 1;
}

.img-film {
    width: 225px;
    height: 330px;
    margin-top: 20px;
    background-color: black;
}

.img-film img {
    height: 100%;
    width: 100%;
}

.flex-films {
    display: flex;
}

.duration {
    margin: 20px 0 0 15px;
    font-size: 14px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: 600;
    border-collapse: collapse;
}

.actors-href {
    display: flex;
    display: inline-block;
    background-color: black;
    color: rgb(127, 167, 228);
    font-size: 14px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.actors-href:hover{
    color: rgb(17, 71, 153);
}

.color{
    color: rgb(117, 116, 114);
}

.info-film {
    display: flex;
    width: 480px;
}

.info {
    margin: 20px 0 0 25px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

.info p {
    margin: 0 0 20px 25px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.actor {
    color: rgb(127, 167, 228);
}

.left{
    margin-left: 20px;
}

.actor:hover {
    color: rgb(17, 71, 153);
}

.actors-block {
    display: inline-block;
}

.text {
    width: 700px;
    height: 220px;
    margin-top: 30px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    line-height: 1.4em;
}

.description-movie {
    font-size: 20px;
    margin-bottom: 10px;
    /* color: rgb(228, 80, 112); */
    color: rgb(255, 217, 0);
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.video-film {
    width: 700px;
    height: 400px;
    margin-top: 60px;
    margin-bottom: 40px;
}

.block-like{
    display: flex;
    background-color: rgb(41, 39, 39);
    margin-top: 3%;
    height: 100px;
    align-items: center;
    margin-bottom: 2%;
    width: 100%;
}

.block-like img{
    display: flex;
}

.like-btn-img{
    background: url('~@/assets/img/fingerUp.png')  no-repeat;
    background-size: 35px;
    height: 42px;
    /* background-color: blue; */
    background-position: center;
    display: flex;
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    width: 110px;
    border: none;
}

.like-btn-img:hover{
    background-color: rgb(123, 174, 250);
    color: white;
}
.bad{
    background: url('~@/assets/img/fingerDown.png')  no-repeat;
    background-size: 30px;
    /* background-color: brown; */
    background-position: center;
}

.bad:hover{
    background-color: rgb(216, 109, 109);
    color: white;
}

.emoji{
    height: 42px;
    width: 53px;
    border: none;
    /* margin: 0; */
}

.emoji:hover{
    background-color: rgb(109, 138, 216);
}

.love{
    background: url('~@/assets/img/love.png')  no-repeat;
    background-size: 30px;
    background-position: center;
}

.angry{
    background: url('~@/assets/img/angry.png')  no-repeat;
    background-size: 34px;
    background-position: center;
}

.cryning{
    background: url('~@/assets/img/cryning.png')  no-repeat;
    background-size: 34px;
    background-position: center;
}

.glasses{
    background: url('~@/assets/img/glasses.png')  no-repeat;
    background-size: 32px;
    background-position: center;
}

.happy{
    background: url('~@/assets/img/happy.png')  no-repeat;
    background-size: 32px;
    background-position: center;
}

.neutral{
    background: url('~@/assets/img/neutral.png')  no-repeat;
    background-size: 35px;
    background-position: center;
}

.smail{
    background: url('~@/assets/img/smail.png')  no-repeat;
    background-size: 32px;
    background-position: center;
}

.sad{
    background: url('~@/assets/img/sad.png')  no-repeat;
    background-size: 34px;
    background-position: center;
}

.vomiting{
    background: url('~@/assets/img/vomiting.png')  no-repeat;
    background-size: 34px;
    background-position: center;
    /* margin-right: 5px; */
}

.counter{
    font-size: 18px;
    color: white;
    /* padding: 5px; */
    margin-top: 60px;
}

.counter-emoji{
    font-size: 18px;
    color: white;
    margin-top: 42px;
}

@media screen and (min-width: 1920px) {
  .duration {
    font-size: 23px;
  }
}

@media screen and (min-width: 1920px) {
  .actors-href {
    font-size: 23px;
  }
}

@media screen and (min-width: 1920px) {
  .block h1 {
    font-size: 33px;
  }
}

@media screen and (min-width: 1920px) {
  .img-film {
    width: 300px;
    height: 450px;
  }
}

@media screen and (min-width: 1920px) {
  .info {
    font-size: 23px;
  }
}

@media screen and (min-width: 1920px) {
  .actors-block {
    font-size: 23px;
    display: flex;
  }
}

@media screen and (min-width: 1920px) {
  .inline-ganres{
    display: flex;
  }
}

@media screen and (min-width: 1920px) {
  .exit-registraton{
    margin-right: 20px;
  }
}

@media screen and (min-width: 1920px) {
  .text{
    width: 1050px;
    line-height: 1.5em;
    font-size: 20px;
  }
}

@media screen and (min-width: 1920px) {
  .description-movie{
    font-size: 26px;
  }
}

@media screen and (min-width: 1920px) {
  .video-width{
    width: 1050px;
  }
}
@media screen and (min-width: 1920px) {
  .like-btn-img{
    background-size: 45px;
  }
}

@media screen and (min-width: 1920px) {
  .emoji{
    background-size: 45px;
  }
}
@media screen and (min-width: 1920px) {
  .block-like{
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1920px) {
  .counter-emoji{
    font-size: 24px;
  }
}

@media screen and (min-width: 1920px) {
  .counter{
    font-size: 24px;
  }
}
</style>

