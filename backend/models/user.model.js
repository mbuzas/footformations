

const mongoose = require('mongoose');
const userFormation = require('./userFormation.model.js');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    players: [
        {
            no: { type: Number },
            name: { type: String }
        }
    ],
    formations: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserFormation'
    }
}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);

// userFormation.find({})
//     .populate('formations')
//     .exec(function (err, user) {
//         console.log(user);
//         // do something
//     });

module.exports = User;