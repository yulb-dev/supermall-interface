const express = require('express')
const router = express.Router()
const fs = require('fs')
const formidable = require('formidable');
const User = require('../model/user')

router.post('/', (req, res) => {
    const form = formidable({ multiples: true })
    form.parse(req, (err, fields, files) => {
        // files: 上传的文件的信息
        // fields: 其他 post 参数
        var name = fields.id + files.file.name.slice(files.file.name.lastIndexOf('.'))
        //创建可读流
        var rs = fs.createReadStream(files.file.path)
        //创建可写流
        var ws = fs.createWriteStream('./public/img/userAvatar/' + name)
        //可读流关闭的事件
        rs.once('close', function () {
            //当可读流关闭时，关闭可写流流
            ws.end()
            User.findByIdAndUpdate(fields.id, { avatar: 'http://localhost:6060/img/userAvatar/' + name, name: fields.name }, (err, data) => {
                if (err) {
                    res.send({ err, status: 200 })
                }
                else {
                    res.send({ name: fields.name, avatar: 'http://localhost:6060/img/userAvatar/' + name })
                }
            })
        })
        //读文件时会触发此事件
        rs.on('data', function (data) { //data：读到的数据
            ws.write(data)
        })
    })
})

router.post('/cname', (req, res) => {
    User.findByIdAndUpdate(req.body.id, { name: req.body.name }, (err, data) => {
        if (err)
            res.send({ err, status: 200 })
        else
            res.send('ok')
    })
})

module.exports = router