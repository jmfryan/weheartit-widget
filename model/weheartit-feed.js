HeartFeed = function(username) {
    if(username === undefined)
        throw "Must contruct a HeartFeed by passing a username."

    this.username = username;
};

HeartFeed.prototype.get = function(count) {
    count = count || 6;

    var ret = [];

    for (var i = 0; i < count; i++) {
        var item = {
            title: "A CUP OF JO: Bright pink lipstick",
            link: "http://weheartit.com/entry/23308749",
            big_image: "http://data.whicdn.com/images/23308749/bright-pink-lipstick_large.jpg",
            thumbnail: "http://data.whicdn.com/images/23308749/bright-pink-lipstick_tiny.jpg"
        };

        ret.push(item);
    };

    return ret;
};

exports.HeartFeed = HeartFeed;