const Movies = require('../models/Movie')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('../config.js')


class MovieController{
    async getMovies(req, res){
        try {
            const movies = new Movies()
            await movies.save()
            res.json('server work')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MovieController()