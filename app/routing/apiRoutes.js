let friends = require("../data/friends");

module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    friends.push(req.body);
    res.json(findMatch(req.body));
  });

  const findMatch = (user) => {
    let bestMatch = [Number.MAX_VALUE, null];

    friends.forEach((friend, i) => {
      let match = compare(user.scores, friend.scores);

      if (match < bestMatch[0]) {
        bestMatch = [match, i];
      }
    });

    return friends[bestMatch[1]];
  };

  const compare = (a, b) => {
    return a.reduce((total, score, i) => total + Math.abs(score - b[i]), 0);
  };
};
