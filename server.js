const express = require("express");
const path = require("path");

const port = 8080 || process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + "/app/public")));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);
