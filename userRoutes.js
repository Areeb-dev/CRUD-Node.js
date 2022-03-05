const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("./userController");

router.post("/users", createUser);

router.get("/users", getUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

module.exports = router;
