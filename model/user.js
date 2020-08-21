const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    avatar: {
        type: String,
        default: 'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png'
    },
    Order: {
        type: Array,
        default: []
    },
    Favorites: {
        type: Array,
        default: []
    },
    shoppingCart: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    }

})
var User = mongoose.model('Users', userSchema, 'users')

module.exports = User
