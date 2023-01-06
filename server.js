const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect(
  "mongodb+srv://admin:admin@postsdb.ptqqt1h.mongodb.net/PostsDb"
);

// require route
app.use("/", require("./routes/noteRoute"));

app.listen(5000, function () {
  console.log("Express server is running on Port 5000....");
});
