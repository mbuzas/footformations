import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import morgan from 'morgan'
import dotenv from 'dotenv'
import defaultFormationsRouter from './routes/defaultformations.js'
import userFormationsRouter from './routes/userformations.js'
import usersRouter from './routes/users.js'
dotenv.config()

const app = express();
const port = process.env.PORT || 5001;



app.use(cors());

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})





app.use('/defaultformations', defaultFormationsRouter);
app.use('/userformations', userFormationsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})