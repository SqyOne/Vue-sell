var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app = express()

var router = express.Router()

router.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

/* apiRoutes.get('/api/appData', (req, res) => {
  res.json({
    errno: 0,
    data: appData
  })//接口返回json数据，上面配置的数据appData就赋值给data请求后调用
}) */
apiRoutes.get('/seller', (req, res) => {
  res.json({
    // 这里是你的json内容
    errno: 0,
    data: seller
  })
})
apiRoutes.get('/goods', (req, res) => {
  res.json({
    // 这里是你的json内容
    errno: 0,
    data: goods
  })
})
apiRoutes.get('/ratings', (req, res) => {
  res.json({
    // 这里是你的json内容
    errno: 0,
    data: ratings
  })
})

app.use('/api', apiRoutes);

//定义express静态目录
app.use(express.static('./dist'))
//启动express
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
    /* // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    } */
})
