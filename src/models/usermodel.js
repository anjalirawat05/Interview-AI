const mongoose = require ("mongoose")


const UserSchema = new mongoose.Schema({

    username :{
        type: String,
        unique :[true, " username already exists"],
        required : true
    },

    email:{
       type: String,
        unique :[true, " account already exists with this email id"],
        required : true
    },
    password:{
       type: String,
        required : true
    }


})
 //it mentions users ka data kaha store hoga - users k andr
const UserModel = mongoose.model("users",UserSchema)  

module.exports = UserModel