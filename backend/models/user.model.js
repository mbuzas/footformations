import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },

    players: [
        {
            no: { type: Number },
            name: { type: String }
        }
    ]
});

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

userSchema.methods.createJWT = function () {
    return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

export default mongoose.model('User', userSchema)
