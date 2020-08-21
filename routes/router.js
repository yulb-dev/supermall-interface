const routerHome = require('./home')
const goodsDetail = require('./goodsDetail')
const caterory = require('./category')
const login = require('./login')
const recommend = require('./recommend')
const favorites = require('./favorites')
const search = require('./search')
const catePage = require('./catePage')
const settingsPage = require('./settingsPage')

//导出
module.exports = function (app) {
    app.use('/home', routerHome)
    app.use('/goodsDetail', goodsDetail)
    app.use('/category', caterory)
    app.use('/login', login)
    app.use('/recommend', recommend)
    app.use('/favorites', favorites)
    app.use('/search', search)
    app.use('/catePage', catePage)
    app.use('/settingsPage', settingsPage)
}