exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

HeartFeed = require("../model/weheartit-feed.js").HeartFeed;

exports.widget = function(req, res){
    var userid = req.params.userid;
    
    var feed = new HeartFeed(userid);

    req.pause();

    feed.get(6, function(hearts) { 
        req.resume();
        res.render('widget', { title: userid, hearts: hearts });
    });    
};