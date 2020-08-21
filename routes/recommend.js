const express = require('express')
const router = express.Router()
const Goods = require('../model/goods')
const Class = require('../model/class')

router.get('/logo', (req, res) => {
    Class.find({ path: { $elemMatch: { $eq: req.query.name } }, grade: 3 }, (err, data) => {
        res.send(data)
    })
})

router.get('/goods', (req, res) => {
    Goods.find({ class: { $elemMatch: { $eq: req.query.name } } }, (err, data) => {
        res.send(data)
    })
})

module.exports = router