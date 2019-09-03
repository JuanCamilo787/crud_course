const express = require('express');
const router = express.Router();
const model = require('../models/task')();


router.get('/', (req, res) => {
    model.find(req.body).then((data) => {
        res.send(data);
    }).catch((err) => {
        if (err) throw err;
    })
})

router.post('/', (req, res) => {
    let data = req.body;
    model.create(data, (err, task) => {
        if (err) throw res.send(err);
        return res.send(task);
    });

})


module.exports = router;