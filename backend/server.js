const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

const defaultFormationsRouter = require('./routes/defaultformations');
const userFormationsRouter = require('./routes/userformations');
const usersRouter = require('./routes/users');

app.use('/defaultformations', defaultFormationsRouter);
app.use('/userformations', userFormationsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})