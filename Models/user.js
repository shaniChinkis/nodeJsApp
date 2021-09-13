const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    password: {type: String, minlength:6},
    fName: String,
    lName: String,
    adresses:[String,String]
});


module.exports=mongoose.model('users',userSchema);