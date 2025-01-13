const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/users/login", userController.loginUser);
router.get("/users/logout/:id");
router.get("/users/activate/:id", userController.activateUser);

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users/search", userController.findUsers);
router.get("/users/:id", userController.findUserById);

module.exports = router;
