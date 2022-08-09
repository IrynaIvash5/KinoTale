<template>
<div class="page-main">
    <Header @search="searchMovieName"/>
    <div class="contend">
        <div class="icon">
        <div v-for="movie in currentPageMovies" :key="movie._id">
            <IconsBlock :movie="movie" />
        </div>
    </div>

    <Genres  @filter="searchGanresMovies"/>
    <div class="container">
        <div class="wrap-container">
            <div class="block">
                <Information />
                <ExitRegistr @premiere="getMovies(true)" />
            </div>
            <div class="movi" v-for="movie in currentPageMovies" :key="movie._id+'g'">
                <BlockFilm :movie="movie" @filter="searchActorinMovies"/>
            </div>

        </div>
    </div>
    <div class="pagination-block">
        <Paginate 
        v-model="page"
        :page-count="pageCount" class="number" 
        :click-handler="pageChangeHandler"
        :prev-text="'Назад'"
        :next-text="'Вперед'"
        :container-class="'pagination'" />
    </div>

    </div>
    
    
    <Footer/>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import IconsBlock from '../components/IconsBlock.vue'
import Footer from '../components/Footer.vue'
import Genres from '../components/Genres.vue'
import ExitRegistr from '../components/ExitRegistr.vue'
import BlockFilm from '../components/BlockFilm.vue'
import Information from '../components/Information.vue'
import paginationMixin from '@/mixins/pagination.mixin'

export default {
    name: 'MainPage',
    components: {
        Header,
        IconsBlock,
        Footer,
        Genres,
        ExitRegistr,
        BlockFilm,
        Information
    },
    mixins: [paginationMixin],
    data() {
        return {
            movies: [],
            searchMovies: '',
            clonMovies: [],
            genresLists: []
        }
    },
    async beforeMount() {
        await this.getMovies()
        if (this.$route.query.filter){
            this.searchActorinMovies(this.$route.query.filter)
        }
        if (this.$route.query.search){
            this.searchMovieName(this.$route.query.search)
        }
        
    },
    methods: {
        async getMovies(premiere) {
            let response = await fetch('http://localhost:3000/film?premiere=' + premiere)
            this.movies.length = 0
            this.movies.push(...(await response.json())) 
            this.clonMovies = JSON.parse(JSON.stringify(this.movies || []))
            this.setupPagination(this.movies)
        },
        searchMovieName(searchMovieQuery) {
            this.movies = this.clonMovies.filter(movie => movie.name.toLowerCase().includes(searchMovieQuery.toLowerCase()));
            this.setupPagination(this.movies)
        },
        searchGanresMovies(searchGanresQuery){
            if(searchGanresQuery !== 'Всі жанри' && searchGanresQuery !== 'Всі актори'){
                this.movies = this.clonMovies.filter(movie => movie.ganres.includes(searchGanresQuery))
                // this.setupPagination(this.movies)
            }else{
                this.movies = this.clonMovies
            }
            this.setupPagination(this.movies)
        },
        premiereList(premiereStatus){
            if(premiereStatus !== 'Вийшов'){
                this.movies = this.clonMovies.filter(movie => movie.status.includes(premiereStatus))
            }else{
                this.movies = this.clonMovies
            }
            this.setupPagination(this.movies)
        },
        searchActorinMovies(searchActorsQuery){
            this.movies = this.clonMovies.filter(movie => movie.actors.includes(searchActorsQuery));
            this.setupPagination(this.movies)
        }
    },
}
</script>

<style scoped>

.page-main{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.contend{
    flex: 1;
}
.container {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.icon {
    margin-right: 30px;
    display: flex;
    justify-content: center;
}

.pagination-block {
    display: flex;
    justify-content: center;
    margin: 20px 0 20px 0;
}

.pagination {
    color: white;
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    width: 400px;
    height: 40px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 20px;
}

.number {
    border: 1px solid yellow;
    margin: 5px;
}

.wrap-container {
    max-width: 80%;
    width: 80%;
}

.block {
    background-color: black;
    color: white;
    width: 100%;
    height: 250px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}

.movi {
    margin-top: 5px;
    background-color: black;
}

@media screen and (min-width: 1920px) {
  .pagination {
    width: 550px;
    height: 50px;
    font-size: 25px;
  }
}
</style>
