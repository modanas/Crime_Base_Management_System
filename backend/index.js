const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes/userAuthRoutes");
const adminRoutes = require("./routes/adminAuthRoutes");
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    // "mongodb+srv://mdfaisalansari411:adminadmin@cluster0.bhxv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Crime_management_db"
    "mongodb+srv://mdfaisalansari411:adminadmin@cluster0.bhxv0.mongodb.net/Crime_management_db"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("failed to connect database", err);
  });

const PORT = 5000;
app.use("/", routes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
});
