const express = require("express");
const config = require("config");
const app = express();
const mongoose=require("mongoose");
const cors = require("cors");

const path = require("path");

// Connect DB
const db = config.get("mongoURI");

// connect to mongo

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongo DB connected ..."))
  .catch(err => console.log("err"));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api", require("./routes/Note"));


// Server Static assests in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.relative(__dirname, "client", "build", "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
