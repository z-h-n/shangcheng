/**
 * case.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/3 下午4:36
 **/
var fs = require('fs')
var path = require('path')

module.exports = function (req, res, next) {
    var imagePath = {}
    var paA = fs.readdirSync(path.resolve('public/backImg/case/a'))
    var paB = fs.readdirSync(path.resolve('public/backImg/case/b'))
    var paC = fs.readdirSync(path.resolve('public/backImg/case/c'))

    for (var i = 0; i < paA.length; i++) {
        paA[i] = '/backImg/index/a/' + paA[i]
    }

    for (var i = 0; i < paB.length; i++) {
        paB[i] = '/backImg/index/a/' + paB[i]
    }

    for (var i = 0; i < paC.length; i++) {
        paC[i] = '/backImg/index/a/' + paC[i]
    }
    imagePath.a = paA
    imagePath.b = paB
    imagePath.c = paC
    res.render('case', { title: '尚城墙绘-我们更专业', imagePath: encodeURIComponent(JSON.stringify(imagePath))});
}