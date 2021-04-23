var mongoose = require('mongoose')
// 连接数据库
mongoose.connect("mongodb://localhost/supermall", { useNewUrlParser: true, useUnifiedTopology: true }).then(data => { console.log('数据库连接成功') });