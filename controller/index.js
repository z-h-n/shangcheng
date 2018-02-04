/**
 * index.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/3 下午3:12
 **/
var fs = require('fs')
var path = require('path')

module.exports = function (req, res, next) {
    var imagePath = {}
    var paA = fs.readdirSync(path.resolve('public/backImg/index/a'))
    var paB = fs.readdirSync(path.resolve('public/backImg/index/b'))
    var paC = fs.readdirSync(path.resolve('public/backImg/index/c'))

    for (var i = 0; i < paA.length; i++) {
        paA[i] = '/backImg/index/a/' + paA[i]
    }

    for (var i = 0; i < paB.length; i++) {
        paB[i] = '/backImg/index/b/' + paB[i]
    }

    for (var i = 0; i < paC.length; i++) {
        paC[i] = '/backImg/index/c/' + paC[i]
    }
    imagePath.a = paA
    imagePath.b = paB
    imagePath.c = paC
    res.render('index', { title: '尚城墙绘-我们更专业', imagePath: encodeURIComponent(JSON.stringify(imagePath))});
}