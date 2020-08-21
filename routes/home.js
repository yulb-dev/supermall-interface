const express = require('express')
const router = express.Router()
const Swiper = require('../model/swiper')
const Recomm = require('../model/recomm')
const Goods = require('../model/goods')
const User = require('../model/user')
const Scarts = require('../model/shoppingCart')
const Orders = require('../model/orders')

router.get('/', (req, res) => {
    if (req.session.userid) {
        User.findById(req.session.userid, (err, data) => {
            if (data) {
                Scarts.find({ userid: data._id }, (err, data1) => {
                    Orders.find({ userid: data._id }, (err, data2) => {
                        res.send({ data, data1, data2 })
                    })
                })
            }
            else res.send(null)
        })
    }
    else
        res.send(null)
})


router.get('/swiper', (req, res) => {
    Swiper.find({}, (err, data) => {
        res.send(data)
    })
})

router.get('/recommend', (req, res) => {
    Recomm.find({}, (err, data) => {
        res.send(data)
    })
})
// 获取流行商品
router.get('/goods', (req, res) => {
    Goods.find({ class: { $elemMatch: { $eq: req.query.class } } }).limit(parseInt(req.query.page) * 18).then(data => {
        res.send(data)
    })

})

router.get('/user', (req, res) => {
})

//导出
module.exports = router