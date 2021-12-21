const mongoose = require('mongoose');
const { Schema } = mongoose;

const formationSchema = new Schema({
    formation: { type: String, required: true },
    players: { type: Array, required: true },
    coordinates: { type: [[[Number], [Number]]], required: true },
}, {
    timestamps: true,
});

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;