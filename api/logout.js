/**
 * logout.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/5 下午11:06
 **/

module.exports = function (req, res, next) {
    req.session.user = null;
    res.send({errorNo: 0, message: '退出成功'});
}