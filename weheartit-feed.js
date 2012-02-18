HeartFeed = function(username) {
    if(username === undefined)
        throw "Must contruct a HeartFeed by passing a username."

    this.username = username;
};

HeartFeed.prototype.get = function(count) {
    
};