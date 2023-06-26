import express from "express";
import Crop from "../Model/Crop.js";
import { createCrop, deleteCrop, modifyCrop, getAllCrop } from "../Controllers/crop.js";
const router = express.Router();

//Create
router.post("/addcrop", createCrop);

//delete
router.post("/delcrop/:id", deleteCrop);

//Modify
router.put("/modifycrop/:id", modifyCrop);

//get all crops
router.get("/allcrops", getAllCrop);


export default router;
