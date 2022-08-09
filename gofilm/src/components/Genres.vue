<template>

<div class="container">
    <div class="wrap-container">
        <div class="fon-block-genres">
            <button class="genres"
                v-for="(genresList, i) in genresLists" 
                @click="searchGanres(genresList)"
                :key="i">
            {{genresList.name}}</button>
            <!-- <div class="all-button">
                <button class="genres all" @click="$router.push('/')">Всі жанри</button>
                <button class="genres all" @click="$router.push('/')">Всі актори</button>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
 name: 'Genres',
//  props: {
//         movie: {}
//     },
     data() {
        return {
            genresLists: [
                {
                    name: 'Детектив',
                    id: 'detective'
                },
                {
                    name: 'Романтика',
                    id: 'romance'
                },
                {
                    name: 'Бойовик',
                    id: 'action'
                },
                {
                    name: 'Драма',
                    id: 'melodrama'
                },
                {
                    name: 'Комедія',
                    id: 'comedy'
                },
                {
                    name: 'Фантастика',
                    id: 'fantasy'
                },
                {
                    name: 'Триллер',
                    id: 'thriller'
                },
                 {
                    name: 'Жахи',
                    id: 'horrors'
                },
                {
                    name: 'Історичний',
                    id: 'historical'
                },
                {
                    name: 'Екшн',
                    id: 'mysticism'
                },
                {
                    name: 'Пригодницький',
                    id: 'adventure'
                },
                {
                    name: 'Військовий',
                    id: 'military'
                },
                
                {
                    name: 'Музика',
                    id: 'musik'
                },
                {
                    name: 'Кримінал',
                    id: 'kriminal'
                },
                {
                    name: 'Документальний',
                    id: 'document'
                },
                {
                    name: 'Вітчизняні',
                    id: 'vitchuzna'
                },
                {
                    name: 'Всі жанри',
                    id: 'allganres'
                },
                {
                    name: 'Всі актори',
                    id: 'allactors'
                }
            ]
        };
    },
    methods: {
         searchGanres(genresList){
            this.$emit('filter', genresList.name)
        }
    },
 
}
</script>

<style scoped>

.fon-block-genres{
    background-color: black;
    height: 120px;
    margin-top: 5px;
    display: flex; 
    flex-wrap: wrap;
}

.wrap-container {
    width: 80%;
}

.genres{
    background-color: rgb(25, 109, 236);
    height: 35px;
    margin: 4px;
    margin-left: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 16px;
    text-decoration: none;
    font-family: Comic Sans MS, Comic Sans, cursive ;
}

.all-button{
    display: flex;
    margin-left: 33.3%;
}

.genres:hover{
    background-color: rgb(24, 90, 189);
    color: yellow;
}

@media screen and (min-width: 960px) {
  .genres {
    width: 15.1%;
  }
}

@media screen and (min-width: 1920px) {
  .genres {
    width: 15.7%;
    font-size: 22px;
  }
}

</style>
