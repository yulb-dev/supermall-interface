var mongoose = require('mongoose')

var Scartschema = new mongoose.Schema({
    userid: {
        type: String
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    goodsid: {
        type: String
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    img: {
        type: String,
    },
    num: {
        type: Number,
        default: 1
    },
})

var Scarts = mongoose.model('scarts', Scartschema, 'scarts')

module.exports = Scarts
