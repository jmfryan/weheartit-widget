var FeedParser = require('feedparser')

HeartFeed = function(username) {
    if(username === undefined)
        throw "Must contruct a HeartFeed by passing a username.";

    this.username = username;
};

HeartFeed.prototype._getBigImage = function(description) {
    var regex = /src="(.*)_large\.(.*)"/
    var match = regex.exec(description);
    return match[1] + "_large." + match[2];};

HeartFeed.prototype._getThumbnail = function(description) {
    var regex = /src="(.*)_large\.(.*)"/
    var match = regex.exec(description);
    return match[1] + "_tiny." + match[2];
};

HeartFeed.prototype.get = function(finished) {
    var self = this;
    var ret = [];

    parser = new FeedParser();

    parser.on('article', function(article){ 
        var item = {
            title: article.title,
            link: article.link,
            big_image: self._getBigImage(article.description),
            thumbnail: self._getThumbnail(article.description)
        };
        ret.push(item);
    });
    
    parser.parseFile('http://weheartit.com/'+ this.username + '.rss', function() { finished(ret) });
};

exports.HeartFeed = HeartFeed;