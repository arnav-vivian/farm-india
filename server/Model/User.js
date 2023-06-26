import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    familySize: {
        type: Number,
        required: false
    },
    income: {
        type: Number,
        required: true
    },

    dist: {
        type: Number,
        required: true
    },

    state: {
        type: Number,
        required: true
    },


});

export default mongoose.model('User', UserSchema);