const express = require('express')
const router = express.Router()
const goods = require('../model/goods')
const User = require('../model/user')
const Scarts = require('../model/shoppingCart')
const Orders = require('../model/orders')
const Goods = require('../model/goods')

router.get('/', (req, res) => {
    goods.findById(req.query.id, (err, data) => {
        if (err)
            res.send('404').status(200)
        else
            res.send(data)
    })
})

router.post('/recommend', (req, res) => {
    var len = req.body.idArr.length
    var arr = []
    req.body.idArr.forEach((id) => {
        goods.findById(id, (err, data) => {
            arr.push(data)
            if (arr.length === len)
                res.send(arr)
        })
    })
})
//添加收藏
router.post('/addFavorites', (req, res) => {
    User.findByIdAndUpdate(req.body.id, { $push: { Favorites: req.body.data } }, (err, data) => {
        goods.findByIdAndUpdate(req.body.goodsId, { $inc: { favorites: 1 } }, (err, data1) => {
            res.send('ok')
        })
    })
})
//取消收藏
router.post('/unFavorite', (req, res) => {
    User.findByIdAndUpdate(req.body.id, { $pull: { Favorites: { id: req.body.data.id, color: req.body.data.color, size: req.body.data.size } } }, (err, data) => {
        goods.findByIdAndUpdate(req.body.goodsId, { $inc: { favorites: -1 } }, (err, data1) => {
            res.send('ok')
        })
    })
})
//添加购物车
router.post('/addSpCart', (req, res) => {
    Scarts.create(req.body.data, (err, data) => {
        res.send(data)
    })
})
//重复添加购物车 或 增加num
router.post('/addSpCart2', (req, res) => {
    Scarts.findByIdAndUpdate(req.body.id, { num: req.body.num }, (err, data) => {
        res.send('ok')
    })
})
//删除购物车商品
router.post('/delCartGoods', (req, res) => {
    for (let i = 0; i < req.body.idArr.length; i++) {
        Scarts.findByIdAndRemove(req.body.idArr[i], (err, data) => {
            if (i == req.body.idArr.length - 1)
                res.send('ok')
        })
    }
})
//购买
router.post('/goBuy', (req, res) => {
    let { idArr, userId, list, total } = req.body
    for (let i = 0; i < idArr.length; i++) {
        Scarts.findByIdAndRemove(idArr[i]).then((err, data) => {
            if (i == idArr.length - 1)
                Orders.create({ olist: list, userid: userId, tprice: total }, (err, data) => {
                    res.send(data)
                })
        })
    }

})
//删除订单
router.post('/delOrders', (req, res) => {
    Orders.findByIdAndRemove(req.body.id, (err, data) => {
        res.send('ok')
    })
})

//添加评论
router.post('/addComments', (req, res) => {
    Goods.findByIdAndUpdate(req.body.id, { $push: { comments: req.body.data } }, (err, data) => {
        res.send('ok')
    })
})

module.exports = router