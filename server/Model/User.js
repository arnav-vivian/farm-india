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
    pincode: {
        type: Number,
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
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },


});

export default mongoose.model('User', UserSchema);