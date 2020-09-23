const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const userSchema= new Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});

var Users= mongoose.model('user', userSchema);
module.exports= Users;