var mongoose = require('mongoose')

var recommschema = new mongoose.Schema({
    name: {
        type: String,
    },
    num: {
        type: Number
    },
    say: {
        type: String
    },
    img: {
        type: String
    }
})

var Recomm = mongoose.model('Recomm', recommschema, 'recommend')

module.exports = Recomm
