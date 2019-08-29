const express = require('express');
const router = express.Router();
const model = require('../models/task')();


router.get('/', (req, res)=>{
    model.find({}, (err, data)=>{
        if(err) throw err;

        res.render('./../views/index.ejs');

    });
})




module.exports = router;