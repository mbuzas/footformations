const router = require('express').Router();
let Formation = require('../models/formation.model');

router.route('/').get((req, res) => {
    Formation.find()
        .then(formations => res.json(formations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const formation = req.body.formation;
    const players = req.body.players;
    const coordinates = req.body.coordinates;

    const newFormation = new Formation({ formation, players, coordinates });

    newFormation.save()
        .then(() => res.json('Formation Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Formation.findById(req.params.id)
        .then((formation) => res.json(formation))
        .catch((err => res.status(400).json('Error:' + err)));
})
router.route('/:id').delete((req, res) => {
    Formation.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/update/:id').post((req, res) => {
    Formation.findById(req.params.id)
        .then(formation => {
            formation.formation = req.body.formation;
            formation.players = req.body.players;
            formation.coordinates = req.body.coordinates;

            formation.save()
                .then(() => res.json('Formation Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;