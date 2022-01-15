import mongoose from 'mongoose'
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


export default mongoose.model('defaultFormation', defaultFormationSchema)