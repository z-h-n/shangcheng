/**
 * login.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/5 下午8:34
 **/

module.exports = function (req, res, next) {
    if (req.body.userName == '942785030' && req.body.passWord == '123456') {
        res.send({errorNo: 0, message: '登陆成功'})
    } else {
        res.send({errorNo: 1000, message: '账号密码错误'})
    }
}