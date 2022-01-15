import express, { Router } from 'express'
const router = express.Router();
import UserFormation from '../models/userFormation.model.js'

router.route('/').get((req, res) => {
    UserFormation.find()
        .then(formations => res.json(formations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const type = req.body.type;
    const createdBy = req.body.createdBy;
    const coordinates = req.body.coordinates;

    const newUserFormation = new UserFormation({ title, type, createdBy, coordinates });

    newUserFormation.save()
        .then(() => res.json('User Formation Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    UserFormation.findById(req.params.id)
        .then((formation) => res.json(formation))
        .catch((err => res.status(400).json('Error:' + err)));
})
router.route('/:id').delete((req, res) => {
    UserFormation.findByIdAndDelete(req.params.id)
        .then(() => res.json('USer Formation deleted'))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/update/:id').post((req, res) => {
    UserFormation.findById(req.params.id)
        .then(formation => {
            formation.title = req.body.title;
            formation.type = req.body.type;
            formation.user = req.body.user;
            formation.coordinates = req.body.coordinates;

            formation.save()
                .then(() => res.json('Formation Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router