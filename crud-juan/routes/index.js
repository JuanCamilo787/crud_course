const express = require('express');
const router = express.Router();
const model = require('../models/task')();


// router.get('/', (req, res)=>{
// res.send(model.find(req.body));
// })

router.post('/', (req, res)=>{
    let data = req.body;
    console.log(data)
    model.create(data, (err, task)=>{
        if (err) throw res.send(err);
        return res.send(task);
    }); 

})


module.exports = router;