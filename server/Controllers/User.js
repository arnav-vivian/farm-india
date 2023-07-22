import express from 'express';
import User from '../Model/User.js';
export const register = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};