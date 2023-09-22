const express = require('express');

const userController = require("../controllers/User");
const myMiddleware = require("../middlewares/myMiddleware")

const router = new express.Router();

// Routing

router.post(`/register`, myMiddleware, userController.registerUser);

router.post(`/login`, userController.loginUser);

router.patch(`/edit`, userController.editUser);

router.delete("/delete", userController.deleteUser);

router.get("/list", userController.getUser);

module.exports = router;