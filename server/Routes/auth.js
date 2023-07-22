import express from "express";
const router = express.Router();

import { login, verify } from "../Controllers/auth.js";

//Login
router.get("/login", login);

//verffy
router.post("/verify", verify);

export default router;