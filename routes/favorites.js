const express = require('express')
const router = express.Router()
const User = require('../model/user')
const Orders = require('../model/orders')
const Goods = require('../model/goods')
//购买
router.post('/buyNow', (req, res) => {
    Orders.create(req.body.item, (err, data) => {
        res.send(data)
    })
})
router.post('/getSa', (req, res) => {
    Goods.find({ class: { $elemMatch: { $eq: req.body.name } }, brand: req.body.id }, (err, data) => {
        res.send(data)
    })
})
module.exports = router