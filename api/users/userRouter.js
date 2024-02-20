const express = require('express');
const router = express.Router();
const {register, userLogIn, userLogOut,profileUpdate} = require('./userControllers');
const verifyToken = require('../../middlewares/verifyToken');


router.post("/signup", register);
router.post("/login", userLogIn);
router.get("/logout", verifyToken, userLogOut)
router.post("/profileUpdate/:id", profileUpdate);






module.exports = router;