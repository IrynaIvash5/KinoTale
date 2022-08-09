export default{
    data(){
        return{
            movie: {}
        }
    },
    beforeMount() {
        const movieId = this.$route.params.id;
        this.getFilm(movieId)  
    },
    methods:{
        async getFilm(movieId) {
            console.log(movieId)
            const movieToWatchResponse = await fetch('http://localhost:3000/createfilm/' + movieId, {
                method: 'GET',
            })
            this.movie = await movieToWatchResponse.json()
            console.log(movieToWatchResponse)
        },
    }
}