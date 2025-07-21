// basic setup
const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// imports
const authRoute = require("./routes/authRoute");
const protectedRoute = require("./routes/protectedRoute");
const errorHandler = require("./Middleware/errorHandler");
const dbConnect = require("./Config/connectDb");

// connecting to mongo db
dbConnect();

// middlewares and Routing
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieparser());
app.use("/auth", authRoute);
app.use("/app", protectedRoute);
app.use(errorHandler);

// listing app
app.listen(PORT, () => {
  console.log("App listning on port", PORT);
});
