const express = require('express');
const router = express.Router();
const model = require('../models/task')();


router.get('/', (req, res) => {
    model.find(req.body).then((data) => {
        res.send(data);
    }).catch((err) => {
        if (err) throw err;
    });
});

router.post('/', (req, res) => {
    let data = req.body;
    model.create(data, (err, task) => {
        if (err) throw res.send(err);
        return res.send(task);
    });

});

router.delete('/', (req, res) => {
    model.remove(req.body, (err, task) => {
        if (err) throw err;
        res.send(task);
    })
});

router.put('/', (req, res) => {
    model.update(req.body[0], req.body[1], (err, task) => {
        if (err) throw err;
        res.send(task);
    });
});


module.exports = router;