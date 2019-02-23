let friendsData = require("../data/friends");

let test = [1,2,3,4,5,5,4,3,2,1]

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        totalDiff(req.body.scores);
        friendsData.sort(function(a, b){return a.diff - b.diff});
        res.json(friendsData[0]);
    });
}

function totalDiff(arr) {
    for (let i = 0; i < friendsData.length; i++) {
        friendsData[i].diff = arrayDiff(arr, friendsData[i].scores);
    };
};

function arrayDiff(arr, compArr) {
    let scoreDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        scoreDiff += Math.abs(arr[i] - compArr[i]);
    };
    return scoreDiff;
};