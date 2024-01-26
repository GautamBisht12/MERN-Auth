const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
// const authenticate = require('./middleware/authenticate')

app.use(cors());

app.use(express.json());

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

require("./db/connect");
app.use(require("./route/auth"));
const User = require("./model/userSchema");

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
