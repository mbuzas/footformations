const mongoose = require('mongoose');
const { Schema } = mongoose;

const defaultFormationSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    coordinates:
        [
            {
                x: { type: Number },
                y: { type: Number },
            }
        ]
});

const defaultFormation = mongoose.model('defaultFormation', defaultFormationSchema);

module.exports = defaultFormation;