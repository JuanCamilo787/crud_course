const mongoose = require('mongoose');

let db;

module.exports = function connection(){
    if(!db){
        db = mongoose.connect('mongodb://localhost:777/api',{
            useMongoClient:true
        });
    }
    return db;
}