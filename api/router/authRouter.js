const Router = require('express')
const router = new Router()
const controller = require('../controller/authController')
const { check } = require("express-validator")
const authMeddlewaree = require('../middlewaree/authMiddlewaree')
const roleMeddlewaree = require('../middlewaree/roleMiddlewaree')

router.post('/registration',[
    check('username', "Ім'я користувача не може бути пустим").notEmpty(),
    check('password', "Пароль має бути більше 6 символів").isLength({min:6})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMeddlewaree(['ADMIN']), controller.getUsers)

module.exports = router