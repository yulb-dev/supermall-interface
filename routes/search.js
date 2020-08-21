const express = require('express')
const router = express.Router()
const Goods = require('../model/goods')
//购买
router.get('/getGoods', (req, res) => {
    var reg = new RegExp("[" + req.query.text + "]", 'i')
    Goods.find({ $or: [{ name: { $regex: reg } }, { class: { $elemMatch: { $eq: req.query.text } } }] }, (err, data) => {
        res.send(data)
    })
})

module.exports = router