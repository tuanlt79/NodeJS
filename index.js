const express = require("express");
const { rootRouter } = require("./routers/root.Router");
const app = express();
const port = 4000;
//localhost:4000/
app.use(express.json());
app.use("/api", rootRouter);
http: app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
