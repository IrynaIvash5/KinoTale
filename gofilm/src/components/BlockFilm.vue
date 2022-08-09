<template>
<div>
    <div class="container">
        <div class="block-film-name">
            <div class="name">
                <h2 @click="$router.push({ path: `/pageFilm/${movie._id}`})">{{movie.name}}</h2>
                <button @click="favouriteList(favourite)" :class="{'btn-favourite-click': this.user.favorite.includes(movie._id)}" class="btn-favourite">Обране</button>
            </div>
            <div class="flex-films">
                <div @click="$router.push({ path: `/pageFilm/${movie._id}`})" class="img-film">
                    <img :src="getImg(movie.imgUrl)" alt="">
                </div>

                <div class="flex-b">
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
                    <div class="table-two">
                        <p class="duration"> {{movie.duration}}</p>
                        <!-- <p  class="duration"> {{movie.premiere}}</p> -->
                        <p v-if="movie.status" class="duration"> {{movie.status}}</p>
                        <p v-else-if="movie.isPremiere" class="duration"> {{movie.premiere}}</p>
                        <p v-else class="duration"> -</p>
                        <p class="duration"> {{movie.age}}</p>
                        <p class="duration">{{movie.country}}</p>
                        <div class="actors">
                            <p v-for="(ganres, i) in movie.ganres" :key="i" class="duration"> {{ganres}}</p>
                        </div>

                        <p class="duration"> {{movie.translate}}</p>
                        <p class="duration"> {{movie.voiceActing}}</p>
                        <p class="duration">{{movie.director}}</p>
                        <div class="actors-href">
                            <button class="duration-actor" v-for="(actor, i) in movie.actors" :key="i" @click="searchActor(actor)">
                                {{actor}}</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import addIcons from '@/mixins/addIconsMovies.mixin'
// import search from '@/mixins/search.mixin'

export default {
    name: 'BlockFilm',
    mixins: [addIcons],
    props: {
        movie: {
            type: Object,
        }
    },
    beforeMount() {
        this.user = JSON.parse(localStorage.getItem('user'))
    },
    mounted() {
        this.moveUp()
    },
    methods: {
        moveUp() {
            window.scrollTo(0, 0);
        },
        searchActor(actor) {
            this.$emit('filter', actor)
        },
        async favouriteList(favorite) {
        
            // console.log(userId)
            const body = {
                movieId: this.movie._id,
                userId: this.user._id,
            }
            const getFavouriteList = await this.$axios.patch('http://localhost:3000/favourite', body)
            const getUser = await this.$axios.get('http://localhost:3000/user/' + this.user.username)
            localStorage.setItem('user', JSON.stringify(getUser.data));
            this.user = JSON.parse(localStorage.getItem('user'))
        }
    },
}
</script>

<style scoped>
.container {
    margin-top: 5px;
    background-color: black;
    color: white;
}

.img-film {
    width: 20%;
    margin-top: 10px;
    background-color: black;
    margin-bottom: 20px;
}

.color {
    color: rgb(117, 116, 114);
}

.img-film img {
    height: 100%;
    width: 100%;
}

.name {
    display: flex;
}

.name h2 {
    padding-top: 15px;
    cursor: pointer;
    color: rgb(255, 217, 0);
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.flex-films {
    display: flex;
    padding-top: 7px;
}

.btn-favourite {
    height: 30px;
    width: 60px;
    border: none;
    background-color: blue;
    font-family: Comic Sans MS, Comic Sans, cursive;
    color: white;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 10px;
}

.btn-favourite:hover {
    background-color: rgb(255, 217, 0);
    color: rgb(34, 33, 33);
}

.btn-favourite-click {
    background-color: rgb(236, 185, 15);
    color: rgb(34, 33, 33);
}

.block-film-name {
    margin-top: 5px;
    margin-left: 20px;
}

.duration {
    margin: 10px 0 0 15px;
    line-height: 1.5;
    font-size: 14px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: 600;
    border-collapse: collapse;
}

.duration-actor {
    background-color: black;
    color: rgb(127, 167, 228);
    font-size: 14px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.duration-actor:hover {
    color: rgb(17, 71, 153);
}

.actors {
    display: flex;
}

.actors-href {
    display: flex;
    margin: 0.7em;
}

.table {
    margin: 0 20px 0 25px;
    height: 100%;
    font-size: 14px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.flex-b {
    display: flex;
    width: 100%;
    height: 100%;
}

.table-two {
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 1920px) {
    .duration {
        font-size: 23px;
    }
}

@media screen and (min-width: 1920px) {
    .name h2 {
        font-size: 33px;
    }
}

@media screen and (min-width: 1920px) {
    .btn-favourite {
        height: 40px;
        width: 80px;
        font-size: 20px;
    }
}

@media screen and (min-width: 1920px) {
    .duration-actor {
        font-size: 23px;
    }
}
</style>
