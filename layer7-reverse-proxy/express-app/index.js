const express = require("express");
const app = express();
const port = 3000;

const serverName = process.env.SERVER_NAME;

app.get("/", (req, res) => res.send(`Responding from APP ${serverName}`));
app.listen(port);
