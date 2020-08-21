var mongoose = require('mongoose')

var ordersschema = new mongoose.Schema({
    olist: {
        type: Array,
        default: []
    },
    userid: {
        type: String
    },
    tprice: {
        type: Number
    },
})

var Orders = mongoose.model('Orders', ordersschema, 'orders')

module.exports = Orders
