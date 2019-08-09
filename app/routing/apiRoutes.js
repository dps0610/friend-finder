var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var bestFriend = {
            name: "",
            img: "",
            blurb: "",
            scoreDiff: Infinity
        }

        var userScore = req.body.scores
        console.log("What we get from the front ", userScore)

        var totalDifference;

        // this loop looks at all our friends
        for(let i = 0; i < friends.length; i++){
            var currentFriend = friends[i];
            totalDifference = 0;
            //this loop looks at each question score
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var userScoreVal = userScore[j];
                // currentFriendScore = currentFriendScore + currentFriend.scores[j] 
                console.log("this is the user Score in the for loop: ", parseInt(userScoreVal))
                totalDifference += Math.abs(parseInt(userScoreVal) - parseInt(currentFriendScore))
            }

            if (totalDifference <= bestFriend.scoreDiff){
                bestFriend.name = currentFriend.name;
                bestFriend.img = currentFriend.img;
                bestFriend.blurb = currentFriend.blurb;
                bestFriend.scoreDiff = totalDifference;
            }
            console.log("current friend: " + currentFriend.name + " total diff: ",totalDifference)
        }
        console.log("This is our best friend: "+ bestFriend.name + "Score: " + bestFriend.scoreDiff)
        res.json(bestFriend)
    })
}

