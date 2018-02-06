/**
 * upload.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/6 下午7:32
 **/
var formidable = require('formidable')
var fs = require('fs')

module.exports = function (req, res, next) {
    function timeHash(type) {
        var yyyy = new Date().getFullYear()
        var MM = new Date().getMonth() + 1
        var dd = new Date().getDate()
        var hh = new Date().getHours()
        var mm = new Date().getMinutes()
        var ss = new Date().getSeconds()
        var ms = new Date().getMilliseconds()
        return '/shangcheng' + yyyy + '_' + MM + '_' + dd + '_' + hh + '_' + mm + '_' + ss + '_' + ms + '.' + type.split('/')[1]
    }
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; // 编码
    form.keepExtensions = true; // 保留扩展名
    form.multiples=true
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.uploadDir = 'public/backImg'  // 存储路径
    form.parse(req,function(err, body, files){ // 解析 formData数据
        if(err){ return console.log(err) }
        files.file.forEach(val => {
            let imgPath = val.path // 获取文件路径
            let imgName = 'public/backImg/' + body.pagePath + '/' + body.imagePath + timeHash(val.type) // 修改之后的名字
            let data = fs.readFileSync(imgPath) // 同步读取文件

            fs.writeFileSync(imgName,data)
            fs.unlink(imgPath,function(){}) // 删除文件
        })
        res.send({errorNo: 0, message: '上传成功'})
    })
}