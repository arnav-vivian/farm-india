import express from "express";
const router = express.Router();

import { login } from "../Controllers/auth.js";

//Login
router.get("/login", login);

//Register
router.get("/register", (req, res) => {
    res.send("register end!")
});

export default router;