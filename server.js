const express = require("express");

const port = 8080;
const app = express();

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);
