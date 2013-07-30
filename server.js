var express = require('express'),
	jade = require('jade'),
	stylus= require('stylus'),
	coffee = require('coffee-script'),
	fs = require('fs');

var app = express();

var router = require('./router')

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  //静态文件
  app.use('/static', express.static(__dirname + '/static'));
  app.use(router(app));
  //生产环境
  //app.set('env', 'production');
});

app.listen(3000);