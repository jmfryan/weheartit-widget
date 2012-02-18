
/**
 * Module dependencies.
 */

var express = require('express')
var stylus = require('stylus');

var routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.use(stylus.middleware({ 
  debug: true,
  src: __dirname + '/public', 
  dest: __dirname + '/public',
  compile: compileMethod
}));

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

function compileMethod(str) {
  return stylus(str)
    .set('compress', true);
};

// Routes

app.get('/', routes.index);
app.get('/widget/:userid/:imagecount', routes.widget);

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
