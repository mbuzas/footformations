import express, { Router } from 'express'
const router = express.Router();
import User from '../models/user.model.js'


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const players = req.body.players;
    const password = req.body.password;
    const email = req.body.email;


    const newUser = new User({ username, password, email, players });
    const token = newUser.createJWT()
    newUser.save()
        .then(() => res.json({ newUser: { username, email, players }, token }))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.log('pleasse fill all values');
    }
    const user = await User.findOne({ email }).select('+password')
    // console.log(user);
    if (!user) {
        console.log('inavlid credentials');
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        console.log('inavlid credentials');
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(200).json({ user, token })
});

export default router