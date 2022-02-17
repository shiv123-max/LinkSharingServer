const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/keys");
const cors = require("cors");
const dataRoute = require("./routes/data");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection is successful"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", dataRoute);

app.listen(process.env.PORT, () => {
  console.log("backend server is running!");
});
