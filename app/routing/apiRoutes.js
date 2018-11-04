
var friendinfo = require("../data/friends");
 
module.exports = function(app) {
  // Show all friends
  app.get("/api/friends", function(req, res) {
    return res.json(friendinfo);
  });
  
  
  
  // Find a friend
  app.post("/api/friends", function(req, res) {
    
    var match;
    for (var i = 0; i < friendinfo.length; i++) {
        var friendScore = friendinfo[i].scores;
        var difference = 0;

        for (var j = 0; j < friendScore.length; j++) {
          difference = difference + Math.abs(req.body.scores[j] - friendScore[j]);
        }

        if (!(match == null)) {
          if (match.diff > difference) {
            match = {index: i, diff: difference};
          } else if (match.diff == difference && Math.floor(Math.random() * 2) === 0) {
            match = {index: i, diff: difference};
          } 
        } else {
          match = {index: i, diff: difference};
        }
    }

    res.json(friendinfo[match.index]);
   
    friendinfo.push(req.body);

    res.end();
  });
}