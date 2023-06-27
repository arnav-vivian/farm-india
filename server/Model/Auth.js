import mongoose from 'mongoose';
const { Schema } = mongoose;

const AuthSchema = new Schema({

    Otp: {
        type: Number,
    }

});

export default mongoose.model('Authentication', AuthSchema);