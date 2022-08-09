const Router = require('express')
const router = new Router()
const controller = require('../controller/createFilmController')

router.post('/', controller.createfilm)

module.exports = router