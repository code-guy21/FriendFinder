const axios = require("axios");
const fs = require("fs");

const randomScores = () => {
  return [...new Array(10)].map((score) => Math.floor(Math.random() * 5) + 1);
};

const generateRequests = (num) => {
  return [...new Array(num)].map((request) =>
    axios.get(
      `https://randomuser.me/api?gender=${
        Math.floor(Math.random() * 2) === 0 ? "male" : "female"
      }`
    )
  );
};

const generateUsers = () => {
  axios.all(generateRequests(10)).then((resp) => {
    let users = [];

    resp.forEach((user) => {
      let info = user.data.results[0];

      users.push({
        name: info.name.first,
        photo: info.picture.large,
        scores: randomScores(),
      });
    });

    fs.writeFile("output.js", JSON.stringify(users), (err) => {
      if (err) throw err;
    });
  });
};

generateUsers();
