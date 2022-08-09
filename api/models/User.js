const { ObjectId } = require('mongodb')
const {Schema, model} = require('mongoose')

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}],
    favorite: {type: [{type: Schema.ObjectId, required: true, ref: 'Movie'}], default: []}
})

module.exports = model('User', User)