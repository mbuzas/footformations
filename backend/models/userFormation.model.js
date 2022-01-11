
const mongoose = require('mongoose');
const User = require('./user.model.js');
const { Schema } = mongoose;

const userFormationSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
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
// User.find({})
//     .populate('formations')
//     .exec(function (err, user) {
//         console.log(user);

//     });
module.exports = userFormation;