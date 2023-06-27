import express from "express";
const router = express.Router();

import { login, verify } from "../Controllers/auth.js";

//Login
router.get("/login", login);

//verffy
router.post("/verify", verify);

//Register
router.get("/register", (req, res) => {
    res.send("register end!")
});

export default router;