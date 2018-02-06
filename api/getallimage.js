/**
 * getallimage.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/6 下午8:42
 **/

var fs = require('fs')
var path = require('path')
module.exports = function (req, res, next) {
    var indexA = fs.readdirSync(path.resolve('public/backImg/index/a'))
    var indexB = fs.readdirSync(path.resolve('public/backImg/index/b'))
    var indexC = fs.readdirSync(path.resolve('public/backImg/index/c'))
    var caseA = fs.readdirSync(path.resolve('public/backImg/case/a'))
    var caseB = fs.readdirSync(path.resolve('public/backImg/case/b'))
    var caseC = fs.readdirSync(path.resolve('public/backImg/case/c'))

    for (var i = 0; i < indexA.length; i++) {
        indexA[i] = '/backImg/index/a/' + indexA[i]
    }

    for (var i = 0; i < indexB.length; i++) {
        indexB[i] = '/backImg/index/b/' + indexB[i]
    }

    for (var i = 0; i < indexC.length; i++) {
        indexC[i] = '/backImg/index/c/' + indexC[i]
    }

    for (var i = 0; i < caseA.length; i++) {
        caseA[i] = '/backImg/case/c/' + caseA[i]
    }

    for (var i = 0; i < caseB.length; i++) {
        caseB[i] = '/backImg/case/c/' + caseB[i]
    }

    for (var i = 0; i < caseC.length; i++) {
        caseC[i] = '/backImg/case/c/' + caseC[i]
    }
    var imagePath = {
        indexImage: {
            a: indexA,
            b: indexB,
            c: indexC
        },
        caseImage: {
            a: caseA,
            b: caseB,
            c: caseC,
        }
    }
    var resData = {
        data: imagePath,
        errorNo: 0,
        message: '查询成功'
    }
    res.send(resData);
}