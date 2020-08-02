const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
let apiRoutes= require("./controllers/api")
let htmlRoutes = require("./controllers/htmlControllers")
app.use(apiRoutes);
app.use(htmlRoutes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});