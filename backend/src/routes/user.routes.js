const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.put("/users/:id");
router.delete("/users/:id");
router.get("/users/:id");

module.exports = router;
