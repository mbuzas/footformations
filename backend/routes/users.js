import express, { Router } from 'express'
import User from '../models/user.model.js'
const router = express.Router();


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
    if (!user) {
        console.log('inavlid credentials');
        return
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        console.log('inavlid credentials');
        return
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(200).json({ user, token })
});


router.route('/:id').patch(async (req, res) => {
    await User.findByIdAndUpdate(
        req.params.id,
        { $push: { "players": { "no": req.body.no, "name": req.body.name } } },
        { safe: true, upsert: true, new: true },
    )
    const user = await User.findById(req.params.id)
    res.status(200).json({ user })
});
router.route('/:id/removeplayer').patch(async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.params.id,
            // console.log(req.body.id)
            { $pull: { "players": { _id: req.body.id } } },
            { safe: true, upsert: true, new: true },
        )
        const user = await User.findById(req.params.id)
        res.status(200).json({ user })
    }
    catch (e) {
        console.log(e);
    }
});
export default router