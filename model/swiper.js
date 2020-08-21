var mongoose = require('mongoose')

var swiperchema = new mongoose.Schema({
    name: {
        type: String,
    },
    num: {
        type: Number
    },
    img: {
        type: String
    }
})

var Swiper = mongoose.model('Swiper', swiperchema, 'swiper')

module.exports = Swiper
