const express = require('express')
const router = express.Router()
const Class = require('../model/class')
const Goods = require('../model/goods')

router.post('/', (req, res) => {
    Class.find({ path: { $elemMatch: { $eq: req.body.data.path } }, grade: req.body.data.grade }, (err, data) => {
        res.send(data)
    })
})

router.post('/getGoods', (req, res) => {
    Goods.find({ class: { $elemMatch: { $eq: req.body.name } } }, (err, data) => {
        res.send(data)
    })
})

module.exports = router