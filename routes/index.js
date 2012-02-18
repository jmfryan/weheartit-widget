exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

HeartFeed = require("../model/weheartit-feed.js").HeartFeed;

exports.widget = function(req, res){
    var userid = req.params.userid;
    var imagecount = req.params.imagecount;
    
    var feed = new HeartFeed(userid);

    feed.get(function(hearts) { 
        res.render('widget', { title: userid, userid: userid, hearts: hearts.slice(0, imagecount) });
    });    
};