var mongoose = require('mongoose')

var goodschema = new mongoose.Schema({
    name: {   //商品名称
        type: String,
        default: '李宁 yxx1'
    },
    num: {   //商品数量
        type: Number,
        default: 49
    },
    price: {  //商品价格
        type: Number,
        default: 299
    },
    parameter: {  //动态参数
        type: Array,
        default: [{ name: '鞋码', value: ['38', '39', '40', '41', '42', '43', '44'] }, { name: '颜色', value: ['Black/炫银', '黑红/禁穿', 'Oreo 白黑', '涂鸦南海岸', 'Preheat'] }]
    },
    attributes: {  //静态属性
        type: Array,
        default: [{ name: '货号', vlue: 'CQ7634-303' },
        { name: '品牌', value: 'Li Ning/李宁' },
        { name: '球星代言', value: '禹骁轩' },
        { name: '篮球鞋分类', value: "实战" },
        { name: '中底科技', value: 'bounse' }
        ]
    },
    //流行 新款 精选
    class: {   //商品分类
        type: Array,
        default: ['鞋', '运动鞋', '流行']
    },
    description: {  //描述
        type: String,
        default: '百搭的黑色覆面，上脚有型。'
    },
    ctime: {     //创建时间
        type: Date,
        default: new Date()
    },
    img: {
        type: String,
        default: 'http://shihuo.hupucdn.com/kupload2018/202061/15910070560000.?imageView2/1/w/400/h/400/interlace/1'
    },
    favorites: {
        type: Number,
        default: 246
    },
    comments: {
        type: Array,
        default: []
    }
})
//db.goods.find({class:{$elemMatch:{$eq:'精选'}}}) 查找数组中是否含有某个值
var Goods = mongoose.model('Goods', goodschema, 'goods')

module.exports = Goods
