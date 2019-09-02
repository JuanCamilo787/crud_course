const mongoose = require('mongoose');

let db;

module.exports.connection = function (){
    if(!db){
        db = mongoose.connect('mongodb://localhost:27017/juanapp',{
        useNewUrlParser: true
        }).then(res => {
            console.log('db connected')
        }).catch(err => {
            console.log(err);
        });
    }
    return db;
}