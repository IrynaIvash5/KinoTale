<template>
<div class="container">
    <div class="comment-h1">
        <h1>Коментарі</h1>
    </div>
    <div class="block-color">
        <div class="block-comment">
            <div class="input">
                <textarea cols="30" rows="10" class="input-comment"  value=""
                 type="text" placeholder="Введіть текст"
                v-model="comment"></textarea>
            </div>
            <div class="btn">
                <button @click="addComment(comment)" class="btn-comment-res">Добавити коментар</button>
            </div>
            <div class="div-block">
                <div class="add-comment" v-for="(comment, i) in movie.comments" :key="i">
                    <p  class="username">{{comment.userId.username }}
                    <span class="data-now">{{new Date(comment.created).toDateString()}}</span>
                    </p>
                    <p class="comment-text">{{comment.comment}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import addIcons from '@/mixins/addIconsMovies.mixin'
import getMovie from '@/mixins/getMovie.mixin'
// import moment from 'moment';

export default {
    name: 'BlockComment',
    mixins: [addIcons, getMovie],
    props: {
        movie: {
            type: Object,    
        }
    },
    data() {
        return {

        }
    },
    methods: {
        // formatDate() {
        //     let dayComments = new Date
        //     return moment(dayComments).format('L')  
        // },
        async addComment(comment){  
            this.user = JSON.parse(localStorage.getItem('user'))
            const body = {
                movieId: this.movie._id,
                comment: comment,
                userId: this.user._id,
            }
            console.log(body.userId)
            if(body.userId){
                const commentPost = await this.$axios.post('http://localhost:3000/commentMovie', body)
                this.comment = ''
                await this.getFilm(this.movie._id)   
            }else{
                alert('Користувач не зареєстрований')
            }
        },
        
    }
}
</script>

<style scoped>

.container {
    color: white;
    display: flex;
    flex-direction: column;
}

.comment-h1 {
    color: rgb(255, 217, 0);
}

.input {
    display: flex;
    justify-content: center;
}

.block-comment {
    color: white;
    margin-top: 1%;
    width: 100%;
    background-color: rgb(41, 39, 39);
}

.block-color {
    margin-bottom: 2%;
}

.input-comment {
    background-color: rgb(78, 75, 75);
    border: 1px solid rgb(255, 217, 0);
    width: 90%;
    height: 100px;
    margin-top: 15px;
    color: white;
    padding-left: 10px;
}

.input-comment::placeholder{
    color: rgb(136, 132, 132);
}

.btn {
    margin: 30px;
    display: flex;
    justify-content: flex-end;
}

.btn-comment-res {
    width: 200px;
    height: 30px;
    font-size: 17px;
    margin-bottom: 15px;
    background-color: rgb(78, 75, 75);
    border: 1px solid rgb(255, 217, 0);
    color: rgb(255, 217, 0);
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.btn-comment-res:hover {
    background-color: rgb(240, 211, 50);
    color: black;
}

.add-comment {
    color: white;
    width: 90%;
    background-color: rgb(78, 75, 75);
    margin-left: 25px;
    margin-bottom: 5px;
    padding: 10px;
}

.username {
    color: rgb(255, 217, 0);
    font-family: Snell Roundhand, cursive;
    font-style: italic;
}

.data-now {
    margin-left: 74%;
    font-size: 14px;
}

.div-block{
    background-color: rgb(41, 39, 39);
    border: 4px solid rgb(41, 39, 39);
}

.comment-text {
    margin-bottom: 5px;
    overflow-wrap: break-word;
}

@media screen and (min-width: 1920px) {
  .comment-h1{
    font-size: 22px;
  }
}

@media screen and (min-width: 1920px) {
  .input-comment::placeholder{
    font-size: 22px;
  }
}

@media screen and (min-width: 1920px) {
  .input-comment{
    font-size: 22px;
  }
}

@media screen and (min-width: 1920px) {
  .btn-comment-res{
    width: 255px;
    height: 45px;
    margin-right: 20px;
    font-size: 22px;
  }
}

@media screen and (min-width: 1920px) {
  .div-block{
    margin-left: 25px;
  }
}

@media screen and (min-width: 1920px) {
  .add-comment{
    width: 92%;
  }
}

@media screen and (min-width: 1920px) {
  .username{
    font-size: 24px;
  }
}

@media screen and (min-width: 1920px) {
  .comment-text{
    font-size: 22px;
    margin-bottom: 10px;
    line-height: 1.3em;
  }
}

@media screen and (min-width: 1920px) {
  .data-now{
    font-size: 20px;
  }
}
</style>
