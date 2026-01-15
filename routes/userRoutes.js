const express = require("express");
const {
  createUser,
  getUsers
} = require("../controllers/user.Controller");

const router = express.Router();

router.post("/", createUser);
// router.get("/", getAllUsers);
router.get("/:id", getUsers);

module.exports = router;