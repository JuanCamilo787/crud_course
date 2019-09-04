const express = require('express');
const router = express.Router();
const model = require('../models/task')();


router.get('/', (req, res)=>{
model.find(req.body).then((data)=>{
    res.send(data);
}).catch((err)=>{
    if(err) throw err;
});
});

router.post('/', (req, res)=>{
    let data = req.body;
    console.log(data)
    model.create(data, (err, task)=>{
        if (err) throw res.send(err);
        return res.send(task);
    }); 

});

router.delete('/', (req, res)=>{
    model.remove(req.body, (err, task)=>{
        if (err) throw err;
        res.send(task);
    })
});

router.update('/', (req, res)=>{

});


module.exports = router;