import _ from 'lodash'


export default{
    data(){
        return{
            page: +this.$route.query.page || 1,
            pageSize: 7,
            pageCount: 0,
            allCurrentPageMovies: [],
            currentPageMovies: []
        }
    },
    methods: {
        pageChangeHandler(page){
            this.$router.push(`${this.$route.path}?page=${page}`)
            this.currentPageMovies = this.allCurrentPageMovies[page -1] || this.allCurrentPageMovies[0]
        },
        setupPagination(allCurrentPageMovies){
            this.allCurrentPageMovies = _.chunk(allCurrentPageMovies, this.pageSize)
            this.pageCount = _.size(this.allCurrentPageMovies)
            this.currentPageMovies = this.allCurrentPageMovies[this.page -1] || this.allCurrentPageMovies[0]
        }
    }
}