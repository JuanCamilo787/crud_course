module.exports = function(){
    var db = require('../libs/db.js');
    var mongoose = require('mongoose');
    
    var task = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },

        description:{
            type: String
        },

        done:{
            type: Boolean
        }
    })

    return mongoose.model('Prueba', task);
}