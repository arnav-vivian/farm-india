import express from 'express';
import User from '../Model/User.js';
import Crop from '../Model/Crop.js';

export const createCrop = async (req, res) => {
    const newCrop = new Crop(req.body);
    try {
        const savedCrop = await newCrop.save();
        res.status(200).json(savedCrop);

    } catch (err) {
        res.status(500).json(err);
    }
};
export const deleteCrop = async (req, res) => {
    try {
        await Crop.findByIdAndDelete(req.params.id);

        res.status(200).json("selectd crop has been deleted");
    }
    catch (err) {
        res.status(500).json(err);
    }
};

export const modifyCrop = async (req, res) => {
    try {
        const updateCrop = await Crop.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getAllCrop = async (req, res) => {
    try {
        const allCrops = await Crop.find();
        res.status(200).json(allCrops);
    } catch (err) {
        res.status(500).json(err);
    }
};
