const authRouter = require('./router/authRouter')
const filmRouter = require('./router/filmRouter')
const moviesRouter = require('./router/moviesRouter')
const mongoose = require('mongoose')
const express = require('express')
const cors  = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const Movie = require('./models/Movie')
const User = require('./models/User')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)
app.use("/listfilms", moviesRouter)
app.use("/createfilm", filmRouter)
// app.use("/user", User)

app.use(express.static('public'))

const start = async () =>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/registration`)
    } catch {
        console.log(e)
    }
}

start()


app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.get('/', function (req, res){
    res.send('Hello API')
})


app.get('/createfilm/:id', async function(req, res){
    const movieId = await Movie.findOne({_id: req.params.id}).populate({ 
        path: 'comments',
        populate: {
          path: 'userId',
          model: 'User'
        } 
     });;
    res.send(movieId)
})


app.get('/film', async function(req, res){
    let queryPremiere = {}
    if(req.query.premiere !== "undefined"){
        queryPremiere = {isPremiere: req.query.premiere === "true"}
    }
    console.log(queryPremiere)
    const movies  = await Movie.find(queryPremiere)
    res.send(movies)
})

app.get('/user/:username', async function(req, res){
    const usersName  = await User.findOne({username: req.params.username})
    res.send(usersName)
})

app.patch('/favourite', async function(req, res){
    const {movieId, userId} = req.body
    const id = mongoose.Types.ObjectId(userId);
    const user  = await User.findOne({_id: id})
    const whetherUserFavorite = user.favorite.some(favorite => { 
        return favorite.toString() === userId 
    })
    if(whetherUserFavorite){
        user.favorite = user.favorite.filter(deleteMovieId => deleteMovieId.toString() !== movieId)
    } else{
        user.favorite.push(movieId)
    }
    await user.save()
    return res.json()
})

app.patch('/likeMovie', async function(req, res){
    const {movieId, likeName, userId} = req.body
    const id = mongoose.Types.ObjectId(userId);
    const movie = await Movie.findOne({_id: movieId});
    const whetherUserLiked = movie.likes[likeName].some(likeUser => { 
        return likeUser.toString() === userId 
    })
    if(whetherUserLiked){
        movie.likes[likeName] = movie.likes[likeName].filter(deleteUserId => deleteUserId.toString() !== userId)
    } else{
        movie.likes[likeName].push(id)
    }
    await movie.save()
    return res.json()
})

app.post('/commentMovie', async function(req, res){
    const {movieId, comment, userId, created} = req.body
    const movie = await Movie.findOne({_id: movieId})
    if(movie.comments === null){
        movie.comments = []
    }
    movie.comments.push({
        movieId,
        comment,
        userId
      },)
    await movie.save()
    return res.json()
})




app.listen(3000, function(){
    console.log('Server get startred...')
})