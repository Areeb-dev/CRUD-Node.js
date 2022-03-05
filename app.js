const express = require("express");
const app = express();
const userRoutes = require("./userRoutes");



app.use(express.json());
app.use("/", userRoutes);

app.listen(3000);
