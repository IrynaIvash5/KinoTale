const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('../config.js')

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}


class authController{
    async registration(req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                console.log(errors)
                return res.status(400).json({message: "Помилка при реєстрації", errors, status: 'fail'})
               
            }

            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({message: "Користувач з таким ім'ям вже існує", status: 'fail'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            delete user.password
            return res.json({message: "Користувач успішно зареєстрований", status: 'success', user})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login(req, res){
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `Користувач ${username} не найденний`, status: 'fail'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message: `Введенний не правильний пароль`, status: 'fail'})
            }
            const token = generateAccessToken(user._id, user.roles)
            delete user.password
            return res.json({token, status: 'success', user})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Login error'})
        }
    }
    async getUsers(req, res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
    
        }
    }
}

module.exports = new authController()