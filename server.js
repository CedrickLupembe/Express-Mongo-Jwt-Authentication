const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./database/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/auth");
const postRoute = require("./routes/posts");
const stars = require("./routes/Users");

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", routes);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/stars", stars);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
