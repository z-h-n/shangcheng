/**
 * deleteImage.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/6 下午8:42
 **/
var fs = require('fs')
module.exports = function (req, res, next) {
    fs.unlink('public' + req.body.url, function (err) {
        if (err) {
            res.send({errorNo: 1000, message: '删除失败'})
        } else {
            res.send({errorNo: 0, message: '删除成功'})
        }
    }) // 删除文件
}