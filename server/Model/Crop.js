import mongoose from 'mongoose';
const { Schema } = mongoose;

const CropSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    imageOfCrop: {
        type: String,
        required: false
    },

    tagCrop: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },
    pricePerKg: {
        type: String,
        required: true
    },

});

export default mongoose.model('Crop', CropSchema);