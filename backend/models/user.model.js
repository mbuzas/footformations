

const mongoose = require('mongoose');
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
        id: { type: Schema.Types.ObjectId, ref: 'UserFormation' }
    }
}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);
User.findOne({ username: 'Romas Žalnieraitis' })
    .populate('formations')
    .then(user => console.log(user))
module.exports = User;