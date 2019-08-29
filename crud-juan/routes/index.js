const express = require('express');
const router = express.Router();
const model = require('../models/task')();


router.get('/', (req, res)=>{

})

router.post('/post', (req, res)=>{
    let data = new model(req.body, (err, data)=>{
        if (err) throw err;

        res.req.body;
    });

})


module.exports = router;