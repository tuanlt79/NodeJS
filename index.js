const express = require("express");
const { rootRouter } = require("./routers/root.Router");
const app = express();
const path = require("path");

const port = 5000;
const pathPublicDirectory = path.join(__dirname, "./public");
// console.log(pathPublicDirectory)
app.use(express.static(pathPublicDirectory))
//localhost:4000/
app.use(express.json());
app.use("/api", rootRouter);
http: app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
