const express = require("express");

const port = 8080 || process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);
