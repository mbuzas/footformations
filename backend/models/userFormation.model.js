const users = require('./user.model');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const { Schema } = mongoose;


const userFormationSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    user: {
        // type: Schema.Types.ObjectId, ref: 'User'
        $ref: users,
        $id: ObjectId("61c9a88d2a44ce08036b84b1")
    },
    coordinates:
        [
            {
                x: { type: Number },
                y: { type: Number },
            }
        ]
});

const userFormation = mongoose.model('userFormation', userFormationSchema);

module.exports = userFormation;