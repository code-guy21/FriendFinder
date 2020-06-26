const path = require("path");
const { resolveSoa } = require("dns");

module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.send("friends get");
  });

  app.post("/api/friends", (req, res) => {
    res.send("friends post");
  });
};
