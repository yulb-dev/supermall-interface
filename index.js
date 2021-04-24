const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const router = require('./routes/router')
const session = require('express-session')
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    // maxAge: '1728000'
    // //这一项是为了跨域专门设置的
}
app.use(cors(corsOptions))

//配置session
app.use(session({
    secret: 'keyboard cat',  //一个 String 类型的字符串，作为服务器端生成 session 的签名。
    resave: false,           //强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。
    cookie: { maxAge: 3600000 },//设置返回到前端 key 的属性，默认值为
    //{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }
    saveUninitialized: false, //强制将未初始化的 session 存储。当新建了一个 session 且未设定属性或值时，它就处于
}))
//开启数据库服务
require('./model/openfw')

//处理跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get("Origin"));
    res.header('Access-Control-Allow-Headers', 'credentials,Content-Type, Content-Length, Authorization, Accept, X-Requested-With, token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    //若要返回cookie、携带seesion等信息则将此项设为true。此时Access-Control-Allow-Origin不能设置为*
    res.header("Access-Control-Allow-Credentials", "true");

    next();
});
//静态资源
app.use("/img", express.static("./public/img"));

//配置body-parser 中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//挂载路由
router(app)

app.listen(6060, function () {
    console.log("通过6060访问...")
})
