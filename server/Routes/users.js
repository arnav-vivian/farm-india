import express from "express";
import { register } from "../Controllers/User.js";
const router = express.Router();


//Register
router.get("/register", register);


export default router;