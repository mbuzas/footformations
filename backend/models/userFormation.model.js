
import mongoose from 'mongoose'
import User from './user.model.js'

const { Schema } = mongoose;

const userFormationSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coordinates:
        [
            {
                x: { type: Number },
                y: { type: Number },
            }
        ]
});

export default mongoose.model('userFormation', userFormationSchema)