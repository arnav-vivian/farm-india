import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import cropsRoute from './Routes/crops.js';
import usersRoute from './routes/users.js';
import cors from 'cors';
const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB Connection Success");
    } catch (error) {
        console.log("MongoDB Connection Failed");
        throw error;
    }

};
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//middlewares
app.use(express.json());
app.use('/auth', authRoute);
app.use('/user', usersRoute);
app.use('/crops', cropsRoute);
const port = 8800;

app.listen(port, () => {
    connect();
    console.log('Server started on port ${port}...welcome');
});