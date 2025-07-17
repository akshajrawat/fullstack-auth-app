// basic setup
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// imports
const authRoute = require("./routes/authRoute");
const errorHandler = require("./Middleware/errorHandler");
const dbConnect = require("./Config/connectDb");

// connecting to mongo db
dbConnect();

// middlewares and Routing
app.use(express.json());
app.use("/auth", authRoute);
app.use(errorHandler);

// listing app
app.listen(PORT, () => {
  console.log("App listning on port", PORT);
});
