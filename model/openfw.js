var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/supermall", { useNewUrlParser: true, useUnifiedTopology: true }).then(data => { console.log('数据库连接成功') });
// mongoose.connect("mongodb://yxx:123456@47.105.222.69:27017/supermall", { useNewUrlParser: true,useUnifiedTopology: true }).then(data=>{console.log('数据库连接成功')});
