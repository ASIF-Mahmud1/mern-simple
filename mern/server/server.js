const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/user.route"))
app.use(require("./routes/tweet.route"))
app.use(require("./routes/follow.route"))
app.use(require("./routes/blog.route"))
app.use(require("./routes/subCategory.route"))
app.use(require("./routes/category.route"))
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo._connect()

  console.log(`Server is running on port: ${port}`);
});