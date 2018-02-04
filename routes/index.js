var IndexAction = require('../controller/index')
var CaseAction = require('../controller/case')
module.exports = function (app) {
	app.get('/', function(req, res, next) {
        IndexAction(req, res, next)
  		// res.render('index', { title: '尚城墙绘-我们更专业' });
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
        // res.render('case', { title: '尚城墙绘-我们更专业' });
    });
};

