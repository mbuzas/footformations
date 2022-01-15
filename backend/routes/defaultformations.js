import express, { Router } from 'express'
const router = express.Router();

import DefaultFormation from '../models/defaultFormation.model.js'

router.route('/').get((req, res) => {
    DefaultFormation.find()
        .then(formations => res.json(formations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const type = req.body.type;
    const coordinates = req.body.coordinates;

    const newDefaultFormation = new DefaultFormation({ title, type, coordinates });

    newDefaultFormation.save()
        .then(() => res.json('Default Formation Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    DefaultFormation.findById(req.params.id)
        .then((formation) => res.json(formation))
        .catch((err => res.status(400).json('Error:' + err)));
})
router.route('/:id').delete((req, res) => {
    DefaultFormation.findByIdAndDelete(req.params.id)
        .then(() => res.json('Default Formation deleted'))
        .catch(err => res.status(400).json('Error' + err))
})

// router.route('/update/:id').post((req, res) => {
//     DefaultFormation.findById(req.params.id)
//         .then(formation => {
//             formation.title = req.body.title;
//             formation.type = req.body.type;
//             formation.coordinates = req.body.coordinates;

//             formation.save()
//                 .then(() => res.json('Formation Updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });
export default router