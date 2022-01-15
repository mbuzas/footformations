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

export default router