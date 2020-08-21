const express = require('express')
const router = express.Router()
const Class = require('../model/class')

router.get('/', (req, res) => {
    Class.find({ grade: 1 }, (err, data) => {
        res.send(data)
    })
})

router.get('/Secondary', (req, res) => {
    Class.find({ path: { $elemMatch: { $eq: req.query.menuName } }, grade: 2 }).then(data => {
        let i = 0
        data = JSON.parse(JSON.stringify(data))
        data.forEach((item) => {
            Class.find({ path: { $elemMatch: { $eq: item.name } }, grade: 3 }).then(data1 => {
                item.children = data1
                i++
                if (i == data.length)
                    res.send(data)
            })
        })
    })
})

router.get('/exit', (req, res) => {
    req.session.destroy()
    res.send('ok')
})

//导出
module.exports = router