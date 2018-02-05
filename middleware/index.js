/**
 * index.js
 * Author  : Zhang Hao Nan
 * Email   : zhanghaonan@testin.cn
 * Create  : 2018/2/5 下午8:05
 **/

module.exports = function (req, res, next) {
    if(req.session.userName){
        res.redirect('setimage',{username : req.session.userName});
    }else{
        res.redirect('login');
    }
    next()
}