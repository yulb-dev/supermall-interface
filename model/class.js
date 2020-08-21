var mongoose = require('mongoose')

var classschema = new mongoose.Schema({
    name: {
        type: String,
    },
    logo: {
        type: Number
    },
    path: {
        type: Array
    },
    grade: {
        type: Number
    }
})

var Class = mongoose.model('Class', classschema, 'classification')

module.exports = Class
