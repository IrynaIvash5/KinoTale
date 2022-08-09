const Router = require('express')
const router = new Router()
const controller = require('../controller/movieController.js')
const { check } = require("express-validator")
// const films = require('../films.json')

router.get('/',[
    check('listfilms')
], controller.getMovies)

// router.post('/go', (req, res) => {
//     res.send('Halloooo!')
// })
module.exports = router