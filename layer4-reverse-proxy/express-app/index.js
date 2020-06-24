const express = require("express");
const app = express();
const port = 3000;

const serverName = process.env.SERVER_NAME;

app.get("/", (req, res) => res.send(`Responding from App ${serverName}`));
app.get("/route1", (req, res) =>
  res.send(`Responding from Route 1 of App ${serverName}`)
);
app.get("/route2", (req, res) =>
  res.send(`Responding from Route 2 of App ${serverName}`)
);
app.listen(port);
