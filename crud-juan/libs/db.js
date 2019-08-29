const mongoose = require('mongoose');

let db;

module.exports = function connection(){
    if(!db){
        db = mongoose.connect('mongodb://localhost:27017/api',{
            useMongoClient:true
        });
    }
    return db;
}