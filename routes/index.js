var IndexAction = require('../controller/index')
var CaseAction = require('../controller/case')
var CheckLogin = require('../middleware/index')
var loginAction = require('../api/login')
module.exports = function (app) {
	app.get('/', function(req, res, next) {
        IndexAction(req, res, next)
	});
    app.get('/contact', function(req, res, next) {
        res.render('abstract', { title: '尚城墙绘-我们更专业' });
    });
    app.get('/synopsis', function(req, res, next) {
        res.render('synopsis', { title: '尚城墙绘-我们更专业' });
    });
    app.get('/procedure', function(req, res, next) {
        res.render('procedure', { title: '尚城墙绘-我们更专业' });
    });
    app.get('/case', function(req, res, next) {
        CaseAction(req, res, next)
    });
    app.get('/login', function(req, res, next) {
        res.render('login', { title: '尚城墙绘-我们更专业' });
    })
    app.get('/setimage', CheckLogin ,function(req, res, next) {
        res.render('setimage', { title: '尚城墙绘-我们更专业' });
    })
    //以下是api路由
    app.post('/login', function(req, res, next) {
        loginAction(req, res, next)
    })
};

